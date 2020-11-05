import React from 'react';
import { useDispatch } from "react-redux";
import { reduxForm, reset, submit } from 'redux-form';
import { CreateCharacter } from '../../store/actions/createCharacter';
import { FetchCharacters } from '../../store/actions/readCharacters';
import { Overlay, Title, Form, Label, ImgInput, TitleInput, DescrInput, SubmitButton, CancelButton } from './styles';

const CreateForm = ({ handleSubmit, modalOpen, setModalOpen}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        setModalOpen(!modalOpen);
        dispatch(FetchCharacters());
    }

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
                    onClick={() => clickHandler()}
                >
                    Cancel Creation
                </CancelButton>
            </Form>
        </Overlay>
    )
}

const onSubmit = (values, dispatch) => {
    return fetch('http://localhost:3001/api/create', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(dispatch(CreateCharacter()))
        .then(dispatch(reset('createForm')))
        .catch(err => console.log(err))
  };

export default reduxForm({
    // a unique name for the form
    form: 'createForm',
    onSubmit
  })(CreateForm)
