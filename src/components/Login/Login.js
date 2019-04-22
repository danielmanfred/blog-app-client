import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './../../services/PostData';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirect: false
    }

    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  login() {
    if (this.state.username && this.state.password) {
      PostData('auth/signin', this.state).then(result => {
        let responseJSON = result
        if (responseJSON) {
          sessionStorage.setItem('userData', responseJSON)
          this.setState({ redirect: true })
        }
        else {
          console.log('Login error')
        }
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/'} />)
    }

    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
      <div className="column bodyPart">
        <h1>Login</h1>
        <label>Nome de usuário</label>
        <input type="text" name="username" placeholder="username" onChange={ this.onChange } />
        <label>Senha</label>
        <input type="password" name="password" placeholder="senha" onChange={ this.onChange } />
        <input type="submit" value="Entrar" className="button" onClick={ this.login } />
        <a href="/signup">Criar conta</a>
      </div>
    </div>
    )
  }
}

export default Login;
