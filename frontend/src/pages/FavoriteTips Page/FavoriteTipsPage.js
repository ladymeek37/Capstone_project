import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const FavoriteTipsPage = () => {

    const [user, token] = useAuth();
    const [favoriteTips, setFavoriteTips] = useState([]);

    useEffect(() => {

        fetchFavoriteTips();
      }, [token]);

        const fetchFavoriteTips = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/favorites/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setFavoriteTips(response.data);
                console.log(response.data)                
            } catch (error){
                console.log(error.response.dat)
            }
        }

    return ( 
        <div>
        <div>
            <h1>{user && user.username}'s Favorite Tips</h1>
        </div>
            {favoriteTips &&
                favoriteTips.map((tip) => {
                  return(
                    <body>
                      <div key={tip.id}>
                        <p>{tip.tip.user.username}</p>
                        <p>{tip.tip.date} </p>
                        <p>{tip.tip.title}</p> 
                        <p>{tip.tip.category} </p>
                        <img src = {`http://127.0.0.1:8000${tip.tip.image_url}`} alt={`${tip.tip.title}  tip image`}/> 
                        <p>{tip.tip.text} </p>
                        <a href={tip.tip.link} target="_blank">{tip.link}</a>
                      </div>
                    </body> 
                )
              }
          ).reverse()}
          </div>
      )
};
export default FavoriteTipsPage;