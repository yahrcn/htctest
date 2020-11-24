import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Movies from "./Movies/Movies";
import Genres from "./Movies/Genres";
import Channels from "./Channels/Channels";

import "./main.css";

const Main = () => {
    return (
        <main>
            <Container>
                <Tabs
                    defaultActiveKey="index-movies"
                    id="index-tabs"
                    className="justify-content-center"
                >
                    <Tab eventKey="index-movies" title="Фильмы">
                        <Movies />
                        <Genres />
                    </Tab>
                    <Tab eventKey="index-channels" title="Телеканалы">
                        <Channels />
                    </Tab>
                </Tabs>
            </Container>
        </main>
    );
};

export default Main;
