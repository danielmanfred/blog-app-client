import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';

import Post from './../Post/Post';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    if (sessionStorage.getItem('userData')) {
      console.log('Call User Feed')
    }
    else {
      this.setState({ redirect: true })
    }
  }

  logout() {
    sessionStorage.setItem('userData', '')
    sessionStorage.clear()
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
          <li className="menu-text">Blog</li>
          <li><a href="/addpost">Cadastrar Post</a></li>
          <li><a href="/login" onClick={ this.logout }>Sair</a></li>
          </ul>
        </div>
      </div>
      <Post />
    </div>
    );
  }
}

export default Home;
