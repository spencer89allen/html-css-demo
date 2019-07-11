import React, { Component } from 'react';
import './FontBackground.css';


class FontBackground extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Using font and background properties in CSS like its nobody's business</h2>
                <div className='Backgroundbox'>
                    <div className='fontWeightText'>
                        Spicy jalapeno bacon ipsum dolor amet turkey esse id ipsum kevin bacon.
                    </div>
                </div>
                <br />
                <div className='Backgroundbox'>
                    <div className='fontSizeText'>
                        Spicy jalapeno bacon ipsum dolor amet turkey esse id ipsum kevin bacon.
                    </div>
                </div>
                <br />
                <div className='BackgroundImage'>
                    <div className='BackgroundImageText'>
                        Spicy jalapeno bacon ipsum dolor amet turkey esse id ipsum kevin bacon.
                    </div>
                </div>
            </div>
        )
    };
};

export default FontBackground;