 
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";
import {  useState } from "react"
import './App.css';

function App() {
    let [counter, setCounter] = useState(0)
    const [controle, setControle] = useState(true)

    const [intervalID, setIntervalID] = useState(null)

    const increment = () => {
        
        if (document.getElementById("fontCounter").value <= 0) return;
        setCounter(oldCounter => oldCounter - 1);
     
    };

    const cronoClick = () => {
        setControle(!controle)
        if (intervalID === null)
            setIntervalID(setInterval(increment, 1000));
    }

    const onClickStop = () => {
        setControle(!controle)
        clearInterval(intervalID);
        setIntervalID(null);
    }
    let addClick = () => {
        setCounter(oldCounter => oldCounter + 1)
    }
    let decrementClick = () => {
        if (counter >= 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className="App">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div id="boxCounter">
                            <input id="fontCounter" className={`${counter % 2 == 0 ? "fontGreen" : " fontBlack"}`} readOnly value={counter} />
                        </div>
                       
                    </div>
                    <div class="col-sm">
                        <div className="btnAdd" onClick={addClick}> <CgAdd /> <span> Adicionar</span></div>
                        <div className="btnRemove" onClick={decrementClick}> <CgRemove /><span> Remover</span></div>
                        <div className="btnCrono" onClick={controle ? cronoClick : onClickStop}><AiOutlineClockCircle /><span> Cronometro</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
