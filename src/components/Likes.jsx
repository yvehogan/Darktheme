import React,{ useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../styles/Likes.css';

const Likes = () => {
    const [like, setLike] = useState(0); 

    const handleClick = () => {
      setLike(!like);
    };

    return (
        <div>
          <button
           className="like-btn"
              
              onClick={handleClick}>
                {like ? like + 0  : like}
                
          <FontAwesomeIcon
           icon={faHeart}
           className="like-icon"
          />
            </button>
         </div> 
       
    )
}
export default Likes;