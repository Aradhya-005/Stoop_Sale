import React, { useState } from 'react';
import SaleForm from './SaleForm';
import UpcomingSales from './UpcomingSales';
import Modal from './Modal';
import Button from './Button';
import '../style/UpcomingSales.css'
const SalesManager = () => {
    const [sales, setSales] = useState([]);
    const [isFormOpen, setFormOpen] = useState(false);

    const handleSaleAdded = (newSale) => {
        setSales([...sales, newSale]);
        setFormOpen(false); // Close the form after adding a sale
    };

    return (
        <div>
          <Button  className="button-padding" onClick={() => setFormOpen(true)}>Add  Sales</Button>
            
            <Modal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                <SaleForm onSaleAdded={handleSaleAdded} onClose={() => setFormOpen(false)} />
            </Modal>
            <UpcomingSales sales={sales} />
        </div>
    );
};

export default SalesManager;
