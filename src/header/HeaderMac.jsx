import "./header.css"
import frame from "../#media/Frame 1.jpg"

export default function HeaderMac(){
    return(
        <div className="header-mac">
            <img src={frame} alt="" />
            <div className="painel-front-mac"></div>
        </div>
    )
}