import ItemDetails from "./ItemDetails";
import Header from "../header/Header"
import imgDawInterface from "../#media/daw-interface.jpg"

function PainelItem() {
    return (
        <div className="items-painel">
            <img src={imgDawInterface} id = "painel-img-interface"/>
            <Header/>
            <ItemDetails/>
        </div>
    )
}

export default PainelItem;