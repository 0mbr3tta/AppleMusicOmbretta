
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function BarraPlay() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center position-fixed bottom-0 start-0 end-0 bg-dark p-3">
        <Button className="me-3 btn-custom-bg border-0">
          <i className="bi bi-play-circle"></i> 
        </Button>
        <ProgressBar className="flex-grow-1" now={50} />
        <Button  className="ms-3 btn-custom-bg border-0">
          <i className="bi bi-pause-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default BarraPlay;