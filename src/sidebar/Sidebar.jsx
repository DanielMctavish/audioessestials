import CategoriesMenu from "./CategoriesMenu";
import SearchBar from "./SearchBar";
import "./Sidebar.css"

function Sidebar(props){
    return(
        <div className="sidebar">
            <SearchBar setSearchItems = {props.setSearchItems}/>
            <CategoriesMenu/>
        </div>
    )   
}

export default Sidebar;