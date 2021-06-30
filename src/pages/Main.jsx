import { Link } from 'react-router-dom';
import React from 'react';

const Main = () => {
    return (
        <div>
        <div className="jollof">
            <h1> include the image of jollof</h1>
            <h4>Did you know you can make a delicious homemade nigerian jollof that tastes just like the ones we eat at parties that we love so much? well, the ladies in team gold fish will help you do just that.
            <Link to="/Jollof">click here</Link>  
           </h4> 

        </div>
        <div className="cakes">
        <h1> include the image of a cake</h1>
            <h4>The intense rich flavor of this chocolate cake bursts in your mouth like a christmas firework.
            <Link to="/Cakes">click here</Link> to try it. 
           </h4> 
        </div>

        <div className="pasta">
        <h1> include the image of spaghetti</h1>
            <h4>Short on time? No problem! This 5 ingredient pasta comes together in less than 20minutes and it is sure to satisfy the family.
            <Link to="/Pasta">click here</Link> to try it. 
           </h4> 
        </div>

        <div className="about">
        <h1> maybe a women techster logo</h1>
            <h4>Do you like what you see and would love to know more about the brilliant developers?
            <Link to="/About">
                <button> Read more</button>
                </Link> 
           </h4> 
        </div>
        </div>
    )
}

export default Main
