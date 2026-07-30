import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <div className="progress-container">
                <div style={{ width: count*10 + "%" }} className="progress-bar"></div>
            </div>
            <h1>{count*10}%</h1>
            <button onClick = {()=>{if(count<10){setCount(count +1)}}}>Increase</button>
            <button onClick = {()=>{if(count>0){setCount(count -1)}}}>Decrease</button>
            <button onClick = {()=>setCount(0)}>Reset</button>

            {count<4 && <h3>Just started!</h3>}
            {count>3 && count<8 && <h3>Making progress!</h3>}
            {count>7 && count<10 && <h3>Almost there!</h3>}
            {count===10 && <h3>Maximum reached!</h3>}
        </div>
     );
}
 
export default Counter;