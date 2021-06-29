
import bulb from './images/bulb.jpg';
import cost from './images/cost.jpg';
import design from './images/design.jpg';
import secure from './images/secure.jpg';


const Home = () => {

    return (  
        <div className="home">
            <div className="background">
                <nav className="nav">
                    <h1 className="heading">BA<span>KER</span></h1>
                    <ul className="nav-items">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>TESTIMONIAL</li>
                        <li>BLOG</li>
                        <li>CONTACT US</li>
                    </ul>
                </nav>

                <div className="content">
                    <h1>WE ARE AT BAKER</h1>
                    <h1>STARTING A NEW JOURNEY!!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Sint qui iusto voluptatem non nesciunt officia, ducimus quo quia natus sequi nihil sunt 
                        nulla cum itaque obcaecati perferendis corrupti sit iste?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Iste aut dolore placeat aspernatur veniam.
                        Aliquam, repellendus natus? 
                    </p>
                    <div className="buttons">
                        <button className="download">DOWNLOAD NOW</button>
                        <button className="learn">LEARN MORE</button>
                    </div>
                </div>

                <div className="content-lists">
                    <div className="creative">
                        <img src={bulb} alt="bulb" />
                        <h1>Creative Concept</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Eligendi praesentium, molestias sapiente architecto laudantium natus, 
                            cumque sint incidunt dolore enim inventore nisi velit quae id in illo 
                            veniam nostrum cum?
                        </p>
                    </div>
                    <div className="amazing">
                        <img src={design} alt="design" />
                        <h1>Amazing Design</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Eligendi praesentium, molestias sapiente architecto laudantium natus, 
                            cumque sint incidunt dolore enim inventore nisi velit quae id in illo 
                            veniam nostrum cum?
                        </p>
                    </div>
                    <div className="cost">
                        <img src={cost} alt="cost" />
                        <h1>Cost Effective</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Eligendi praesentium, molestias sapiente architecto laudantium natus, 
                            cumque sint incidunt dolore enim inventore nisi velit quae id in illo 
                            veniam nostrum cum?
                        </p>
                    </div>  
                    <div className="secure">
                        <img src={secure} alt="secure" />
                        <h1>Secure</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Eligendi praesentium, molestias sapiente architecto laudantium natus, 
                            cumque sint incidunt dolore enim inventore nisi velit quae id in illo 
                            veniam nostrum cum?
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;