import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../scripts/Api";


function MacPainel() {

    const [itemssearchmac, setItemsSearchmac] = useState([])

    instance.get("itemssearchmac").then(res => {
        setItemsSearchmac(res.data)
    })

    return (
        <div className="mac-painel">
            {Array.isArray(itemssearchmac) ?
                itemssearchmac.map(el => {
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

export default MacPainel;