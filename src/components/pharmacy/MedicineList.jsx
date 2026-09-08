import {useState, useEffect} from 'react';
import MedicineItem from './MedicineItem';

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

    const [medicineName, setMedicineName] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(()=>{
        const savedMedicines = localStorage.getItem("AvailableMedicines");

        if (savedMedicines!==null){
        const parsedMedicines = JSON.parse(savedMedicines)
        setMedicines(parsedMedicines)
        }
        setHasLoaded(true);
    }, []);

    useEffect(()=>{
        if(!hasLoaded){
            return;
        }

        const medicinesString = JSON.stringify(medicines)
        localStorage.setItem("AvailableMedicines", medicinesString)
    }, [medicines, hasLoaded])


    return ( 
        <div className="list">
            <h2>Medicine List</h2>
            <ul >
                {medicines.map((medicine)=>(
                    <MedicineItem
                    key={medicine.id}
                    medicine={medicine}
                    increaseMedicine={increaseMedicine}
                    decreaseMedicine={decreaseMedicine}
                    deleteMedicine={deleteMedicine}
                    editMedicine={editMedicine}
                    />
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
                    if(medicineName.trim()==="" || medicineQuantity<0){
                        return;
                    }

                    const highestId = medicines.reduce((highestId, medicine) => {
                        if (medicine.id > highestId) {
                            return medicine.id;
                        }

                        return highestId;
                    }, 0);

                    const newId = highestId + 1;

                    setMedicines([...medicines,
                    {id: newId,
                    name: medicineName.trim(),
                    quantity: medicineQuantity}
                    ]);

                    setMedicineName("");
                    setMedicineQuantity(""); 
                    }}>
                    Add
                </button>

            </div>
            
        </div>
    );
}
 
export default MedicineList;