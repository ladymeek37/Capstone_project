import React from 'react';
import CommentsMapper from './CommentMapper';
import { useEffect } from 'react';


const CommentsList = ({getCommentsByTipId, comments}) => {

    useEffect(() => {
        getCommentsByTipId();
    }, []);

    return(
        <div>
            <CommentsMapper comments = {comments}/>
        </div>
    )
}

export default CommentsList