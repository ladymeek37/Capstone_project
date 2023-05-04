import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { GrFavorite } from 'react-icons/gr';


const FavoriteButton = (props) => {

    const [favorite, setFavorite] = useState(null);

    const [user, token] = useAuth();

    async function onClick(event) {

        event.preventDefault();

        await addToFavorites()

    }

    async function addToFavorites() {

        try{
            let response = await axios.post('http://127.0.0.1:8000/api/favorites/addfavorite/', 
            {
                "tip_id":props.tipId
            },
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            console.log("This is the response",response)

        } catch (error) {
            console.log("The api isn't working...", error.message)
        }
    }


    return ( 
        <div>
            {/* <button onClick = {onClick} type = 'submit'>Add To Favorites</button> */}

            <p>Add to favorites</p>
            <GrFavorite onClick = {onClick} type = 'submit'/> 
        </div>
     );
}
 
export default FavoriteButton;