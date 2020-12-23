import React from 'react'
import shallow from 'enzyme/build/shallow'
import { GifExpertApp } from '../../GifExpertApp'

describe('Pruebas en <GifExpertApp>', () => {
    test('debe hacer match con el snapshot', () => {

        const wrapper=shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorias', () => {
        const categories=['spider man','cops'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
