import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/commentBox/CommentBox';

ReactDOM.render(
 <CommentBox
  url="https://track8-omnizya.c9users.io:8081/api/comments"
  pollInterval={2000}
 />,
 document.getElementById('root')
);
