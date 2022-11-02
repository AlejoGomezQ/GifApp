import { useEffect, useState } from "react";

//API
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getGifsList = async () => {
        const newGif = await  getGifs(category);
        setGifs(newGif);
    };

    useEffect(() => {
        getGifsList()
     }, []);

    return {
        gifs,
        isLoading
    }
};

export { useFetchGifs };