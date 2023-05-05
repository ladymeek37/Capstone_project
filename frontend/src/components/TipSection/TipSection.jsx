import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CommentsSection from '../CommentSection/CommentsSection';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const TipSection = () => {
    const [tips, setTips] = useState([]);
    const [user, token] = useAuth();
    const {state} = useLocation()

    useEffect(() => {
        fetchTips();
      }, [token, state]);

    const fetchTips = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/tips/all/"
          );
          setTips(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };

    //   async function onClickOne (event) {
    //     try {
    //       let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=1')
    //       setTips(response.data);
    //     } catch (error) {
    //       console.log(error.response.data)
    //     }
    //   }
    
    //   async function onClickTwo (event) {
    //     try {
    //       let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=2');
    //       setTips(response.data);
    //     } catch (error) {
    //       console.log(error.response.data)
    //     }
    //   }
    
    //   async function onClickThree (event) {
    //     try {
    //       let response = await axios.get('http://127.0.0.1:8000/api/tips/by_category?category=3');
    //       setTips(response.data);
    //     } catch (error) {
    //       console.log(error.response.data)
    //     }
    //   }
    
    //   async function onClickFour (event) {
    //     try {
    //       let response = await axios.get('http://127.0.0.1:8000/api/tips/all/');
    //       setTips(response.data);
    //     } catch (error) {
    //       console.log(error.response.data)
    //     }   
    //   }


    return ( 
            <div className="container">
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
 
export default TipSection;