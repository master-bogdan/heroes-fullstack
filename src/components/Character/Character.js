import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { DeleteCharacter } from '../../store/actions/deleteCharacter';
import { UpdateCharacter } from '../../store/actions/updateCharacter';
import { CardEditButton, CardDeleteButton } from '../Ui/Buttons';
import { Card, CardImg, CardDescr, CardTitle, Form, ImageFormField, TitleFormField, DescrFormField } from './styles';

const Character = ({id, img, title, descr}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [values, setValue] = useState({
        img,
        title,
        descr
    });

    const dispatch = useDispatch();

    const onSubmit = (event, id, values) => {
        event.preventDefault();
        setIsEdit(!isEdit);
        dispatch(UpdateCharacter(id, values));
      };

      const handleChange = (event) => {
            setValue({
                ...values,
                [event.target.name]: event.target.value
            });
        }

    return (
        <>
            { isEdit ? 
                <Form onSubmit={(event) => onSubmit(event, id, values)}>
                    <CardImg src={img} />
                    <ImageFormField
                        name="image" 
                        value={values.img}
                        onChange={handleChange}
                    />
                    <TitleFormField
                        name="title"
                        value={values.title}
                        onChange={handleChange} 
                    />
                    <DescrFormField
                        name="descr"
                        value={values.descr}
                        onChange={handleChange} 
                    />
                    <CardEditButton 
                        type="submit"
                    >
                        Update
                    </CardEditButton>
                    <CardDeleteButton
                        type="button"
                        onClick={() => dispatch(DeleteCharacter(id))}
                    >
                        Delete
                    </CardDeleteButton>
                </Form>
                : 
                <Card>
                    <CardImg src={img} />
                    <CardTitle>{title}</CardTitle>
                    <CardDescr>{descr}</CardDescr>
                    <CardEditButton
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        Edit
                    </CardEditButton>
                </Card>
            }
        </>
    )
}

export default Character;
