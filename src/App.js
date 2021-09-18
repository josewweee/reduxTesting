import './App.css';

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Dashboard, Finanzas, Form } from './components/Form';
import { agregar, eliminar } from './reducers/finanzas';
import { fetchUsuarios } from './reducers/usuarios';

function Titulo() {
  return <h2 className="title">Finanzly</h2>;
}

function App({ finanzas, agregarFinanza, eliminarFinanza }) {
  const total = finanzas.reduce((acc, el) => acc + el.cant, 0);
  return (
    <div className="section">
      <div className="container">
        <Titulo />
        <button onClick={fetchUsuarios}> fetch usuarios </button>
        <Form agregarFinanza={agregarFinanza} />
        <Dashboard valor={total} />
        <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  agregarFinanza: (finanza) => dispatch(agregar(finanza)),
  eliminarFinanza: (index) => dispatch(eliminar(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
