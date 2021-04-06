import React from 'react';
import {gumar,hanum,bajanum,angam,tokos,mnacord} from '../calculator/action';
import {useSelector,useDispatch} from 'react-redux';

function Header(){
    const tiv=useSelector(state=>state.tiv);
    const dispatch=useDispatch();
    let inpValue=0;
    return(
        <div className="calculator">
            <div className="calculators_inp_res">
                    <input type="number" onChange={(e)=>{inpValue=e.target.valueAsNumber}} />
                 <span>{tiv}</span>
            </div>
            <div className="mybtns">
            <button onClick={()=>dispatch(gumar(inpValue))}>+</button>
            <button onClick={()=>dispatch(hanum(inpValue))}>-</button>
            <button onClick={()=>dispatch(bajanum(inpValue))}>/</button>
            <button onClick={()=>dispatch(angam(inpValue))}>*</button>
            <button onClick={()=>dispatch(tokos(inpValue))}>%</button>
            <button onClick={()=>dispatch(mnacord(inpValue))}>Mnacord</button>
            </div>
        </div>
    )
}
export default Header;