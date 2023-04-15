import { Component } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from 'services/images-api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader/Loader';
class App extends Component {
    state = {
        request: '',
        status: 'idle',
        page: 1,
        images: [],
        total: 0,
    };

    queryImages = async request => {
        this.setState({ page: 1, status: 'pending' });
        const { page } = this.state;
        const { hits } = await fetchImages(request, page);
        try {
            if (hits.length < 1 || request.trim() === '') {
                this.setState({ status: 'error' });
            } else {
                this.setState({
                    request,
                    status: 'ok',
                    images: hits,
                    page: page,
                });
            }
        } catch (error) {
            this.setState({ status: 'error' });
        }
    };
    addOnePoingPage = async () => {
        const { page, request } = this.state;
        this.setState({
            status: 'pending',
        });
        const button = document.querySelector('#addOnePage');
        let totalPage = page + 1;
        const { hits, totalHits } = await fetchImages(request, totalPage);
        const totalPages = Math.ceil(totalHits / 12);
        if (page > totalPages) {
            button.style.display = 'none';
        } else {
            this.setState({
                status: 'ok',
                page: totalPage,
            });
            this.setState(({ images }) => ({
                images: [...images, ...hits],
            }));
        }
    };

    render() {
        const { status, images } = this.state;
        if (status === 'idle') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <h1>rwqrrqreq</h1>
                </>
            );
        }
        if (status === 'pending') {
            return (
            <>
            <SearchBar onSubmit={this.queryImages} />
            <Loader />;
            </>)
        }
        if (status === 'ok') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <ImageGallery images={images} />
                    <Button addOnePoingPage={this.addOnePoingPage} />
                </>
            );
        }
        if (status === 'error') {
            return (
                <>
                    <SearchBar onSubmit={this.queryImages} />
                    <h1>console.error();</h1>
                </>
            );
        }
    }
}

export default App;
