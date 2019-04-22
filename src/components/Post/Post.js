import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then(json => {
      console.log('JSON: ', json)
      this.setState({ posts: json.posts })
    }) 
  }

  render() {

    return (
      <div className="row medium-8 large-7 columns">
        <ul>
        {
          this.state.posts.map(post => (
            <li key={ post._id }>
              <div className="blog-post">
                <h3> { post.title } <small>{ post.createdAt }</small></h3>
                <img className="thumbnail" src={ post.image } />
                <p>{ post.content }</p>
              </div> 
            </li>
          ))
        }
        </ul>
      </div>   
    )
  }
}

export default Post;
