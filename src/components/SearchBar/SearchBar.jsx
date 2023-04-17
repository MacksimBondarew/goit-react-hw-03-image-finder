import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { HeaderContainer, SearchButton } from './SearchBar.styled';
import PropTypes from 'prop-types';

const SearchField = styled(Field)`
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    color: #333;

    &::placeholder {
        color: #a6a6a6;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
    }
`;

const FormContainer = styled(Form)`
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
`;

const initiaValues = {
    query: '',
};

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values.query);
        resetForm();
    };

    return (
        <HeaderContainer>
            <Formik initialValues={initiaValues} onSubmit={handleSubmit}>
                <FormContainer autoComplete="off">
                    <SearchButton type="submit">
                        <span>Search</span>
                    </SearchButton>

                    <SearchField
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search images and photos"
                    />
                </FormContainer>
            </Formik>
        </HeaderContainer>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
