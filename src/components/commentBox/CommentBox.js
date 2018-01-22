import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from '../../style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasError: false
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  // Add comment
  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
  }
  // Delete comment
  handleCommentDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Comment deleted');
      })
      .catch(err => {
        console.error(err);
      });
  }
  // Update comment
  handleCommentUpdate(id, comment) {
    //sends the comment id and new author/text to our api
    axios.put(`${this.props.url}/${id}`, comment)
      .catch(err => {
        console.log(err);
      });
  }
  //
  componentDidCatch(error, info) {
    console.error(error);
    console.info(info);
    this.setState(state => ({ ...state, hasError: true }));
  }
  //
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
        <h1>A bug somewhere, catch it!</h1>
        </div>
      );
    }
    return (
      <div style={ style.commentBox }>
        <h2 style={ style.title }>Comments :</h2>
        <CommentList 
          onCommentDelete={this.handleCommentDelete}
          onCommentUpdate={this.handleCommentUpdate}
          data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

export default CommentBox;
