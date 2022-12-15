import { useState } from "react"
import { Link } from "react-router-dom"
import instance from "../scripts/Api"

function OrchestraPainel() {

    const [itemssearchorchestra, setItemsSearchOrchestra] = useState([])

    instance.get("itemssearchorchestra").then(res => {
        setItemsSearchOrchestra(res.data)
    })

    return (
        <div className="orchestra-painel">
            {Array.isArray(itemssearchorchestra) ?
                itemssearchorchestra.map(el => {
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

export default OrchestraPainel;