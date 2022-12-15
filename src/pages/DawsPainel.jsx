import "./pages.css"
import instance from "../scripts/Api.js";
import { useState } from "react";



function DawsPainel() {
    const [itemssearchdaw, setItemsSearchDaw] = useState([])

    instance.get("itemssearchdaw").then(res => {
        setItemsSearchDaw(res.data)
    })
    return (
        <div className="painel-daw">
            {Array.isArray(itemssearchdaw) ?
                itemssearchdaw.map(el => {
                    return <div className="itemPost" onClick={() => {
                        window.location = `/painel/${el._id}`
                    }}>

                        <div className="img-slot-post">
                            <img src={el.img} alt="" className="img-item-post" />
                        </div>
                        <div className="painel-item-content">
                            <h2>{el.name}</h2>
                            <p dangerouslySetInnerHTML={{ __html: el.descri }}></p>
                        </div>
                    </div>
                })
                : ""
            }
        </div>
    )
}

export default DawsPainel;