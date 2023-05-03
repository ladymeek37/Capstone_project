
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPostPage = () => {
    
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image_url, setImage] = useState('');
    const [link, setLink] = useState('');

    const [user, token] = useAuth();

    const {tipId} = useParams();

    const [tip, setTip] = useState('');


    useEffect(() => {
        getTip();
        
    }, [])



    async function getTip() {
        try{ 
            let response = await axios.get(`http://127.0.0.1:8000/api/tips/by_id/${tipId}/`, {
                headers: {
                    Authorization: "Bearer " + token,
            },
        });
        console.log("This is the tip", response)
        setTip(response.data)
        await setCategory(response.data[0].category)
        await setDate(response.data[0].date)
        await setTitle(response.data[0].title)
        await setText(response.data[0].text)
        await setLink(response.data[0].link)        
        // await setImage(response.data[0].image_url)

        return response
        } catch (error) {
            console.log("The api isn't working...", error.message)            
        }
    };

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
    
        console.log(formData);
        await editTip(formData);
        navigate(-1 , {state: true})
    }


    async function editTip(tip) {

        try{
            let response = await axios.put(`http://127.0.0.1:8000/api/tips/${tipId}/`, tip, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            console.log("This is the response", response)
        } catch (error) {
            console.log("The api isn't working...", error.message)
        }
      };

    function imageFile(e) {
        setImage(e.target.files[0]);
    }



    return ( 
        <div>
        <form onSubmit = {onSubmit}>
            <legend>Edit Post for {user.username} : </legend>
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
                <label>*Category:</label>
                {/* <input type = 'string' value = {category} onChange={(event) => setCategory(event.target.value)}></input> */}
                <select 
                    name = 'category_options_name' 
                    id = 'category_options_id' 
                    value = {category} 
                    onChange={(event) => setCategory(event.target.value)}>
                        <option value="1">Yoga/Meditation</option>
                        <option value="2">Diet/Supplements</option>
                        <option value="3">Lifestyle/Other</option>
                </select>
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
            <button type = 'submit'> Update Changes </button>


        </form>
        </div>
     );
}
 
export default EditPostPage;