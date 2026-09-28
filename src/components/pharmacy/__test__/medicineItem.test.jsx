import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import MedicineItem from '../MedicineItem';

test('renders medicine name passed through prop', ()=>{
    render(<MedicineItem medicine={{ id: 1, name: 'warfarin', quantity: 10 }}/>);
    const medicineElement = screen.getByText(/warfarin/i);
    expect(medicineElement).toBeInTheDocument();
});

test('renders the delete button', ()=>{
    render(<MedicineItem medicine={{ id: 1, name: 'warfarin', quantity: 10 }}/>);
    const deleteButton = screen.getByRole('button', {name: /delete/i});
    expect(deleteButton).toBeInTheDocument();
});

test('renders the medicine name', async ()=>{
    render(<MedicineItem medicine={{ id: 1, name: 'warfarin', quantity: 10}}/>);
    const medicineElement = await screen.findByText(/medicine name/i);
    expect(medicineElement).toBeInTheDocument();
})

test('does not render a medicine that was not passed as a prop', ()=>{
    render(<MedicineItem medicine={{ id: 1, name: 'warfarin', quantity: 10}}/>);
    const medicineElement = screen.queryByText(/roacutane/i);
    expect(medicineElement).not.toBeInTheDocument();
})