import React, { Component } from 'react';
import { PostData } from './../../services/PostData';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.signup = this.signup.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  signup() {
    if (this.state.username && this.state.password && this.state.password) {
      PostData('users/', this.state).then(result => {
        let responseJSON = result
        if (responseJSON) {
          alert('Conta criada com sucesso')
        }
        else {
          console.log('Signup error')
        }
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart">
          <h1>Crie sua conta</h1>
          <label>Nome de usuário</label>
          <input type="text" name="username" placeholder="username" onChange={ this.onChange } />
          <label>Email</label>
          <input type="email" name="email" placeholder="email" onChange={ this.onChange } />
          <label>Senha</label>
          <input type="password" name="password" placeholder="senha" onChange={ this.onChange } />
          <input type="submit" value="Criar Conta" className="button" onClick={ this.signup } />
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
