import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifFooter } from "./components/GifFooter";
import { GifList } from "./components/GifList";

const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif App</h1>

            <AddCategory  
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            { 
                categories.map((category) => (
                    <GifList 
                        key={ category } 
                        category={ category }
                        categories={ categories }
                        setCategories={ setCategories }
                    />
                )) 
            
            }
            <GifFooter/>
        </>
    )
}

export { GifApp };