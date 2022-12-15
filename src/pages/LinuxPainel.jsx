import { useState } from "react"
import { Link } from "react-router-dom"
import instance from "../scripts/Api"

function LinuxPainel() {

    const [itemssearchlinux, setItemsSearchlinux] = useState([])

    instance.get("itemssearchlinux").then(res => {
        setItemsSearchlinux(res.data)
    })

    return (
        <div className="linux-painel">
            {Array.isArray(itemssearchlinux) ?
                itemssearchlinux.map(el => {
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

export default LinuxPainel;