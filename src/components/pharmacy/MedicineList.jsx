import {useState} from 'react';

const MedicineList = () => {
    const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol ", quantity: 24 },
    { id: 2, name: "Ibuprofen ", quantity: 5 },
    { id: 3, name: "Azithromycin ", quantity: 18 }

    ]);

    const increaseMedicine = (id) => {
        setMedicines(
            medicines.map((medicine)=>{
                if(medicine.id===id){
                    return {...medicine, quantity: medicine.quantity + 1};
                }

                return medicine;
            })
        );
    };

    const decreaseMedicine = (id) => {
        setMedicines(
            medicines.map((medicine)=>{
                if(medicine.id===id && medicine.quantity>0){
                    return {...medicine, quantity: medicine.quantity - 1};
                }
              
               return medicine;
            })
        );
    };

    const deleteMedicine = (id) =>{
        setMedicines(
            medicines.filter((medicine)=>
               medicine.id!==id
            )
        );
    };

    const editMedicine = (id, newName) =>{
        setMedicines(
            medicines.map((medicine)=>{
                if(medicine.id===id){
                    return {...medicine, name: newName};
                }
                return medicine;
            })
        );
    };

    const [editingMedicineId, setEditingMedicineId] = useState(null);
    const [input, setInput] = useState("");
    const [medicineName, setMedicineName] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState("");


    return ( 
        <div className="list">
            <h2>Medicine List</h2>
            <ul >
                {medicines.map((medicine)=>(
                <li key={medicine.id}>
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
                ))}
            </ul>
            <div className="add-medicine">
                <label htmlFor="medicine-name">Medicine Name</label>
                <input value={medicineName} type="text"
                placeholder="Enter Medicine"
                onChange={(e)=>setMedicineName(e.target.value)}
                >
                </input><br/>
                <label htmlFor="medicine-quantity">Medicine Quantity</label>
                <input value={medicineQuantity} type="number" min={0}
                placeholder="Enter Quantity"
                onChange={(e)=>setMedicineQuantity(Number(e.target.value))}
                >
                </input><br/>
                <button onClick={()=>{
                    if(medicineName!=="" && medicineQuantity>0){
                        setMedicines([...medicines,
                    {id: medicines.length+1,
                    name: medicineName,
                    quantity: medicineQuantity}
                    ]);

                    setMedicineName("");
                    setMedicineQuantity(""); 
                }}}>
                Add
            </button>

            </div>
            
        </div>
    );
}
 
export default MedicineList;