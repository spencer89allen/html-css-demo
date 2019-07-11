import React, { Component } from 'react';
import './Position.css';


class Position extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Positioning elements on the page with relative, absolute, and fixed like you wouldn't believe</h2>
                <div className='positionBox'>
                    <h3 className='relative'>relative</h3>
                    <h3 className='absolute'>absolute</h3>
                    <h3 className='fixed'>fixed</h3>
                </div>
            </div>
        )
    };
};

export default Position;