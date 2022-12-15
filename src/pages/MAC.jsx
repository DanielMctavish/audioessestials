import HeaderMac from "../header/HeaderMac";
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"
import MacPainel from "./MacPainel";


function Mac() {
    return (
        <>
            <HeaderMac/>
            <Sidebar />
            <Sidebar2/>
            <MacPainel/>
            <span className="titles">Mac - SO</span>
        </>
    )
}

export default Mac;