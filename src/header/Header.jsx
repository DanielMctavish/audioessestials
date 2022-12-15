import "./header.css"
import frame from "../#media/Frame 1.jpg"

export default function Header(){
    return(
        <div className="header">
            <img src={frame} alt="" />
        </div>
    )
}