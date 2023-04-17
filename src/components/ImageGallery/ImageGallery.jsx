import ImageGalleryItem from '../ImageGalleryItem';
import { ImageContainer, ImageGalleryContainer } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, modalOpen }) => {
    return (
        <ImageGalleryContainer onClick={modalOpen}>
            {images.map(({ id, webformatURL, tags }) => (
                <ImageContainer key={id}>
                    <ImageGalleryItem url={webformatURL} alt={tags} />
                </ImageContainer>
            ))}
        </ImageGalleryContainer>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default ImageGallery;
