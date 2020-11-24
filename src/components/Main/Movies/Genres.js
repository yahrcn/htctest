import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../main.css";
import { genreList } from "./genreList";

const Genres = () => {
    return (
        <section className="index-genres">
            <Container>
                <h3 className="section-title">Жанры</h3>
                <Row>
                    {genreList.map((item, id) => (
                        <Col
                            sm
                            className="genre-item"
                            key={id}
                            style={{
                                background: `linear-gradient(
                                    127.83deg, ${item.colorOne} 8.44%, ${item.colorTwo} 91.36%
                                )`,
                            }}
                        >
                            <p className="genre-icon">{item.img}</p>
                            <p className="genre-title">{item.title}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Genres;
