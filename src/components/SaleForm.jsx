import React, { useState } from 'react';
import '../style/SalesForm.css';
import Button from './Button'

const SaleForm = ({ onSaleAdded, onClose }) => {
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const handleNext = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSale = { name, date, location };
        onSaleAdded(newSale);
        setName('');
        setDate('');
        setLocation('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {step === 0 && (
                <input
                    type="text"
                    placeholder="Sale Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            )}
            {step === 1 && (
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            )}
            {step === 2 && (
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            )}
            <div className="button-group">
                {step > 0 && (
                    <Button className="btn-back" type="button" onClick={handleBack}> Back</Button>
                )}
                {step < 2 ? (
                    
                    <Button className="btn-next" type="button" onClick={handleNext}> Next</Button>
                ) : (
                 
                    <Button className= "btn-add" type="submit">Add Sale</Button>
                )}
            </div>
           
        </form>
    );
};

export default SaleForm;
