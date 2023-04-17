import { ButtonMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ addOnePoingPage }) => {
    return (
        <ButtonMore id="addOnePage" onClick={addOnePoingPage}>
            More
        </ButtonMore>
    );
};

Button.propTypes = {
    addOnePoingPage: PropTypes.func.isRequired,
};

export default Button;
