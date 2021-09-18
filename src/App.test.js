import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

describe('App', () => {
  it('interactua con nuestro store', () => {
    const prevent = jest.fn();
    //MockreturnValue nos devuelve lo que especifiquemos al ejecutar la funcion
    const reducer = jest.fn().mockReturnValue({
      finanzas: [{ desc: 'lala', cant: 150 }],
    });
    //Simulamos la creacion y conexion del store de redux
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    //Agregamos 1 valor a cada form, damos submit y borramos 1 elemento de la lista usando el boton de eliminar
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'descripcion here' } });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '200' } });
    wrapper.find('form').simulate('submit', { preventDefault: prevent });
    wrapper.find('button').at(2).simulate('click');
    // Testeamos las funciones del DispatchStateProps (agregar y eliminar)
    // Y probamos que el state en mapStateProps se este actualizando
    // la primera llamada del reducer sera para que react lo inicie, asi que tomamos solo despues del primer valor
    const [a, ...rest] = reducer.mock.calls;
    //revisamos el estado del reducer, en las 2 llamadas que se hicieron, la de agregar y la de eliminar
    expect(rest).toEqual([
      [
        { finanzas: [{ desc: 'lala', cant: 150 }] }, //Estado inicial
        { type: 'AGREGAR', payload: { cant: 200, desc: 'descripcion here' } }, //Primer llamado
      ],
      [
        { finanzas: [{ desc: 'lala', cant: 150 }] }, //Estado inicial
        { type: 'ELIMINAR', index: 0 }, //Segundo llamado
      ],
    ]);
    expect(wrapper.text().includes('lala')).toEqual(true);
  });
});
