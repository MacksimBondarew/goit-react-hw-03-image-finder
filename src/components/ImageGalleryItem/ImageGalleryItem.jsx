import { Image } from './ImageGalleryItem.styled';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
    state = {
        open: false,
    };
    openModal = () => {
        this.setState(({ open }) => {
            return { open: !open };
        });
    };
    render() {
        const { url, alt } = this.props;
        return (
            <>
                <Image src={url} alt={alt} onClick={this.openModal} />
                {this.state.open && (
                    <Modal onClose={this.openModal} url={url} alt={alt} />
                )}
            </>
        );
    }
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
