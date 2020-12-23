import {getGifs} from '../../helpers/getGifs'




describe('seccion pruebas getGifs', () => {
   


    test('debe de traer 10 elementos', async () => {
       const resp = await getGifs('mariobros');
      expect(resp.length).toBe(15)
   
    })
    
    








})
