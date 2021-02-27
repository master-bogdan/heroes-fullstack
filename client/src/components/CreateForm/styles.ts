import styled from 'styled-components';
import { Field } from 'redux-form';
import { CardEditButton } from '../Ui/Buttons';

export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 2;
    display: ${({ modalOpen }: { modalOpen: any}) => (modalOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
`;

export const Title = styled.h2`
    margin: 15px 0;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
`;

export const Form = styled.form`
    padding: 25px 15px;
    width: 100%;
    max-width: 350px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ImgInput: any = styled(Field)`
    width: 80%;
    height: 30px;
    margin: 10px 0;
`;
export const TitleInput = styled(ImgInput)``;
export const DescrInput: any = styled(Field)`
    width: 80%;
    min-height: 150px;
    margin-top: 10px;
`;

export const SubmitButton = styled(CardEditButton)`
    width: 80%;
`;

export const CancelButton = styled(CardEditButton)`
    width: 80%;
    background: brown;
`;
