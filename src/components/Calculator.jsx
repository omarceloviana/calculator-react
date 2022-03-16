import react from "react";
import { useState } from "react";
import style from './Calculator.css'


function Calculator(){
        function clear(){
            setNum(0)
        }
        const [num, setNum] = useState(0)
        const [oldNum, setoldNum] = useState(0)
        const [operator, setOperator] = useState()

        function inputNum(v){
            var input = v.target.value
            if(num === 0){
                setNum(input)
            }else{
                setNum(num + input)
            }
        }

        function operatorSelected(v){
            var operatorInput = v.target.value
            setOperator(operatorInput)
            setoldNum(num)
            setNum(0)
        }

        function calculate(){
           if(operator === "+"){
               setNum(oldNum + num)
           }else if(operator === "-"){
               setNum(oldNum - num)
           }else if(operator === "x"){
               setNum(oldNum * num)
           }else if(operator === "/"){
               setNum(oldNum / num)
           }

        }

    return(
        <>
        <div className="box">
            <h1 className="res">{num}</h1>
            <button onClick={clear}>C</button>
            <button>+/-</button>
            <button>%</button>
            <button className="orange" onClick={operatorSelected} value="/">/</button>
            <button className="gray" onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operatorSelected} value="x">x</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orange" onClick={operatorSelected} value="-">-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orange" onClick={operatorSelected} value="+">+</button>
            <button className="zero" onClick={inputNum} value={0}>0</button>
            <button className="gray">,</button>
            <button className="orange" onClick={calculate}>=</button>

        </div>
        </>
        
    )
}

export default Calculator