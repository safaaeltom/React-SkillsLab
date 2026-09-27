import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import MedicineItem from '../MedicineItem';

test('renders medicine name passed through prop', ()=>{
    render(<MedicineItem medicine={{ id: 1, name: 'warfarin', quantity: 10 }}/>);
    const medicineElement = screen.getByText(/warfarin/i);
    expect(medicineElement).toBeInTheDocument();
});