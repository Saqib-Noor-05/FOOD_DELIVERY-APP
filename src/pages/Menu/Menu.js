import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import Cards from "../../components/Layouts/Cards";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import "../../styles/MenuStyle.css";
import "../../styles/PagesStyle.css";

const allMenuItems = [
    {
        id: "0001",
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 139,
        image: Image1,
    },
    {
        id: "0002",
        title: "Ultimate Bacon",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 4.5,
        price: 115,
        image: Image2,
    },
    {
        id: "0003",
        title: "Black Sheep",
        paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
        rating: 4,
        price: 69,
        image: Image3,
    },
    {
        id: "0004",
        title: "Vegan Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 3.5,
        price: 119,
        image: Image4,
    },
    {
        id: "0005",
        title: "Double Burger",
        paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
        rating: 3.0,
        price: 59,
        image: Image5,
    },
    {
        id: "0006",
        title: "Turkey Burger",
        paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 3,
        price: 79,
        image: Image6,
    },
    {
        id: "0007",
        title: "Smokey House",
        paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 2.5,
        price: 99,
        image: Image7,
    },
    {
        id: "0008",
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 2.0,
        price: 89,
        image: Image8,
    },
];

const renderRatingIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
        } else if (rating > 0 && rating < 1) {
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--;
        } else {
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
        }
    }
    return stars;
};

const Menu = () => {
    const [filteredItems, setFilteredItems] = useState(allMenuItems);

    const handleFilter = (filter) => {
        if (filter === "all") {
            setFilteredItems(allMenuItems);
        } else if (filter === "popular") {
            setFilteredItems(allMenuItems.filter((item) => item.rating >= 4));
        } else if (filter === "budget") {
            setFilteredItems(allMenuItems.filter((item) => item.price < 80));
        }
    };

    return (
        <Layout>
            <section className="menu_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
                            <h2>OUR COMPLETE MENU</h2>

                        </Col>
                    </Row>

                    <Row className="mb-5 justify-content-center">
                        <Col lg="auto" className="mb-3">
                            <button
                                onClick={() => handleFilter("all")}
                                className="filter_btn active"
                            >
                                All Menu
                            </button>
                        </Col>
                        <Col lg="auto" className="mb-3">
                            <button
                                onClick={() => handleFilter("popular")}
                                className="filter_btn"
                            >
                                Popular
                            </button>
                        </Col>
                        <Col lg="auto" className="mb-3">
                            <button
                                onClick={() => handleFilter("budget")}
                                className="filter_btn"
                            >
                                Budget Friendly
                            </button>
                        </Col>
                    </Row>

                    <Row>
                        {filteredItems.map((item) => (
                            <Cards
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                rating={item.rating}
                                title={item.title}
                                paragraph={item.paragraph}
                                price={item.price}
                                renderRatingIcons={renderRatingIcons}
                            />
                        ))}
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export default Menu;
