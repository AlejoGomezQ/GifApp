const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
 const API_KEY = 'xBgwEwMSvfQSR2h3BeXdI6dVWjVWP1QH';

const getGifs = async (category) => {
    const url = `${BASE_URL}?api_key=${API_KEY}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            imageUrl: gif.images.downsized_medium.url
        };
    });

    return gifs;
};

export { getGifs };