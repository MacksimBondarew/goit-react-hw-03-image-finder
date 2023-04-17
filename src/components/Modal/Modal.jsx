import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };
    render() {
        const { url, alt } = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    <img src={url} alt={alt} />
                </ModalWindow>
            </Overlay>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
