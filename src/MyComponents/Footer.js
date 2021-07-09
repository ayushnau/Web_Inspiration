import { Link } from "react-router-dom";
const Footer=()=>
{
    return(
        <>
          <div className="supercontainer">
             <div className="footerpara">
                  <div className="footerheading">
                       Web Design Inspiration
                  </div>
                  <div className="firstparainfooter"> We are a web design inspiration gallery. All the website designs we published have been carefully handpicked by a graphic designer. We try to publish different styles of website design ideas, feels and looks from various places and not only the best websites from the coolest industries. If you are looking for the best website design ideas and trends, I believe you are at the right place.
                  </div>
                  <ul className="list1infooter">
                    <li><Link to="#"> Website Design</Link></li>
                    <li><Link to="#">Inspiration</Link></li>
                    <li><Link to="#">Submit a Website</Link></li>
                    <li><Link to="#">Web Design</Link></li>
                    <li><Link to="#">Blog</Link></li>
                  </ul>

                  <ul className="list2infooter">
                 <li><Link to="#">Digital</Link></li>
                 <li><Link to="#">Agency</Link></li>
                 <li><Link to="#">Services</Link></li>
                 <li><Link to="#">Contact </Link></li> 
                 <li><Link to="#">Legal Terms</Link></li> 
                  </ul>
             </div>
                <div className="socialmedia">
                    <div className="social">
                      <span><i class="fab fa-instagram"></i></span>
                      <span><i class="fab fa-linkedin-in"></i></span>
                      <span><i class="fab fa-twitter"></i></span>
                      <span><i class="fab fa-facebook-square"></i></span>
                      <span><i class="fab fa-pinterest"></i></span>
                    </div>

                    <div className="changelanguage">
                        Change Language:
                    </div>
                    <div className="flag">
                        <ul className="flaginul">
                            <li><Link to="#">
                                <img src="https://www.webdesign-inspiration.com/images/flags/en.png" alt="image" />
                                </Link></li>
                            <li><Link to="#"><img src="https://www.webdesign-inspiration.com/images/flags/fr.png" alt="image" /></Link></li>
                        </ul>
                    </div>

                </div>
          </div>
                      
          <div className="copywright">
            ©WDI All Rights Reserved
            </div>
        </>
    )
}
export default Footer;