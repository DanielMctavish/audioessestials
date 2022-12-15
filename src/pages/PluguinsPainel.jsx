import { useState } from "react"
import instance from "../scripts/Api"


function PluguinPainel(){

    const [itemssearchplugins, setItemsSearchPlugins] = useState([])

    instance.get("itemssearchplugins").then(res => {
        setItemsSearchPlugins(res.data)
    })

    return(
        <div className="pluguins-painel">
             {Array.isArray(itemssearchplugins) ?
                itemssearchplugins.map(el => {
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

export default PluguinPainel;