import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
    <div className="row small-up-2 medium-up-3 large-up-4">
      <div className="column">
        <h1>Erro 404</h1>
        <h2>Página não encontrada</h2>
      </div>
    </div>
    );
  }
}

export default NotFound;
