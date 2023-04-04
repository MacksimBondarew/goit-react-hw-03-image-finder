import { Component } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from 'services/images-api';

class App extends Component {
    state = {
        request: '',
        status: 'idle',
        page: 1,
        images: [],
        total: 0,
    };

    queryImages = async request => {
        this.setState({ page: 1 });
        const {page, status} = this.state;
        const { hits, totalHits } = await fetchImages( request, page);
        if (request.trim() === '') {
            alert('Please enter a')
        }
        try {
            if (hits.length < 1) {
                this.setState({status: 'error'});
            }
            else {
                this.setState({
                    request, 
                    status,
                    images: hits,
                    total: totalHits,
                });
            }
        } catch (error) {
            this.setState({ status: "error" });
        }
    };
    

    render() {
        const { status } = this.state;
        if (status === "idle") {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <h1>rwqrrqreq</h1>
                </>
            )
        }
        if (status === "error") {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <h1>ewfewfew</h1>
                </>
            )
        }

    }
}

export default App;
