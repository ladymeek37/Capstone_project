import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [tips, setTips] = useState([]);

  console.log(user)
  console.log(token)

  useEffect(() => {

    fetchTips();
  }, [token]);

  const fetchTips = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/tips/all/" 
        // headers: {
        //   Authorization: "Bearer " + token,
        // },
      );
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  async function onSubmitOne (event) {
    event.preventDefault();
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=1/');
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
        <p>Filter By:</p>
        <button onSubmit={onSubmitOne} type = 'submit'>Yoga/Stretching</button>        
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
                  <p>{tip.image_url} </p>
                  <p>{tip.text} </p>
                  <p>{tip.link}</p>
                </div>
              </body> 
          )
        }
        )}
    </div>
  );
};

export default HomePage;
