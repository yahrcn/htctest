import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import MovieItem from "./MovieItem";

import "../main.css";
import { movieList } from "./movieList";

const IndexMovies = () => {
    return (
        <section className="index-movies">
            <Container>
                <h3 className="section-title">🔥Новинки</h3>
                <CardGroup>
                    {movieList.map((item, id) => (
                        <MovieItem
                            title={item.title}
                            img={item.img}
                            description={item.description}
                            key={id}
                        />
                    ))}
                </CardGroup>
            </Container>
        </section>
    );
};

export default IndexMovies;
