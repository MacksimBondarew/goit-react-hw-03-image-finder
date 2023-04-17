import { GridLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = styled.div`
    display: block;
    margin: auto auto;
    text-align: center; /* центрування по горизонталі */
`;

function MyComponent() {
    return (
        <Loader>
            <GridLoader size={15} color="#123abc" />
        </Loader>
    );
}

export default MyComponent;
