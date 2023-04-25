import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [tips, setTips] = useState([]);
  const {state} = useLocation()
  console.log(user)
  console.log(token)

  useEffect(() => {
    fetchTips();
  }, [token, state]);


  // //useEffect to get tips by category
  // useEffect(() => {

  //   onSubmitOne();
  // },  [token]);

  const fetchTips = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/tips/all/"
      );
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  

  // onSubmit functions to get tips by category
  async function onClickOne (event) {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=1');
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function onClickTwo (event) {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=2');
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function onClickThree (event) {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=3');
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function onClickFour (event) {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tips/all/');
      setTips(response.data);
    } catch (error) {
      console.log(error.response.data)
    }   
  }


  return (
    <div className="container">
      <h1>All Posts:</h1>
      <div>
        <p>Filter By:</p>
        <button onClick={(event) => onClickOne(event)} type = 'submit'>Yoga/Stretching</button> 
        <br/>
        <button onClick={(event) => onClickTwo(event)} type = 'submit'>Diet/Supplements</button>
        <br/>
        <button onClick={(event) => onClickThree(event)} type = 'submit'>Lifestyle/Other</button>
        <br/>
        <button onClick={(event) => onClickFour(event)} type = 'submit'>All</button>

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
              </body> 
          )
        }
        ).reverse()}
    </div>
  );
};

export default HomePage;
