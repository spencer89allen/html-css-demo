import React, { Component } from 'react';
import './MediaQueries.css';


class MediaQueries extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Check out my use media queries to create responsive web pages</h2>
                <div class="row">
                    <div class="column" >
                        <h2>Column 1</h2>
                    </div>
                    <div class="column" >
                        <h2>Column 2</h2>
                    </div>
                    <div class="column" >
                        <h2>Column 3</h2>
                    </div>
                    <div class="column" >
                        <h2>Column 4</h2>
                    </div>
                </div>
            </div>
        )
    };
};

export default MediaQueries;