import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../scripts/Api";


function WindowsPainel() {

    const [itemssearchwindows, setItemsSearchwindows] = useState([])

    instance.get("itemssearchwindows").then(res => {
        setItemsSearchwindows(res.data)
    })

    return (
        <div className="windows-painel">
            {Array.isArray(itemssearchwindows) ?
                itemssearchwindows.map(el => {
                    return <Link to={`/painel/${el._id}`} style={{ background: "none" }}>
                        <div className="itemPost">
                            <div className="img-slot-post">
                                <img src={el.img} alt="" className="img-item-post" />
                            </div>
                            <div className="painel-item-content">
                                <h2>{el.name}</h2>
                                <p dangerouslySetInnerHTML={{ __html: el.descri }}></p>
                            </div>
                        </div>
                    </Link>
                })
                : ""
            }
        </div>
    )
}

export default WindowsPainel;