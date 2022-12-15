import "./pages.css"
import instance from "../scripts/Api.js";
import { useState } from "react";
import { Link } from "react-router-dom";



function PianosPainel() {
    const [itemssearchpiano, setItemsSearchPiano] = useState([])

    instance.get("itemssearchpianos").then(res => {
        setItemsSearchPiano(res.data)
    })
    return (
        <div className="painel-piano">
            {Array.isArray(itemssearchpiano) ?
                itemssearchpiano.map(el => {
                    return <Link to={`/painel/${el._id}`} style={{ background: "none" }}>
                        <div className="itemPost">
                            <div className="img-slot-post">
                                <img src={el.img} alt="" className="img-item-post" />
                            </div>
                            <div className="painel-item-content">
                                <h2>{el.name}</h2>
                                <p>{el.descri}</p>
                            </div>
                        </div>
                    </Link>
                })
                : ""
            }
        </div>
    )
}

export default PianosPainel;