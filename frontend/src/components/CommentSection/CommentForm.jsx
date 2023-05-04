import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';

const CommentForm = ({tip, getCommentsByTipId}) => {
    const [user, token] = useAuth();
    const [comment, setComment] = useState('');

    async function onSubmit(event) {
        event.preventDefault();
        const formValuesObject = {
            tip_id: tip,
            text: comment,
        }
        sendComment(formValuesObject)
        console.log(formValuesObject)
    }

    async function sendComment(newComment){
        try{
            await axios.post('http://127.0.0.1:8000/api/comments/newcomment/', newComment, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => getCommentsByTipId())
            .then(response => console.log("This is the new comment", response))
        } catch (error) {
            console.log("The API isn't working...", error.message)
        }
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div>
                <label>Add comment:</label>
                <input type = "string" className = "form-control" value = {comment} onChange={(event) => setComment(event.target.value)} />
                <button type = "submit">Submit</button>
            </div>
        </form>
    );
}
 
export default CommentForm;