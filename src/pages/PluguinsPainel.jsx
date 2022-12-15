import { useState } from "react"
import { Link } from "react-router-dom"
import instance from "../scripts/Api"


function PluguinPainel() {

    const [itemssearchplugins, setItemsSearchPlugins] = useState([])

    instance.get("itemssearchplugins").then(res => {
        setItemsSearchPlugins(res.data)
    })

    return (
        <div className="pluguins-painel">
            {Array.isArray(itemssearchplugins) ?
                itemssearchplugins.map(el => {
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

export default PluguinPainel;