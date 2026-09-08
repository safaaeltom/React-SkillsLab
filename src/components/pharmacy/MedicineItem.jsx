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
    return ( 
        <li>
            {medicine.id === editingMedicineId ? 
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
                if(medicine.id===editingMedicineId){ 
                    editMedicine(editingMedicineId, input); 
                    setEditingMedicineId(null) 
                }else{ 
                    setEditingMedicineId(medicine.id); 
                    setInput(medicine.name)} 
                }}> 
                {medicine.id===editingMedicineId ? "Save" : "Edit"} 
            </button> 
        </li>
    );
}
 
export default MedicineItem;