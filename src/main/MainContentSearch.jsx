import "./MainContent.css"
import instance from "../scripts/Api.js"



function MainContentSearch(props) {

    //setPostsvst(props.itemsSearch)

    return (
        <div className="main-content-search">
            {Array.isArray(props.searchItems) ?
                props.searchItems.map(el => {
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
                }) :
                null
            }
        </div>
    )
}

export default MainContentSearch;