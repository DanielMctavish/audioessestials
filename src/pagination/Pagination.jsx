function Pagination(props) {
    let quantPages = Math.ceil(props.postsize / props.postLimit)
    let arrayPages = []

    for (let i = 0; i < quantPages; i++) {
        arrayPages.push(i)
    }

    return (
        <div className="pagination">
            {Array.from(arrayPages).map((el, index) => {

                return <button id={index} onClick={() => {
                    arrayPages.map((el, index) => {
                        document.getElementById(index).style.background = "white"
                        document.getElementById(index).style.border = "none"
                        return
                    })
                    let currentPage = index
                    document.getElementById(index).style.background = "grey"


                    props.setPostSkip(props.postLimit * currentPage)
                }}>{index + 1}</button>
            })}
        </div>
    )
}

export default Pagination;