const { useFetchGifs } = require("../../hooks/useFetchGifs")
const { renderHook } = require("@testing-library/react-hooks")

describe('pruebas en el hook useFecthGifts', () => {


    
    test('debe tener una data inicial el hook',async() => {
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs('spiderman'))
        const {data,loading}=result.current;
        await waitForNextUpdate();
        expect(data).toEqual([])
        expect(loading).toEqual(true)
    })


    test('debe de traerme un arreglo de 15 gifs ', async() => {
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs('spiderman'))
        await waitForNextUpdate();
        const {data,loading}=result.current;
        expect(data.length).toBe(20)
        expect(loading).toEqual(false)
        
    })
    
    
})
