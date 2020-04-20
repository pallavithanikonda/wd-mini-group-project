import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Quaranchat for different Nordic Countries</h4>
                    <p>Quranchat is an online forum to help people communicate effectively
                        during life changing events such as quarantines, recessions and
                        unprecedented events that make people stay home and wear out.
                        We allow our users to create, delete, view posts and comments.
                        Here we encourage users to share ideas, thoughts, inspirations to kill time and fight boredom.</p>
                    <ul>
                        <li><a href="https://spring.io/projects/spring-boot">Sweden</a></li>
                        <li><a href="https://www.postgresql.org">Finland</a></li>
                        <li><a href="https://reactjs.org">Norway</a></li>
                        <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">Denmark</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;