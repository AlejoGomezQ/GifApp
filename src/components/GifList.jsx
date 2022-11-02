//Hooks personalizados
import { useFetchGifs } from '../hooks/useFetchGifs';

//Componentes
import { GifItem } from './GifItem';

const GifList = ({ category, categories, setCategories }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    const onDeleteCategory = () => {
        const categoryIndex = categories.indexOf(category);
        categories.splice(categoryIndex, 1);
    }

    const onDelete = () => {
        onDeleteCategory();
        setCategories([...categories])
    }

    return (
        <>
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
        </>
    )
};

export { GifList };