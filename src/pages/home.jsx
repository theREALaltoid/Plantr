import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faAndroid } from "@fortawesome/free-brands-svg-icons";
import "../css/generalStyle.min.css";
import screenshot from "../img/screenshot.png";
class Home extends React.PureComponent {
  componentWillMount() {
    alert(
      "This is a Proof of Concept Site. No User Data will be created if you attempt to register and logins attempts will not work!!! "
    );
  }
  render() {
    return (
      <div>
        <div className="homepageupper">
          <Container>
            <Row>
              <Col md="6">
                <h1 className="pageheading">Planter:</h1>
              </Col>
              <Col md="6">
                <h1>Buy, Sell and, Trade locally grown produce</h1>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="homepagemiddle">
          <Container>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
                <h3 className="pageheading">Download Now: </h3>

                <FontAwesomeIcon icon={faAppStore} size="4x" />
                <FontAwesomeIcon icon={faAndroid} size="4x" />
              </Col>
              <Col md="3"></Col>
            </Row>
          </Container>
        </div>
        <div className="homepagedownload">
          <Container>
            <Row>
              <Col md="6">
                <img src={screenshot} alt="Smiley face" />
              </Col>
              <Col className="homeInfo" md="6">
                <h1>How Plantr Works:</h1>
                <br />
                <h2>Grow Produce?</h2>
                <p>
                  You Can Sell, Donate or Trade extra produce you grow in your
                  neighborhood
                </p>
                <h2>Want Wholesome Homegrown Produce?</h2>
                <p>
                  Use our map to find growers near you. You can also use our
                  search system narrow your search{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
