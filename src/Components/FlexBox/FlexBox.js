import React, { Component } from 'react';
import './FlexBox.css';


class FlexBox extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>I pretty much own FlexBox</h2>
                <div className='flexBoxContainer'>
                    <div className='boxes'>
                        <h1>Hi, </h1>
                    </div>
                    <div className='boxes'>
                        <h1>How </h1>
                    </div>
                    <div className='boxes'>
                        <h1>Are </h1>
                    </div>
                    <div className='boxes'>
                        <h1>You?</h1>
                    </div>
                </div>
                
            </div>
        )
    };
};

export default FlexBox;