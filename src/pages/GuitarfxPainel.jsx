import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../scripts/Api";


function GuitarPainel() {

    const [itemssearchguitar, setItemsSearchGuitar] = useState([])

    instance.get("itemssearchguitar").then(res => {
        setItemsSearchGuitar(res.data)
    })

    return (
        <div className="guitar-painel">
            {Array.isArray(itemssearchguitar) ?
                itemssearchguitar.map(el => {
                    return <Link to={`/painel/${el._id}`} style={{ background: "none" }}>
                        <div className="itemPost" onClick={() => {
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
                    </Link>
                })
                : ""
            }
        </div>
    )
}

export default GuitarPainel;