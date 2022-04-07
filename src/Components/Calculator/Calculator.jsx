import React, {useEffect, useState} from 'react';
import './Calculator.css';

const Calculator = () => {

    const [screen, setScreen] = useState(0)

//    const [result, setResult] = useState(0)

    const clearScreen = setScreen(0)

    const pressingButton = (props) =>{
        console.log(props)
        if ( 
        props === "1" || 
        props === "2" || 
        props === "3" || 
        props === "4" || 
        props === "5" || 
        props === "6" || 
        props === "7" || 
        props === "8" || 
        props === "9" || 
        props === "0" 
        ) {

            setScreen(screen+props)

        } else {

            setScreen(props)

        }
    }


return (
<div className='calculator_box'>
    <div className="calculator_container">
        <div className="calculator_result_box">
            <div className="calculator_clear" onClick={()=>clearScreen()}>C</div>
            <div className="calculator_screen">{screen}

            </div>
        </div>
        <div className="calculator_buttons_box">
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("7")}>7
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("8")}>8
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("9")}>9
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("/")}>/
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("4")}>4
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("5")}>5
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("6")}>6
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("x")}>x
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("1")}>1
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("2")}>2
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("3")}>3
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("-")}>-
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("0")}>0
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton(".")}>.
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("+")}>+
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="button_item" onClick={()=>pressingButton("=")}>=
                        {/* svg file here */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Calculator;