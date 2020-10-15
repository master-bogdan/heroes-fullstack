import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    max-width: 320px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
`;

export const CardImg = styled.img`
    width: 100%;
`;

export const CardTitle = styled.h3`
    text-align: center;
    margin: 10px auto;
`;

export const CardDescr = styled.p`
    padding: 0 10px;
    max-height: 133px;
    overflow: hidden; 
`;

export const Form = styled.form`
    width: 100%;
    max-width: 320px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
`;

export const ImageFormField = styled.textarea`
    padding: 5px;
    width: 95%;
    height: 60px;
`;

export const TitleFormField = styled(ImageFormField)`
    padding: 5px;
    width: 95%;
`;

export const DescrFormField = styled(ImageFormField)`
    padding: 5px;
    width: 95%;
    min-height: 150px;
`;