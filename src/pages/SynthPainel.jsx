import { useState } from "react";
import instance from "../scripts/Api";


function SynthPainel() {

    const [itemssearchsynth, setItemsSearchsynth] = useState([])

    instance.get("itemssearchsynth").then(res => {
        setItemsSearchsynth(res.data)
    })

    return (
        <div className="synth-painel">
            {Array.isArray(itemssearchsynth) ?
                itemssearchsynth.map(el => {
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

export default SynthPainel;