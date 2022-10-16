import React from "react";
import { Col,  Card, CardBody,   
    } from 'reactstrap';


let TopareaComponent = () => {

    return(
        <Col sm="12" lg="12" className="mb-2">
        <Card>
        <CardBody>
          <div className="d-flex">
            <div className={`circle-box lg-box d-inline-block`}>                    
            </div>
            <div className="ms-3">
              <h3 className="mb-0 font-weight-bold">Coming soon...</h3>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    );
}
export default TopareaComponent;