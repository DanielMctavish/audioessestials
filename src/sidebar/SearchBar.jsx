import "./searchbar.css"
import instance from "../scripts/Api.js"


function SearchBar(props) {
    return (
        <div className="search-bar">
            <input type="text" className="search-item-vst" placeholder="keyword" />
            <span className="material-symbols-outlined" style={{ cursor: "pointer" }} onClick={
                () => {
                    let search = document.querySelector(".search-item-vst")
                    instance.get("painelaxiossearch").then(res => {
                        let vstitems = res.data;
                        let maincontent = document.querySelector(".main-content")
                        let maincontentsearch = document.querySelector(".main-content-search")
                        maincontent.style.display = "none";
                        maincontentsearch.style.display = "flex";


                        const filter = vstitems.filter(el => {
                            return el.name.toUpperCase().includes(search.value.toUpperCase())
                        })
                        console.log(search.value);
                        console.log(filter);
                        props.setSearchItems(filter)
                    })
                }
            }>
                search
            </span>
        </div>
    )
}

export default SearchBar;