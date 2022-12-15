import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Sidebar2 from "../sidebar/Sidebar2";
import SynthPainel from "./SynthPainel";

function Synth(){
    return(
        <div className="Synth">
            <Header/>
            <Sidebar/>
            <Sidebar2/>
            <SynthPainel/>
        </div>
    )
}

export default Synth;