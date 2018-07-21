import React from 'react';
import ListItem from '../ListItem'

const CommentForm = props => (
    <ul>
        {props.comments.map(comment => (
        <ListItem 
            key={comment._id}
            url={comment.url}
            text={comment.text}
            date={comment.date} 
            />
        ))}
    </ul>
)

export default CommentForm;