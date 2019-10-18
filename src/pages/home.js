import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import "../css/generalStyle.min.css";

class Home extends Component {
  render() {
    return (<div>

      <div className="homepageupper ">
        <Container>
          <Row>

            <Col md="6">
              <h1 className="title">Planter:</h1>
            </Col>
            <Col md="6">
              <h1>
                Buy, Sell and, Trade locally grown produce</h1>

            </Col>
          </Row>
        </Container>
      </div>

      <div className="homepagemiddle">
        <Container>

          <h3>Download Now:
          </h3>

        </Container>
      </div>

    </div>)

  }
}

export default Home;
