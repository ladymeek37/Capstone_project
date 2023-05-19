import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CommentsSection from '../CommentSection/CommentsSection';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./TipSection.css"


const TipSection = (props) => {
    const [tips, setTips] = useState([]);
    const [user, token] = useAuth();
    const {state} = useLocation()

    // useEffect(() => {
    //     fetchTips();
    //   }, [token, state]);

    useEffect(() => {
        fetchTips();
      }, [props.tipId]);

    const fetchTips = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/tips/all/"
          );
          setTips(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error.response.data);
        }
      };


    return ( 
                <div className="container parent">
                <div className='titlecontainer'>
                  <h1 >All Tips:</h1>                  
                </div>          
              <div class = "filtercontainer">
                  <p className='filterbutton filtertext'>Filter By:</p>
                  <Link  to = {`/category1/`}> 
                      <button className='filterbutton'>Yoga/Stretching</button> 
                  </Link>
                  <br/>
                  <Link  to = {`/category2/`}> 
                      <button className='filterbutton'>Diet/Nutrition</button> 
                  </Link>
                  <br/>
                  <Link  to = {`/category3/`}> 
                      <button className='filterbutton'>Lifestyle/Other</button> 
                  </Link>
                  <br/>
                  <Link  to = {`/all/`}> 
                      <button className='filterbutton'>All</button> 
                  </Link>
              </div>

                <div>
                {tips &&
                  tips.map((tip) => {
                    return(
                      <body className='child'>
                        <div key={tip.id}>
                          <div className='name-date-favorite'>
                            <h3 className='username'>@{tip.user.username}</h3>
                            <div className='fav'>
                              {tip.id}
                              <FavoriteButton tipId={tip.id} fetchTips={fetchTips} />
                              <p>{tip.favorite_count}</p>                              
                            </div>

                            <p>{tip.date} </p>                            
                          </div>
                          <div className='tipbody'>
                            <h1 className='item'>{tip.title}</h1> 
                            <h4 className='item'>{tip.category_display} </h4>
                            <img className='item'src = {`http://127.0.0.1:8000${tip.image_url}`} alt={`${tip.title}  tip image`}/> 
                            <p className='item'>{tip.text} </p>
                            <a className='item' href={tip.link} target="_blank">{tip.link}</a>                            
                          </div>

                        </div>

                        <div>
                            <CommentsSection tipId = {tip.id}/>                  
                        </div>
        
                      </body>                  
                  )
                }
                ).reverse()}  
                </div>

            </div>
          );
  
}
 
export default TipSection;