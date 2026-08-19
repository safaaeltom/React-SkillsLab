import {useState} from 'react';

const MedicineList = () => {
    const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", quantity: 24 },
    { id: 2, name: "Ibuprofen", quantity: 5 }
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

    return ( 
        <div className="list">
            <h2>Medicine List</h2>
            <ul >
                {medicines.map((medicine)=>(
                    <li key={medicine.id}>
                        <span className="name">{medicine.name}</span>
                        <span className="quantity">{medicine.quantity}</span>
                        <button onClick={()=>increaseMedicine(medicine.id)}>
                            +
                        </button>
                        <button onClick={()=>decreaseMedicine(medicine.id)}>
                            -
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
     );
}
 
export default MedicineList;