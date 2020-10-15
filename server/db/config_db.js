const Sequelize = require("sequelize");

const sequelize = new Sequelize('crud', 'root', '', {
    dialect: "mysql",
    host: "localhost"
  });

  sequelize.authenticate()
 .then(() => {
   console.log('Database connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });

  const Characters = sequelize.define("Characters", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      }
  });
  
//   (async () => {
//     await sequelize.sync({ force: true });
//     Characters.create({
//         title: 'THE MANDALORIAN',
//         description: 'His body is shielded by beskar armor, his face hidden behind a T-visored mask, and his past is wrapped in mystery. No one is quite sure who this well-equipped stranger is. The Mandalorian is battle-worn and tight-lipped, a formidable bounty hunter in an increasingly dangerous galaxy.',
//         image: 'https://lumiere-a.akamaihd.net/v1/images/mandalorian-databank_9914915c.jpeg?region=160%2C0%2C960%2C540&width=600'
//     }).then(res=>{
//         console.log(res);
//       }).catch(err=>console.log(err));
//     Characters.create({
//             title: 'CHEWBACCA',
//             description: 'A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.',
//             image: 'https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=131%2C0%2C951%2C536&width=600'
//     }).then(res=>{
//         console.log(res);
//       }).catch(err=>console.log(err));
//       Characters.create({
//         title: 'LUKE SKYWALKER',
//         description: 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.',
//         image: 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768'
//     }).then(res=>{
//         console.log(res);
//     }).catch(err=>console.log(err));
//     Characters.create({
//         title: 'YODA',
//         description: 'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.',
//         image: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768'
//     }).then(res=>{
//     console.log(res);
//     }).catch(err=>console.log(err));
//   })();

  module.exports = {
    sequelize: sequelize,
    Characters: Characters
  };