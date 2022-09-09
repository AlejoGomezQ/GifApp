import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
    }

    useEffect(() => {
        getImages();
    }, []);
    
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {gifs.map(gif => {
                    return <GifItem 
                        key={ gif.id }
                        { ...gif }
                    />
                })}
            </div>
        </>
    )

};


export { GifGrid };