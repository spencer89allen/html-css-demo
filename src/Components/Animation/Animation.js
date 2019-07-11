import React, { Component } from 'react';
import './Animation.css';


class Animations extends Component {



    render() {
        return (
            <div>
            <br />
                <h2>Yeah, I can utilize keyframes, transition, and transform properties to do CSS animations</h2>
                <body className='animations'>
                    <div className='keyFrame'>
                        <p>Check Me Out!</p>
                    </div>
                    <div className='transition'>
                        <p>Hover Over Me!</p>
                    </div>
                    <div className='transform'>
                        Yo!
                    </div>
                </body>
            </div>
        )
    };
};

export default Animations;