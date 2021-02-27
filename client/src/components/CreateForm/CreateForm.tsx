import React from 'react';
import { useDispatch } from 'react-redux';
import {
  reduxForm,
  reset,
  InjectedFormProps,
  formValueSelector,
} from 'redux-form';
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
  setModalOpen: (modalOpen: boolean) => typeof modalOpen
  handleSubmit: any
}

const handleSubmitTest = (values: ICreateCharacter, dispatch: any) => {
  dispatch(CreateCharacter(values));
  dispatch(reset('createForm'));
};

const CreateForm: React.FC<FormProps & InjectedFormProps> = ({
  modalOpen,
  setModalOpen,
  handleSubmit,
}) => {
  const clickHandler = (event: any) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <Overlay
      modalOpen={modalOpen}
    >
      <Form onSubmit={(event) => {
        clickHandler(event);
        handleSubmit();
      }}
      >
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

export default reduxForm<any, any>({
  // a unique name for the form
  form: 'createForm',
  onSubmit: handleSubmitTest,
})(CreateForm);
