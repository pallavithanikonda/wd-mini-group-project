import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title" style={{ color: 'Green',fontWeight: 'bold' }}>Quranchat </h2>
                    <p><b>Quranchat is an online forum to help people communicate effectively during life changing events such
                    as quarantines, recessions and unprecedented events that make people stay home and wear out.
                    We allow our users to create, delete, view posts and comments. Here we encourage users to share ideas,
                    thoughts, inspirations to kill time and fight boredom:</b></p>
                    <p><b>Currently the world is suffering with Corona here is more information about Corona and important links: </b></p>
                    <ul>
                        <li><a href="https://www.who.int/">World Health Organization: WHO</a></li>
                        <li><a href="https://www.worldometers.info/coronavirus/">Corona Status</a></li>
                        <li><a href="https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/">Swedish public health agency</a></li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;