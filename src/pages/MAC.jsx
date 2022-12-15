import HeaderMac from "../header/HeaderMac";
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"
import MacPainel from "./MacPainel";


function Mac() {
    return (
        <div className="mac">
            <HeaderMac/>
            <Sidebar />
            <Sidebar2/>
            <MacPainel/>
            <span className="titles">Mac - OS</span>
        </div>
    )
}

export default Mac;