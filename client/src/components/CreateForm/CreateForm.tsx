import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Overlay,
  Title,
  Form,
  Label,
  ImgInput,
  TitleInput,
  DescrInput,
  SubmitButton,
  CancelButton,
} from './styles';
import { CreateCharacter } from 'store/crud/crudActions';
import { ICreateCharacter } from 'store/crud/crudTypes';

interface FormProps {
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void
}

const CreateForm: React.FC<FormProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(CreateCharacter(formData));
    setModalOpen(!modalOpen);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const closeHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Overlay
      modalOpen={modalOpen}
    >
      <Form onSubmit={handleSubmit}>
        <Title>Create Your Favorite Character</Title>
        <Label htmlFor="image">Insert your link to Image</Label>
        <ImgInput
          name="image"
          type="text"
          required
          onChange={changeHandler}
        />
        <Label htmlFor="title">Write character title</Label>
        <TitleInput
          name="title"
          type="text"
          required
          onChange={changeHandler}
        />
        <Label htmlFor="description">Write character description</Label>
        <DescrInput
          name="description"
          type="textarea"
          required
          onChange={changeHandler}
        />
        <SubmitButton
          type="submit"
        >
          Create
        </SubmitButton>
        <CancelButton
          type="button"
          onClick={closeHandler}
        >
          Cancel Creation
        </CancelButton>
      </Form>
    </Overlay>
  );
};

export default CreateForm;
