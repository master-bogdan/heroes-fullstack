import styled from 'styled-components';

export const HeaderButton = styled.button`
    display: block;
    padding: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        opacity: 0.8;
    }
`;

export const CardEditButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    background: black;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    &:hover {
        opacity: 0.7;
    }
`;

export const CardDeleteButton = styled(CardEditButton)`
    background: brown;
`;
