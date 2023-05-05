import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CommentsSection from '../CommentSection/CommentsSection';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const TipSectionOne = () => {
    const [tips, setTips] = useState([]);
    const [user, token] = useAuth();
    const {state} = useLocation()

    useEffect(() => {
        fetchTipsOne();
      }, [token, state]);

      async function fetchTipsOne (event) {
        try {
          let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=1')
          setTips(response.data);
        } catch (error) {
          console.log(error.response.data)
        }
      }


    return ( 
            <div className="container">
            <div>
                <p>Filter By:</p>
                <Link to = {`/category1/`}> 
                    <button>Yoga/Stretching</button> 
                </Link>
                <br/>
                <Link to = {`/category2/`}> 
                    <button>Diet/Nutrition</button> 
                </Link>
                <br/>
                <Link to = {`/category3/`}> 
                    <button>Lifestyle/Other</button> 
                </Link>
                <br/>
                <Link to = {`/all/`}> 
                    <button>All</button> 
                </Link>
            </div>
            <h1> Yoga & Stretching </h1>
                {tips &&
                  tips.map((tip) => {
                    return(
                      <body>
                        <div key={tip.id}>
                          <p>{tip.user.username}</p>
                          <p>{tip.date} </p>
                          <p>{tip.title}</p> 
                          <p>{tip.category_display} </p>
                          <img src = {`http://127.0.0.1:8000${tip.image_url}`} alt={`${tip.title}  tip image`}/> 
                          <p>{tip.text} </p>
                          <a href={tip.link} target="_blank">{tip.link}</a>
                        </div>
                            <FavoriteButton tipId={tip.id}/>
                        <div>
                            <CommentsSection tipId = {tip.id}/>                  
                        </div>
        
                      </body> 
                  )
                }
                ).reverse()}
            </div>
          );
  
}
 
export default TipSectionOne;