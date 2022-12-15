import { useState } from "react";
import instance from "../scripts/Api";

function BassPainel() {

    const [itemssearchbass, setItemsSearchBass] = useState([])

    instance.get("itemssearchbass").then(res => {
        setItemsSearchBass(res.data)
    })

    return (
        <div className="bass-painel">
            {Array.isArray(itemssearchbass) ?
                itemssearchbass.map(el => {
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

export default BassPainel;