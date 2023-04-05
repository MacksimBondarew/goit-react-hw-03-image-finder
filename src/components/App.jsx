import { Component } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from 'services/images-api';
import ImageGallery from './ImageGallery'
class App extends Component {
    state = {
        request: '',
        status: 'idle',
        page: 1,
        images: [],
        total: 0,
    };

    queryImages = async request => {
        const {page} = this.state;
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
                    status: "ok",
                    images: hits,
                    total: totalHits,
                    page: 1,
                });
            }
        } catch (error) {
            this.setState({ status: "error" });
        }
    };
    

    render() {
        const { status, images } = this.state;
        if (status === "idle") {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <h1>rwqrrqreq</h1>
                </>
            )
        }
        if (status === "ok") {
            <>
                <SearchBar onSubmit={this.queryImages} />
                <ImageGallery images={images} />
            </>
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
