import HeaderLinux from "../header/HeaderLinux";
import Sidebar from "../sidebar/Sidebar"
import Sidebar2 from "../sidebar/Sidebar2"
import LinuxPainel from "./LinuxPainel";


function Linux() {
    return (
        <>
            <HeaderLinux/>
            <Sidebar />
            <Sidebar2/>
            <LinuxPainel/>
            <span className="titles">Linux</span>
        </>
    )
}

export default Linux;