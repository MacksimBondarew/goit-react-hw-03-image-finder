import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
    console.log(images);
    return (
        <ul class="gallery">
            {images.map(({ id, pageURL, tags }) => (
                <li key={id}>
                    <ImageGalleryItem url={pageURL} alt={tags} />
                </li>
            ))}
        </ul>
    );
};
export default ImageGallery;
