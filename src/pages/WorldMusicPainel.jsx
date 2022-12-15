import { useState } from "react"
import instance from "../scripts/Api"

function WorldMusicPainel() {

    const [itemssearchworldmusic, setItemsSearchworldmusic] = useState([])

    instance.get("itemssearchworldmusic").then(res => {
        setItemsSearchworldmusic(res.data)
    })

    return (
        <div className="worldmusic-painel">
            {Array.isArray(itemssearchworldmusic) ?
                itemssearchworldmusic.map(el => {
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

export default WorldMusicPainel;