import HeaderLinux from "../header/HeaderLinux";
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"
import LinuxPainel from "./LinuxPainel";


function Linux() {
    return (
        <div className="linux">
            <HeaderLinux/>
            <Sidebar />
            <Sidebar2/>
            <LinuxPainel/>
            <span className="titles">Linux</span>
        </div>
    )
}

export default Linux;