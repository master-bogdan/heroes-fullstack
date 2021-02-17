import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, reset, submit } from 'redux-form';
import {
  Overlay, Title, Form, Label, ImgInput, TitleInput, DescrInput, SubmitButton, CancelButton,
} from './styles';

interface FormProps {
  handleSubmit: any
  modalOpen: any
  setModalOpen: any
}

const CreateForm: any = ({ handleSubmit, modalOpen, setModalOpen }: FormProps) => {
  const dispatch = useDispatch();

  // const clickHandler = () => {
  //   setModalOpen(!modalOpen);
  //   dispatch(FetchCharacters());
  // };

  return (
    <Overlay
      modalOpen={modalOpen}
    >
      <Form onSubmit={handleSubmit}>
        <Title>Create Star Wars Character</Title>
        <Label htmlFor="image">Insert your link to Image</Label>
        <ImgInput
          name="image"
          type="text"
          component="input"
          required
        />
        <Label htmlFor="title">Write character title</Label>
        <TitleInput
          name="title"
          type="text"
          component="input"
          required
        />
        <Label htmlFor="description">Write character description</Label>
        <DescrInput
          name="description"
          type="textarea"
          component="textarea"
          required
        />
        <SubmitButton
          type="submit"
          onClick={() => dispatch(submit('createForm'))}
        >
          Create
        </SubmitButton>
        <CancelButton
          type="button"
        >
          Cancel Creation
        </CancelButton>
      </Form>
    </Overlay>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'createForm',
})(CreateForm);
