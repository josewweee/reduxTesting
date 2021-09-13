import reducer, { agregar, eliminar } from './reducers/finanzas';

/* Ducks = actions and reducer in the same file) */
describe('Duck redux', () => {
  /**
   * Test de Actions creators
   */
  describe('Actions creators', () => {
    it('Agregar', () => {
      //pa los actions podemos enviar cualquier data como payload
      const resultado = agregar(1);
      expect(resultado).toEqual({
        type: 'AGREGAR',
        payload: 1,
      });
    });

    it('Eliminar', () => {
      const resultado = eliminar(1);
      expect(resultado).toEqual({
        type: 'ELIMINAR',
        index: 1,
      });
    });
  });
  /**
   * Test del reducer
   */
  describe('reducer', () => {
    it('AGREGAR', () => {
      const resultado = reducer([1], { type: 'AGREGAR', payload: 2 });
      expect(resultado).toEqual([1, 2]);
    });

    it('ELIMINAR', () => {
      const resultado = reducer([1, 2, 3], { type: 'ELIMINAR', payload: 0 });
      expect(resultado).toEqual([2, 3]);
    });

    it('default', () => {
      const resultado = reducer([1], { type: 'NADA' });
      expect(resultado).toEqual([1]);
    });
  });
});
