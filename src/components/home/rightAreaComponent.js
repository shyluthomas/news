import React from "react";
import { Col,  Card, CardBody,   
    } from 'reactstrap';


let RightAreaComponent = () => {

    return(
      <Col sm="4" lg="4" >
      <Card>
        <CardBody>
          <div className="d-flex" style={{height:900}}>
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
export default RightAreaComponent;