import React, { Component } from 'react';
import './CssFloatDisplay.css';


class FloatDisplay extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Owning Float and Display Properties</h2>
                <div className='box'>
                    <img className='img' src='https://images.unsplash.com/photo-1562337683-f309a8d2da9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' alt=''></img>
                    <div className='text'>
                        Spicy jalapeno bacon ipsum dolor amet turkey esse id ipsum kevin bacon.
                    </div>
                </div>
            </div>
        )
    };
};

export default FloatDisplay;