import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';

import '../styles/Main.css';

const Veggies = () => {
    return (
        <div>
                 <div class="gallery">
                        <h2>Vegan page</h2>
                        <p>Vegan meals provide all the nutrient a person needs, it also aids in weight loss. Research also show that vegan diets boost heart health in several ways.
                            Do you want to try something new or alreadyy a vegan? and you find the images mouth watering? click on them to explore and make broccolli taste like asun (goat meat).
                        </p>
                    <a href="https://www.feastingathome.com/lentil-dal-with-spinach/">
                    <img src={ image1 } class="vegan_img" alt="vegan 1" />
                    </a>
                    
                    <a href="https://www.feastingathome.com/broccoli-cakes/">
                    <img src={ image2 } class="vegan_img" alt="vegan 2" />
                    </a>
                
                    <a href="https://www.feastingathome.com/instant-pot-butternut-risotto-with-leeks/">
                    <img src={ image3 } class="vegan_img" alt="vegan 3" />
                    </a>

                    <a href="https://www.feastingathome.com/eggplant-lasagna/">
                    <img src={ image4 } alt="vegan 4" class="vegan_img" />
                    </a>
            
                    <a href="https://www.feastingathome.com/nasi-goreng-indonesian-fried-rice/">
                    <img src={ image5 } alt="vegan 5" class="vegan_img" />
                    </a>

                    <a href="https://www.feastingathome.com/orecchiette-pasta-with-broccoli-sauce/">
                    <img src={ image6 } alt="vegan 6" class="vegan_img" />
                    </a>
            
                    <a href="https://www.feastingathome.com/roasted-chile-rellenos-with-black-beans/">
                    <img src={ image7 } class="vegan_img 7" alt="vegan 7" />
                    </a>
    
                    <a href="https://www.feastingathome.com/vegetarian-enchiladas/">
                    <img src={ image8 } alt="vegan 8" class="vegan_img" />
                    </a>
                    
                    <a href="https://www.feastingathome.com/mushroom-wellington-rosemary-pecans/">
                    <img src={ image9 } alt="vegan 9" class="vegan_img" />
                    </a>

                    <a href="https://www.feastingathome.com/roasted-cauliflower-pasta/">
                    <img src={ image10 } alt="vegan 10" class="vegan_img" />
                    </a>
            </div>
        </div>
    )
}

export default Veggies
