import { useState } from 'react'
import './ToggleButton.css'

export default function ToggleButton(){
    const [toggleState, setToggleState] = useState(false)
    
    function setState(){
        setToggleState(true);
    }

    return <div className='ToggleButton'>
        <label className='switch' onClick={setState}>
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    </div>
}