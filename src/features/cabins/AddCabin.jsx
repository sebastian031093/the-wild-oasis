import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import { useState } from 'react';

function AddCabin() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal(show => !show)}>Show modal</Button>
      {/* {showForm && <CreateCabinForm />} */}
      {showModal && (
        <Modal onClose={() => setShowModal(show => !show)}>
          <CreateCabinForm onCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
