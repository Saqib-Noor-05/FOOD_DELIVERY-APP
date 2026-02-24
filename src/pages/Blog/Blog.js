import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/PagesStyle.css";

const Blog = () => {
    return (
        <Layout>
            <section className="blog_page pb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2>Blog & News</h2>
                            <p>Stay updated with our latest news, recipes, and burger tips!</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8} className="mx-auto">
                            <article className="blog_post mb-4">
                                <h4>How to Make Perfect Burgers at Home</h4>
                                <p className="text-muted">Posted on Feb 23, 2026</p>
                                <p>
                                    Learn the secrets to making restaurant-quality burgers in your own kitchen.
                                    From selecting the right beef to cooking techniques, we cover it all.
                                </p>
                            </article>

                            <article className="blog_post mb-4">
                                <h4>Top 5 Burger Toppings of 2026</h4>
                                <p className="text-muted">Posted on Feb 20, 2026</p>
                                <p>
                                    Discover the trending burger toppings that are taking the food world by storm.
                                    From gourmet sauces to unique greens, find your favorite combinations.
                                </p>
                            </article>

                            <article className="blog_post">
                                <h4>The History of Burgers</h4>
                                <p className="text-muted">Posted on Feb 15, 2026</p>
                                <p>
                                    Dive into the fascinating history of burgers and how they became one of the
                                    world's most beloved foods.
                                </p>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export default Blog;
