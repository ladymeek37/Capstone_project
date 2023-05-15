import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./FavoriteTipsPage.css"

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
        <div className="container parent">
        <div>
            <h1 className="yourfavtips">Your Favorites!</h1>
        </div>
            {favoriteTips &&
                favoriteTips.map((tip) => {
                  return(
                    <body className="child">
                      <div key={tip.id}>
                        <div className="name-date-favorite">
                            <h3 className='username'>@{tip.tip.user.username}</h3>
                            <p>{tip.tip.date} </p>                            
                        </div>

                        <h1>{tip.tip.title}</h1> 
                        <p>{tip.tip.category_display} </p>
                        <img src = {`http://127.0.0.1:8000${tip.tip.image_url}`} alt={`${tip.tip.title}  tip image`}/> 
                        <p className="favitem">{tip.tip.text} </p>
                        <a className="favitem" href={tip.tip.link} target="_blank">{tip.tip.link}</a>
                      </div>
                    </body> 
                )
              }
          ).reverse()}
          </div>
      )
};
export default FavoriteTipsPage;