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

    queryImages = async request => {
        try {
            this.setState({ page: 1, status: 'pending' }, async () => {
                const { page, query } = this.state;
            const { hits, totalHits } = await fetchImages(request, page);
            if (hits.length < 1 || request.trim() === '' || query === request) {
                this.setState({ status: 'error' });
            } else {
                this.setState({
                    query: request,
                    status: 'ok',
                    images: hits,
                    page: page,
                    total: totalHits,
                });
            }
            });
        } catch (error) {
            this.setState({ status: 'error' });
        }
    };
    
    addOnePoingPage = async () => {
        try {
            this.setState(prevState => ({
                page: prevState.page + 1
            }), async () => {
                const { page, query } = this.state;
                this.setState({
                    status: 'pending',
                });
                const { hits } = await fetchImages(query, page);
                this.setState({
                    status: 'ok',
                    page: page,
                });
                this.setState(({ images }) => ({
                    images: [...images, ...hits],
                }));
            });
        } catch {
            this.setState({ status: 'error' });
        }
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
