import React, { useState } from "react";
import {
    Container,
    Navbar,
    Button,
    Form,
    FormControl,
    Col,
    Modal,
} from "react-bootstrap";
import { useCookies } from "react-cookie";

import Logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
    const [show, setShow] = useState(false);
    const [cookie, setCookie] = useCookies(["name", "password"]);
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(cookie.name !== "");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLoginClick = (e) => {
        e.preventDefault();
        if (checked && loginPassword.current.value !== "")
            cookieOnChange(
                loginName.current.value,
                loginPassword.current.value
            );
        setName(loginName.current.value);
        setIsLoggedIn({ isLoggedIn: true });
        if (loginPassword.current.value !== "") handleClose();
        else alert("Введите пароль.");
    };
    const handleLogoutClick = () => {
        cookieOnChange("", "");
        setIsLoggedIn(false);
    };

    const handleCheckbox = () => {
        if (checked) setChecked(false);
        else setChecked(true);
    };

    const cookieOnChange = (newName, newPassword) => {
        setName("");
        setCookie("name", newName, { path: "/" });
        setCookie("password", newPassword, { path: "/" });
    };

    const handleLoginNameClick = () => {
        const changeName = document.getElementById("login-name");
        const inputChangeName = document.getElementById("login-name-input");
        changeName.style.display = "none";
        inputChangeName.style.display = "inline-block";
        inputChangeName.focus();
    };

    const handleLoginNameBlur = () => {
        const changeName = document.getElementById("login-name");
        const inputChangeName = document.getElementById("login-name-input");
        if (checked) cookieOnChange(inputChangeName.value, cookie.password);
        setName(inputChangeName.value);
        changeName.style.display = "inline-block";
        inputChangeName.style.display = "none";
    };

    let loginName = React.createRef();
    let loginPassword = React.createRef();

    return (
        <header>
            <Container>
                <Navbar expand="md">
                    <Col sm>
                        <Navbar.Brand href="#">
                            <img
                                alt="Видеосервис"
                                src={Logo}
                                width="36"
                                height="36"
                                className="d-inline-block align-top"
                            />{" "}
                            Видеосервис
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Col sm={9}>
                            <Form inline className="text-center">
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="search-input mr-sm-2"
                                />
                                <Button variant="link" className="link-btn">
                                    Найти
                                </Button>
                            </Form>
                        </Col>
                        {isLoggedIn ? (
                            <Col sm="auto">
                                <span
                                    className="login-name"
                                    id="login-name"
                                    onClick={handleLoginNameClick}
                                >
                                    {cookie.name !== "" ? cookie.name : name}
                                </span>
                                <input
                                    type="text"
                                    defaultValue={
                                        cookie.name !== "" ? cookie.name : name
                                    }
                                    id="login-name-input"
                                    className="login-name-input"
                                    ref={loginName}
                                    onBlur={handleLoginNameBlur}
                                />
                                <Button
                                    variant="link"
                                    className="link-btn"
                                    onClick={handleLogoutClick}
                                >
                                    Выйти
                                </Button>
                            </Col>
                        ) : (
                            <Col sm={4}>
                                <Button
                                    variant="danger"
                                    className="login-btn"
                                    onClick={handleShow}
                                >
                                    Войти
                                </Button>
                            </Col>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Modal show={show} size="sm" onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleLoginClick}>
                    <Modal.Body>
                        <input
                            type="text"
                            placeholder="Логин"
                            name="modal-name"
                            className="modal-name"
                            ref={loginName}
                        />
                        <br />
                        <input
                            type="password"
                            name="modal-password"
                            placeholder="Пароль"
                            className="modal-password"
                            ref={loginPassword}
                        />
                        <br />
                        <label htmlFor="remember" className="remember">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                value="yes"
                                className="remember-input"
                                onChange={handleCheckbox}
                            />
                            <span className="checkmark"></span>
                            Запомнить
                        </label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            className="login-btn"
                            type="submit"
                        >
                            Войти
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </header>
    );
};

export default Header;
