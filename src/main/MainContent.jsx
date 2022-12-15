import "./MainContent.css"
import instance from "../scripts/Api.js"
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";
import DawInterfaceImg from "../#media/daw-interface.jpg"

function MainContent() {
    const [postsVst, setPostsvst] = useState("")
    const [postsize, setPostSize] = useState("")
    const [postSkip, setPostSkip] = useState(0)

    const postLimit = 5

    useEffect(() => {
        instance.post("painelaxios", {
            postLimit: postLimit,
            postSkip: postSkip
        }).then(res => {
            setPostsvst(res.data.postlist)
            setPostSize(res.data.size)
        })
    }, [postSkip])

    //
    return (
        <div className="main-content">
            <img src={DawInterfaceImg} id = "daw-interface-img"/>
            {Array.isArray(postsVst) ?
                postsVst.map(el => {
                    return <Link id = "links-painel" to={`painel/${el._id}`} style={{ background: "none" }}>
                        <div className="itemPost">
                            <span className="date-post">Post: {el.dateSet}</span>
                            <div className="img-slot-post">
                                <img src={el.img} alt="" className="img-item-post" />
                            </div>
                            <div className="painel-item-content">
                                <h2>{el.name}</h2>
                                <p dangerouslySetInnerHTML={{ __html: el.descri }}></p>
                            </div>
                        </div>
                    </Link>
                }) :
                null
            }
            <Pagination postsize={postsize} postLimit={postLimit} setPostSkip={setPostSkip} />
        </div>
    )
}

export default MainContent;