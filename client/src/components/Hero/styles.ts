import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  height: 380px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  overflow: hidden;
`;

export const CardImg = styled.div`
  width: 100%;
  min-height: 38%;
  border: 1px solid black;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  text-align: center;
  margin: 10px auto;
`;

export const CardDescr = styled.p`
  padding: 0 10px;
  height: 41%;
  overflow: auto;
`;

export const Form = styled.form`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 320px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  overflow: hidden;
`;

export const ImageFormField = styled.textarea`
  margin: 0 auto;
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
