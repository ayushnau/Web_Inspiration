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
                    <li><a href="#"> Website Design</a></li>
                    <li><a href="#">Inspiration</a></li>
                    <li><a href="#">Submit a Website</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>

                  <ul className="list2infooter">
                 <li><a href="#">Digital</a></li>
                 <li><a href="#">Agency</a></li>
                 <li><a href="#">Services</a></li>
                 <li><a href="#">Contact </a></li> 
                 <li><a href="#">Legal Terms</a></li> 
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
                            <li><a href="#">
                                <img src="https://www.webdesign-inspiration.com/images/flags/en.png" alt="image" />
                                </a></li>
                            <li><a href="#"><img src="https://www.webdesign-inspiration.com/images/flags/fr.png" alt="image" /></a></li>
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