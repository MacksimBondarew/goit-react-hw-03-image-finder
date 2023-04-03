import axios from 'axios';

export default async function fetchImages(name, page) {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                q: name,
                page: page,
                key: '33933963-4f485d9798c483eb0ad8732f3',
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
            },
        });
        return response.data;
    } catch (error) {
        // console.error(error);
        // throw error;
        console.log("ти отримав помилку");
    }
}
