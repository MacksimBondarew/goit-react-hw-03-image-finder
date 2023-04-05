import ImageGalleryItem from '../ImageGalleryItem';
import { ImageContainer, ImageGalleryContainer} from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
    return (
        <ImageGalleryContainer>
            {images.map(({ id, webformatURL, tags }) => (
                <ImageContainer key={id}>
                    <ImageGalleryItem url={webformatURL} alt={tags} />
                </ImageContainer>
            ))}
        </ImageGalleryContainer>
    );
};
export default ImageGallery;
