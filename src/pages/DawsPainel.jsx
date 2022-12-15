import "./pages.css"
import instance from "../scripts/Api.js";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";



function DawsPainel() {
    const [itemssearchdaw, setItemsSearchDaw] = useState([])


    useEffect(() => {
        instance.get("itemssearchdaw").then(res => {
            setItemsSearchDaw(res.data)
        })
    }, [itemssearchdaw])
    
    return (
        <div className="painel-daw">
            {Array.isArray(itemssearchdaw) ?
                itemssearchdaw.map(el => {
                    return <Link to={`/painel/${el._id}`} style = {{background:"none"}}> <div className="itemPost">

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

export default DawsPainel;