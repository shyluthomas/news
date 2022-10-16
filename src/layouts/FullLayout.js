import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../assets/scss/style.scss';

const FullLayout = () => {
  return (
    <main>
      <div className={`pageWrapper d-md-block d-lg-flex`}>  
        {/********Content Area**********/}
        <div className={`contentArea`}>
          {/********header**********/}       
          <Container fluid className="p-2">
              <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
