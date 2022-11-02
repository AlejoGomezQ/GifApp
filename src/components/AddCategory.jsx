import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const changeValue = (event) => {
        setInputValue(event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]); //Callback para no sobrescribir array anterior
        onNewCategory(inputValue.trim().toLowerCase());
        setInputValue(''); 
    };

    return (
        <form onSubmit={ submit } className="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ changeValue }
            />
        </form>
    )
}

export { AddCategory };