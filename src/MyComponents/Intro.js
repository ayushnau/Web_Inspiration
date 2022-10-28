import { Link } from "react-router-dom";
import image16 from "../../src/Images/image16.png"
import image17 from "../../src/Images/image17.jpg"
const Intro = () => {
    return (
        <>
            <div className="maindiv">
                <div className="mission">
                    <div className="missionheading">
                        Web Design Inspiration : The best website design ideas 😍🙌💯
              </div>
                    <p className="firstpara">Our daily mission : find and showcase the best web design inspirations and trends. Every day, we publish fresh and creative new websites ideas made by creative agencies and web designers from all over the world.</p>
                    <p>Our website is free 💕 Spread the word :</p>

                </div>
                <div className="wrapperoftwocontainer">
                    <Link to="#" className="firstimage"><img src={image16} alt="image" target="__new" /></Link>
                    <Link to="#" className="secondimage"><img src={image17} alt="image" /></Link>
                </div>
            </div>
            <div>
                <div className="thelastline">
                The most popular Wordpress page builder : Elementor →
                  <div className="thisistryitforfree">  <Link to="#" > Try it for free</Link></div>

            </div>
            </div>
        </>

    )
}
export default Intro