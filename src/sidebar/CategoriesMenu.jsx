import { Link } from "react-router-dom";
import "./categoriesmenu.css"



function CategoriesMenu() {
    let maincontentsearch = document.querySelector(".main-content-search")
    return (
        <>
            <div className="menu-categories">
                <h2>categories</h2>
                <Link to="/"><span value="DAWS">HOME</span></Link>
                <Link to="/daws"><span value="DAWS" >DAWS</span></Link>
                <Link to="/piano"><span value="Pianos">Pianos</span></Link>
                <Link to="/drumskit"><span value="Drums-kit">Drums-kit</span></Link>
                <Link to="/orchestra"><span value="Orchestra">Orchestra</span></Link>
                <Link to="/kontakt"><span value="Kontakt">Kontakt</span></Link>
                <Link to="/guitarfx"><span value="Guitar-Fx">Guitar-Fx</span></Link>
                <Link to="/pluguins"><span value="Pluguins">Pluguins</span></Link>
                <Link to="/acousticguitar"><span value="Acoustic-Guitar">Acoustic-Guitar</span></Link>
                <Link to="/bass"><span value="Bass">Bass</span></Link>
                <Link to="/worldmusic"><span value="World-Music">World-Music</span></Link>
                <Link to="/percussion"> <span value="Percussion">Percussion</span></Link>
                <Link to="/synth"> <span value="Percussion">SYNTH</span></Link>
                <h2>OS</h2>
                <Link to="/windows"><span value="DAWS">Windows</span></Link>
                <Link to="/mac"><span value="DAWS">MAC</span></Link>
                <Link to="/linux"><span value="DAWS">Linux</span></Link>
            </div>
        </>
    )
}

export default CategoriesMenu;