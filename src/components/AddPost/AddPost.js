import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './../../services/PostData';
import './AddPost.css';

class AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      image: '',
      redirect: false
    }

    this.insertPost = this.insertPost.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  insertPost() {
    if (this.state.title && this.state.content && this.state.image) {
      PostData('posts/', this.state).then(result => {
        let responseJSON = result
        if (responseJSON) {
          alert('Post criado com sucesso')
          this.setState({ redirect: true })
        }
        else {
          console.log('Add Post error')
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

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart">
          <h1>Adicionar Post</h1>
          <label>Título</label>
          <input type="text" name="title" placeholder="Escreva o título aqui" onChange={ this.onChange } />
          <label>Conteúdo do post</label>
          <input type="text" name="content" placeholder="Escreva o conteúdo do post aqui" onChange={ this.onChange } />
          <label>Insira a URL da imagem do post</label>
          <input type="text" name="image" placeholder="URL da imagem" onChange={ this.onChange } />
          <input type="submit" value="Criar Post" className="button" onClick={ this.insertPost } />
          <a href="/">Cancelar</a>
        </div>
      </div>
    );
  }
}

export default AddPost;
