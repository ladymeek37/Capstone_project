import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const ProfilePage = () => {

    const [user, token] = useAuth();
    const [tips, setTips] = useState([]);

    useEffect(() => {

        fetchUserTips();
      }, [token]);

        const fetchUserTips = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/tips/", {
            headers: {
                Authorization: "Bearer " + token,
            },
          });
          setTips(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };


      async function deleteTip(tip) {

        try{
            let response = await axios.delete(`http://127.0.0.1:8000/api/tips/${tip.id}/`, {
                headers: {
                Authorization: "Bearer " + token,
            }, 
            })
            console.log("This is the response",response)
            fetchUserTips();

        } catch (error) {
            console.log("The api isn't working...", error.message)
        }
      };

    //   async function editTip(tip) {

    //     try{
    //         let response = await axios.put(`http://127.0.0.1:8000/api/tips/${tip.id}/`, tip, {
    //             headers: {
    //                 Authorization: "Bearer" + token,
    //             },
    //         })
    //         console.log("This is the response", response)
    //         fetchUserTips();
    //     } catch (error) {
    //         console.log("The api isn't working...", error.message)
    //     }
    //   };
      
      return(
        <div>
        <div>
            <h1>{user && user.username}'s Profile</h1>
        </div>
            {tips &&
                tips.map((tip) => {
                  return(
                    <body>
                      <div key={tip.id}>
                        <p>{tip.user.username}</p>
                        <p>{tip.date} </p>
                        <p>{tip.title}</p> 
                        <p>{tip.category} </p>
                        <img src = {`http://127.0.0.1:8000${tip.image_url}`} alt={`${tip.title}  tip image`}/> 
                        <p>{tip.text} </p>
                        <a href={tip.link} target="_blank">{tip.link}</a>
                      </div>
                    <button type = "submit" onClick = {() => deleteTip(tip)}>DELETE</button>
                    <Link to = {`/editpost/${tip.id}`}> EDIT </Link>
                    </body> 
                )
              }
          ).reverse()}
          </div>
      )
};

export default ProfilePage;
