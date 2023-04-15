import styled from 'styled-components';

const ButtonMore = styled.button`
background: linear-gradient(180deg, #ffffff, #bfefff);
border: none;
border-radius: 4px;
color: #1c1c1c;
cursor: pointer;
font-size: 24px; /* increase the font size */
padding: 12px 24px; /* increase the padding */
transition: background-color 0.3s ease;
display: block; /* make it a block-level element */
margin: 0 auto; /* center it horizontally */
    &:hover {
        background: linear-gradient(180deg, #bfefff, #8fd8ff);
    }
`;
export { ButtonMore };
