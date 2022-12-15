import { useState } from "react"
import instance from "../scripts/Api.js"


function AcousticGuitarPainel() {

    const [itemssearchacoustic, setItemsSearchAcoustic] = useState([])

    instance.get("itemssearchacoustic").then(res => {
        setItemsSearchAcoustic(res.data)
    })

    return (
        <div className="acousticguitar-painel">
            {Array.isArray(itemssearchacoustic) ?
                itemssearchacoustic.map(el => {
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

export default AcousticGuitarPainel;