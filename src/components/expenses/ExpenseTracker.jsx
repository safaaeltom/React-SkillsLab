const ExpenseTracker = () => {
    return ( 
        <div className="tracking-list">
            <h2>Expense Tracker</h2>
            <form>
                <input type="text" 
                placeholder="Enter Description"/>
                <input type= "number"
                placeholder="Enter Amount"/>
                <input type="text"
                placeholder="Enter Category"/>

                <button type="submit"></button>
            </form>
        </div>
    );
}
 
export default ExpenseTracker;