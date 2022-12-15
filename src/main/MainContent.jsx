import "./MainContent.css"
import instance from "../scripts/Api.js"
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../pagination/Pagination";


function MainContent() {
    const [postsVst, setPostsvst] = useState("")
    const [postsize, setPostSize] = useState("")
    const [postSkip,setPostSkip] = useState(0)

    const postLimit = 5

    useEffect(() => {
        instance.post("painelaxios", { 
            postLimit: postLimit ,
            postSkip: postSkip
        }).then(res => {
            setPostsvst(res.data.postlist)
            setPostSize(res.data.size)
        })
    }, [postSkip])

    return (
        <div className="main-content">
            {Array.isArray(postsVst) ?
                postsVst.map(el => {
                    return <div className="itemPost" onClick={() => {
                        window.location = `/painel/${el._id}`
                    }}>
                        <span className="date-post">Post: {el.dateSet}</span>
                        <div className="img-slot-post">
                            <img src={el.img} alt="" className="img-item-post" />
                        </div>
                        <div className="painel-item-content">
                            <h2>{el.name}</h2>
                            <p dangerouslySetInnerHTML={{ __html: el.descri }}></p>
                        </div>
                    </div>

                }) :
                null
            }
            <Pagination postsize = {postsize} postLimit = {postLimit} setPostSkip = {setPostSkip}/>
        </div>
    )
}

export default MainContent;