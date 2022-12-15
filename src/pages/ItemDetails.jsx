import { useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../scripts/Api.js";

function ItemDetails() {

    const { id } = useParams();
    const [itemfound, setItemfound] = useState()
    const [descriHtml, setdescriHtml] = useState()

    instance.get(`itemsearch/${id}`).then(res => {
        setItemfound(res.data)
        setdescriHtml(itemfound.descri)
    })



    return (
        <div className="items-details">
            <h3 className="title-painel">{!itemfound ? "" : itemfound.name}</h3>

            <div className="descri-item-painel" dangerouslySetInnerHTML={{ __html: descriHtml }}>
            </div>
            <hr style={{ width: "80%" }} />
            <div className="magnetic-button" onClick={() => {
                window.open(itemfound.link, "_blanked", "noopener")
            }}>
                <span>download</span>
            </div>
        </div>
    )
}

export default ItemDetails;