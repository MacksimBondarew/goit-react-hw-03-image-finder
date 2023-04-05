import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({url, alt}) => {
    return <Image src={url} alt={alt} />;
};

export default ImageGalleryItem;
