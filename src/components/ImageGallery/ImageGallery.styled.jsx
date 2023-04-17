import styled from 'styled-components';

const ImageGalleryContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ImageContainer = styled.li`
    flex-basis: calc(100% / 6);
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
`;

export { ImageGalleryContainer, ImageContainer };
