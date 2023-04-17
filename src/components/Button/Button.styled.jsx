import styled from 'styled-components';

const ButtonMore = styled.button`
    background-color: rgb(0, 122, 255);
    border: none;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 24px; /* increase the font size */
    padding: 12px 24px; /* increase the padding */
    transition: background-color 0.3s ease;
    display: block; /* make it a block-level element */
    margin: 0 auto; /* center it horizontally */
    &:hover {
        background-color: rgb(0, 86, 179);
    }
`;
export { ButtonMore };
