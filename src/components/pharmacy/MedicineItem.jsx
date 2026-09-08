const MedicineItem = ({
    medicine,
    increaseMedicine,
    decreaseMedicine,
    deleteMedicine,
    editMedicine,
    editingMedicineId,
    setEditingMedicineId,
    input,
    setInput
}) => {
    const [isEditing, setIsEditing] = useState(false);

    return ( 
        <li>
            {isEditing ? 
            (<input 
                value={input} 
                type= "text" 
                onChange={(e)=>setInput(e.target.value)} 
                />):( 
                <span className="name">{medicine.name}</span>)} 
                <span className="quantity">{medicine.quantity}</span> 
            <button onClick={()=>increaseMedicine(medicine.id)}> 
                + 
            </button> 
            <button onClick={()=>decreaseMedicine(medicine.id)}> 
                - 
            </button> 
            <button onClick={()=>deleteMedicine(medicine.id)}> 
                Delete 
            </button> 
            <button onClick={()=>{ 
                if(isEditing){ 
                    editMedicine(medicine.id, input); 
                    setIsEditing(false) 
                }else{ 
                    setIsEditing(true); 
                    setInput(medicine.name)} 
                }}> 
                {isEditing ? "Save" : "Edit"} 
            </button> 
        </li>
    );
}
 
export default MedicineItem;