import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import "../main.css";

const ChannelsItem = ({ title, logo, schedule }) => {
    return (
        <Container>
            <Card className="channels-item">
                <Row>
                    <Col sm={4} className="text-center">
                        <img
                            className="channel-logo"
                            src={logo}
                            alt="Логотип канала"
                        />
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <h5 className="card-title">{title}</h5>
                            <div className="card-text">
                                <Row>
                                    <Col className="channel-schedule">
                                        {schedule.map((item, id) => (
                                            <p key={id}>
                                                {13 + id + ":00"}
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                {item}
                                            </p>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ChannelsItem;
