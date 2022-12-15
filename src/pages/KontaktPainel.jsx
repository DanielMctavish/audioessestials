import { useState } from "react";
import instance from "../scripts/Api.js";

function KontaktPainel() {

    const [itemssearchkontakt, setItemsSearchKontakt] = useState([])

    instance.get("itemssearchkontakt").then(res => {
        setItemsSearchKontakt(res.data)
    })

    return (
        <div className="kontakt-painel">
            {Array.isArray(itemssearchkontakt) ?
                itemssearchkontakt.map(el => {
                    return <div className="itemPost" onClick={() => {
                        window.location = `/painel/${el._id}`
                    }}>

                        <div className="img-slot-post">
                            <img src={el.img} alt="" className="img-item-post" />
                        </div>
                        <div className="painel-item-content">
                            <h2>{el.name}</h2>
                            <p>{el.descri}</p>
                        </div>
                    </div>
                })
                : ""
            }
        </div>
    )
}

export default KontaktPainel;