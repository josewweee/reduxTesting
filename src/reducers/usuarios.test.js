import { fetchUsuarios } from './usuarios';

describe('Duck usuarios', () => {
  describe('FetchUsuarios', () => {
    it('maneja el caso de exito', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      //Le metemos axios a un objeto
      const services = {
        axios: {
          //mockedRedolvedValue resuelve una promesa y da el valor
          get: jest.fn().mockedRedolvedValue({
            data: 1,
          }),
        },
      };
      //Siempre dos funciones aqui, una normal y la otra del dispatch
      await fetchUsuarios()(dispatch, getState, services);
      //Revisamos que el dispatch tire el start y el sucess
      expect(dispatch.mock.calls).equal([
        [
          {
            type: 'FETCH_USUARIOS_START',
            error: false,
          },
        ],
        [
          {
            type: 'FETCH_USUARIOS_SUCCESS',
            payload: 1,
          },
        ],
      ]);
    });

    it('maneja el caso de error', () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      //Le metemos axios a un objeto
      const services = {
        axios: {
          //mockedRedolvedValue simula un llamado http y resuelve/devuele un error
          get: jest.fn().mockRejectedValue('error'),
        },
      };
      //Siempre dos funciones aqui, una normal y la otra del dispatch
      await fetchUsuarios()(dispatch, getState, services);
      //Revisamos que el dispatch tire el start y el sucess
      expect(dispatch.mock.calls).equal([
        [
          {
            type: 'FETCH_USUARIOS_START',
            error: false,
          },
        ],
        [
          {
            type: 'FETCH_USUARIOS_ERROR',
            payload: 'error',
            error: true,
          },
        ],
      ]);
    });
  });
});
