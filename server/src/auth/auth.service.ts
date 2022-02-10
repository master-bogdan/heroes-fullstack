import { UsersService } from '../users/users.service';

export const AuthService = ({
  login: async (dto: any) => {
    const { email, password } = dto;

    try {
      const user = await UsersService.findOne(email);

      if (!user) {
        return res.status(404).json({
          message: 'User not exist!',
          response: 'failed',
        });
      }
  
      const isValidPassword = await bcrypt.compare(password, user.password);
  
      if (!isValidPassword) {
        return res.status(403).json({
          message: 'Wrong password',
          response: 'failed',
        });
      }
  
      const accessToken = jwt.sign(
        { email: user.email },
        accessTokenSecret,
        { expiresIn: '30m' },
      );
  
      user.token = accessToken;
      await user.save();
  
      return res.status(201).json({
        message: 'Authenticated',
        response: 'success',
        token: accessToken,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ response: 'Database server error' });
    }
  },
  register: () => {},
});

export const login = async () => {
  try {
    const user = await UserModel.findOneByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: 'User not exist!',
        response: 'failed',
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(403).json({
        message: 'Wrong password',
        response: 'failed',
      });
    }

    const accessToken = jwt.sign(
      { email: user.email },
      accessTokenSecret,
      { expiresIn: '30m' },
    );

    user.token = accessToken;
    await user.save();

    return res.status(201).json({
      message: 'Authenticated',
      response: 'success',
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: 'Database server error' });
  }
};

// export const register
