import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/addCabin';

function Cabins() {
  //const [showForm, setShowForm] = useState(false);

  // useEffect(function () {
  //   getCabins().then(data => console.log('data===>', data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>

      <Row>
        <CabinTable />
        {/* <Button onClick={() => setShowForm(show => !show)}>Add new cabin</Button>  */}
        <div>
          <AddCabin />
        </div>
      </Row>
    </>
  );
}

export default Cabins;
