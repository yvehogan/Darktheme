import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const colors = ['grey', 'red'];

const Likes = () => {
    const [colorIndex, setColorIndex] = useState(0);

    const nextColor = () => {
      const newColorIndex = colorIndex + 1;
      if (colors[newColorIndex]) 
          setColorIndex(newColorIndex);
      else
          setColorIndex(0);
  }
    return (
        <div>
                
          <FontAwesomeIcon
           icon={faHeart}
           style = {{color: colors[colorIndex]}}
           onClick={nextColor}
          />
         </div>  
    )
}
export default Likes;