import { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
    state = {
        query: '',
    };

    queryImages = query => {
        this.setState({ query });
    };

    render() {
        return (
            <>
                <SearchBar onSubmit={this.queryImages} />
            </>
        );
    }
}

export default App;
