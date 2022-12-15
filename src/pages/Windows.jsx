import "../sidebar/Sidebar.css"
import HeaderWindows from "../header/HeaderWindows";
import WindowsPainel from "./WindowsPainel";
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"

function Windows() {
    return (
        <>
            <HeaderWindows/>
            <Sidebar/>
            <Sidebar2/>
            <WindowsPainel/>
            <span className="titles">Windows</span>
        </>
    )
}

export default Windows;