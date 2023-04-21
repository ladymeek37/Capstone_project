import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePostPage = (props) => {
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image_url, setImage] = useState('');
    const [link, setLink] = useState('');

    const [user, token] = useAuth();

    let navigate = useNavigate();

    async function onSubmit(event) {

        event.preventDefault();

        let formData = new FormData()

        formData.append("category", category)
        formData.append("date", date)
        formData.append("title", title)
        formData.append("text", text)
        formData.append("image_url", image_url)
        formData.append("link", link)
        
        // const formValuesObject ={
        //     category : category,
        //     date : date,
        //     title : title,
        //     text : text,
        //     image_url : image_url,
        //     link : link,
        // }
        
        sendPost(formData)
        console.log(formData);
        navigate('/')
    }

    async function sendPost(newPost) {


        try{
            let response = await axios.post('http://127.0.0.1:8000/api/tips/', newPost, {
                headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data",
            }, 
            })
            console.log("This is the response",response)

        } catch (error) {
            console.log("The api isn't working...", error.message)
        }

    }

    function imageFile(e) {
        setImage(e.target.files[0]);
    }
    ;
    
    return(

        <form onSubmit = {onSubmit}>
            <legend>New Post for {user.username} : </legend>
            <br/>
            <div>
                <label>*Category:</label>
                <input type = 'string' value = {category} onChange={(event) => setCategory(event.target.value)}></input>
                {/* <select 
                    name = 'category_options_name' 
                    id = 'category_options_id' 
                    multiple = 'multiple' 
                    value = {category} 
                    onChange={(event) => setCategory(event.target.value)}>
                        <option value="1">Yoga/Meditation</option>
                        <option value="2">Diet/Supplements</option>
                        <option value="3">Lifestyle/Other</option>
                </select> */}
            </div>
            <br/>
            <div>
                <label>*Date:</label>
                <input type = 'date' value = {date} onChange={(event) => setDate(event.target.value)}></input>               
            </div>
            <br/>
            <div>
                <label>*Title:</label>
                <input type = 'string' value = {title} onChange={(event) => setTitle(event.target.value)}></input>                
            </div>
            <br/>
            <div>
                <label>*Text:</label>
                <input type = 'string' value = {text} onChange={(event) => setText(event.target.value)}></input>                
            </div>
            <br/>
            <div>
                <label>Image:</label>
                <input
                type="file"
                // value = {image_url}
                id="update-pic"
                name="image_url"
                accept="image/jpeg,image/png,image/gif"
                onChange={(e) => imageFile(e)}
                />               
            </div>
            <br/>
            <div>
                <label> Resource Link:</label>
                <input type = 'url' id = 'postlink' name = 'postlink' value = {link} onChange={(event) => setLink(event.target.value)}></input>                
            </div>
            <br/>
            <br/>
            <div>
                * marks mandatory fields to fill out 
            </div>
            <br/>
            <button type = 'submit'> Submit Post </button>


        </form>
    )

}

export default CreatePostPage;

