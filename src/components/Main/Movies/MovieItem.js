import React from "react";
import { Card } from "react-bootstrap";

const MovieItem = ({ title, img, description }) => {
    return (
        <Card className="movie-item">
            <div className="hover-block">
                <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;
