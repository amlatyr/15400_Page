import React from 'react';


export default class Header extends React.Component {
    render() {
        const style = {
            "font-size" : "30px"
        };

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <a style={style} className="navbar-brand" href="index.html">15400 Project</a>
                </nav>
                <div className="header_image">
                    <img src="image.jpg" alt="Data Center" />
                    <div className="image_text">
                        <h1>A Better Caching System for the EC-Cache</h1>
                        <p>Amadou Latyr Ngom</p>
                    </div>
                </div>
            </div>
        )
    }
}
