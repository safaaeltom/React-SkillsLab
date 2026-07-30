const CounterMessage = ({count}) => {
    return ( 
        <div className="messages">
            {count<4 && <h3>Just started!</h3>}
            {count>3 && count<8 && <h3>Making progress!</h3>}
            {count>7 && count<10 && <h3>Almost there!</h3>}
            {count===10 && <h3>Maximum reached!</h3>}
        </div>
     );
}
 
export default CounterMessage;