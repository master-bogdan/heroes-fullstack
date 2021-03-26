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
}

const CreateForm: React.FC<InjectedFormProps<ICreateCharacter> & FormProps> = ({
  modalOpen,
  setModalOpen,
  handleSubmit,
  pristine,
  submitting,
}) => {
  const dispatch = useDispatch();

  const handleSubmitTest = (values: ICreateCharacter) => {
    dispatch(CreateCharacter(values));
    dispatch(reset('createForm'));
    setModalOpen(!modalOpen);
  };

  const closeHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Overlay
      modalOpen={modalOpen}
    >
      <Form onSubmit={handleSubmit((val) => handleSubmitTest(val))}>
        <Title>Create Your Favorite Character</Title>
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
          disabled={pristine || submitting}
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

export default reduxForm<InjectedFormProps, any>({
  // a unique name for the form
  form: 'createForm',
})(CreateForm);
