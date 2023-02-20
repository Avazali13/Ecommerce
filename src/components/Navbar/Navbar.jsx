import style from "./style.css"

import firstimg from "./assets/Logo.svg"
import secondimg from "./assets/Menu-Icon.svg"
import thirdimg from "./assets/Nav-Link.svg"
import fourthimg from "./assets/Nav-Link2.svg"
import fifthimg from "./assets/Nav-Link-Bottom.svg"


function Navbar(){
    return(
        <nav>
            <div className="navcontainer">
             <div className="top">
             <img src={firstimg} alt="" />
                <img src={secondimg} alt="" />
                <img src={thirdimg} alt="" />
                <img src={fourthimg} alt="" />
             </div>
                <div className="bottom">
                    <img src={fifthimg} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;