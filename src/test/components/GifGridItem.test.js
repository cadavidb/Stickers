import React from 'react'

import {shallow} from 'enzyme'
import {GifGridItem} from '../../components/GifGridItem'


describe('prueba 1', () => {
   
    const titulo="players";
    const url="http://www.google.com";
    const wrapper=shallow(<GifGridItem title={titulo} url={url} />)




    test('debe mostrar el componente correctamente', () => {
       
        expect(wrapper).toMatchSnapshot()
    })
    



    test('el parrafo debe tener el title', () => {
        const parrafo=wrapper.find('p');
       
        expect(parrafo.text().trim()).toBe(titulo)
    })
    

    test('debe tener la imagen , igual al url', () => {
        const urlimg=wrapper.find('img')
        expect(urlimg.props().src).toBe(url)
        
    })
    test('debe tener un animate FadeIn', () => {
        const fade=wrapper.find('div');
        expect(fade.props().className).toBe('card animate__animated animate__fadeIn')
      

        

    })
    
})
