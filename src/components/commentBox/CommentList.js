import React, { Component } from 'react';
import Comment from './Comment';
import style from '../../style';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map((comment, index) => {
      let keyIndex = 'oz-' + comment['_id'];
      return (
        <Comment
          author={ comment.author }
          uniqueID={ comment['_id'] }
          onCommentDelete={this.props.onCommentDelete}
          onCommentUpdate={this.props.onCommentUpdate}
          key={keyIndex}>
        { comment.text }
        </Comment>
      );
    });
    return (
      <div style={ style.commentList }>
      { commentNodes }
      </div>
    );
  }
}

export default CommentList;
