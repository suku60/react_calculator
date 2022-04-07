import React, {useEffect, useState} from 'react';
import './Calculator.css';

const Calculator = () => {

return (
<div className='calculator_box'>
    <div className="calculator_container">
        <div className="calculator_result_box">
            <div className="calculator_screen">

            </div>
        </div>
        <div className="calculator_buttons_box">
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="item">7
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">8
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">9
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">/
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="item">4
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">5
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">6
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">x
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="item">1
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">2
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">3
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">-
                        {/* svg file here */}
                    </div>
                </div>
            </div>
            <div className="calculator_buttons_row">
                <div className="calculator_button_box">
                    <div className="item">1
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">2
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">3
                        {/* svg file here */}
                    </div>
                </div>
                <div className="calculator_button_box">
                    <div className="item">-
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