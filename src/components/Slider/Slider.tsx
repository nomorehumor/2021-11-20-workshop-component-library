import React, {useState, useEffect} from "react";
import internal from "stream";
import "./Slider.css";

interface SliderProps {
  step: number;
  min: number;
  max: number;
  firstValue: number;
  secondValue: number;
  unit: string;
  range?: boolean;
}

export const Slider = ({ ...props }: SliderProps, ) => {

  const [inputValue1, setInputValue1] = useState(props.firstValue);
  const [inputValue2, setInputValue2] = useState(props.secondValue);
  useEffect(() => {setInputValue1(props.firstValue)}, [props.firstValue])
  useEffect(() => {setInputValue2(props.secondValue)}, [props.secondValue])

  props.unit = "Unit"

  var input2 = <input className="Textfield Textfield-second" value={inputValue2} onChange={(event) => {setInputValue2(+event.target.value)}}></input>

  return <div>
          <input className="Textfield" value={inputValue1} onChange={(event) => {setInputValue1(+event.target.value)}}></input> 
          {props.range ? <span className="Textfield-dash">-</span> : null}
          {props.range ? input2 : null}
          <span className="Unitlabel">{props.unit}</span>
          <input type="range" className="Slider" 
                  onChange={(event) => {setInputValue1(+event.target.value);}} 
                  step={props.step} min={props.min} max={props.max} value={inputValue1}></input>
        </div>;
};
