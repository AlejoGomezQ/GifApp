//Hooks personalizados
import { useFetchGifs } from '../hooks/useFetchGifs';

//Componentes
import { GifItem } from './GifItem';
import { Loader } from './complements/Loader';
import { useState } from 'react';

const GifList = ({ category, categories, setCategories }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    const [favoriteGif, setFavoriteGif] = useState([]);

    const onDelete = () => {
        const categoryIndex = categories.indexOf(category);
        categories.splice(categoryIndex, 1);
        setCategories([...categories])
    };

    const onFavorites = () => {
        if(favoriteGif.includes(category)) return;
        setFavoriteGif([category, ...favoriteGif]);
    };

    return (
        <>
            {
                isLoading && (<Loader />)
            }

            <h3>{ category[0].toUpperCase() + category.substring(1) }</h3>
            <div className='card-grid'>
                {
                    gifs.map((image) => (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
            <button onClick={ onDelete }>Borrar</button>
            <button onClick={ onFavorites }>Añadir a favoritos</button>
        </>
    )
};

export { GifList };