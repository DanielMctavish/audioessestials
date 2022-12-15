import { useState } from "react";
import { Link } from "react-router-dom";
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

export default KontaktPainel;