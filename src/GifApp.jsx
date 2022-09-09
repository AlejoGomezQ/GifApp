import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <Fragment>
            <h1>GifApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            { categories.map(category => {
                return <GifGrid 
                    key={ category } 
                    category={ category }
                />
            }) }
            
            {/* Gif item */}
        </Fragment>
    )
}

export { GifApp };