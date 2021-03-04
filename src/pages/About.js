import React from 'react';
import Review from '../components/Review';

const About = () => {
    return (
        <main>
            <h1 className="title">Coding Books for Kids</h1>
            <section className="section-container">
                <div className="card-about">
                    <h2>We read. We code. We suggest.</h2>
                    <p className="welcome">Welcome to our coding book club!</p>
                    <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Review />
                </div>
            </section>
        </main>
    )
};

export default About;