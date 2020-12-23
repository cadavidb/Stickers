import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <>
        <div className="background"></div>
        <div id="entrada">
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
      
        </div>
        
        <button onClick={handleSubmit} id="boton" className="animate__animated animate__shakeY">Buscar Gifs</button>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
