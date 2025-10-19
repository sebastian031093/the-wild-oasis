import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
/* import { ModalProvider } from '../../context/ModalContex'; */

function AddCabin() {
  return (
    /*  <ModalProvider> */
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window opens="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window opens="table">
        <CabinTable />
      </Modal.Window> */}
    </Modal>

    /* </ModalProvider> */
  );
}

// function AddCabin() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowModal(show => !show)}>Show modal</Button>
//       {/* {showForm && <CreateCabinForm />} */}
//       {showModal && (
//         <Modal onClose={() => setShowModal(show => !show)}>
//           <CreateCabinForm onCloseModal={() => setShowModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
