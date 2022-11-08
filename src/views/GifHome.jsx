import { useState } from "react";

//Components
import { AddCategory } from "../components/AddCategory";
import { GifList } from "../components/GifList";

const GifHome = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
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
            </>
    )
};

export { GifHome }