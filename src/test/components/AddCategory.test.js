import React from 'react'
import '@testing-library/jest-dom';
const { AddCategory } = require("../../components/AddCategory")
import {shallow} from 'enzyme'




describe('pruebas sobre <AddCategory>', () => {
    const setCate=jest.fn();
    let wrapper;
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategories={setCate}/>)
    })
    
    test('debe mostrar el componente correctamente', () => {
       
        expect(wrapper).toMatchSnapshot()
    })


    test('debe de cambiar la caja de texto', () => {

        const input=wrapper.find('input');
        const value="holaa"
        input.simulate('change',{target:{value}})
        expect(wrapper.find('p').text().trim()).toBe(value)
    
    })


    test('No debe postear informacion con submit', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){}})
        expect(setCate).not.toHaveBeenCalled();
    })
    

    //task

    test('must call function setcategories and clear the text box', () => {
        //simular el input change
        const input=wrapper.find('input');
        const value="simular input pruebas unitarias"
        input.simulate('change',{target:{value}})
        
        //simular el submit 
        wrapper.find('form').simulate('submit',{preventDefault(){}})
        
        // //set categories se debe haber llamado
         expect(setCate).toHaveBeenCalled();
         expect(setCate).toHaveBeenCalledTimes(1);
         expect(setCate).toHaveBeenCalledWith(expect.any(Function));
         
         
       //el valor del input debe estar '';
       expect(input.prop('value')).toBe('')



    })
    
    
    
    
})
