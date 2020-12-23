import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre componente GifGrid', () => {

    const categoria="ninjas"
    //falseamos la data 
    useFetchGifs.mockReturnValue({
        data:[],
        loading:true
    })

//copiamos el componente
    const wrapper=shallow(<GifGrid category={categoria}/>)

//testeamos que este igual
    test('debe hacer un match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    
    test('debe de mostrar item cuando se cargan imagenes useFecthGifs', () => {
        const data=[{
            id:'ACB',
            url:'http',
            title:'anything'
        }]


        useFetchGifs.mockReturnValue({
            data:data,
            loading:false
        })
        const wrapper=shallow(<GifGrid category={categoria}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(data.length)

    })
    
})
