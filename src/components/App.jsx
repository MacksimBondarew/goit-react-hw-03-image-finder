import { Component } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from 'services/images-api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader/Loader';
import { Information, Error } from './App.styled';
class App extends Component {
    state = {
        query: '',
        status: 'idle',
        page: 1,
        images: [],
        total: 0,
    };

    async componentDidUpdate(prevProps, prevState) {
        const { query, page } = this.state;

        if (query !== prevState.query || page !== prevState.page) {
            try {
                const { hits, totalHits } = await fetchImages(query, page);

                
                if (hits.length < 1 || query.trim() === '') {
                    console.log(query)
                    console.log(prevState.query)
                    this.setState({ status: 'error' });
                } else {
                    const newImages =
                        page === 1 ? hits : [...this.state.images, ...hits];
                    this.setState({
                        status: 'ok',
                        images: newImages,
                        total: totalHits,
                    });
                }
            } catch (error) {
                this.setState({ status: 'error' });
            }
        }
    }

    queryImages = request => {
        this.setState({ query: request, page: 1, status: 'pending' });
    };

    addOnePoingPage = async () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    };

    render() {
        const { status, images, total, page } = this.state;
        const totalPages = Math.ceil(total / 12);
        if (status === 'idle') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <Information>
                        Please enter something in the search and click on the
                        button
                    </Information>
                </>
            );
        }
        if (status === 'pending') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <ImageGallery images={images} modalOpen={this.modalOpen} />
                    <Loader />;
                </>
            );
        }
        if (status === 'ok') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <ImageGallery images={images} modalOpen={this.modalOpen} />
                    {totalPages > page && (
                        <Button addOnePoingPage={this.addOnePoingPage} />
                    )}
                </>
            );
        }
        if (status === 'error') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <Error>
                        Sorry, an error occurred while loading this page. Please
                        try again later
                    </Error>
                </>
            );
        }
    }
}

export default App;
