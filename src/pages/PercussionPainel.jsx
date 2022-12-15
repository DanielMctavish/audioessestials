import { useState } from "react"
import instance from "../scripts/Api"

function PercussionPainel() {

    const [itemssearchPercussion, setItemsSearchPercussion] = useState([])

    instance.get("itemssearchpercussion").then(res => {
        setItemsSearchPercussion(res.data)
    })

    return (
        <div className="percussion-painel">
            {Array.isArray(itemssearchPercussion) ?
                itemssearchPercussion.map(el => {
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

export default PercussionPainel;