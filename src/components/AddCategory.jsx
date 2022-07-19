import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; //el return hace que muera ahi y no siga
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIF's..."
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
