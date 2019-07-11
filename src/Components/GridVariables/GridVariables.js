import React, { Component } from 'react';
import './GridVariables.css';


class GridVariables extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Implementing CSS variables and CSS grid in modern browsers cuz I've got nothing else to do</h2>
                <div class="grid-container">
                    <div class="grid-item1">1</div>
                    <div class="grid-item2">2</div>
                    <div class="grid-item1">3</div>
                    <div class="grid-item2">4</div>
                    <div class="grid-item1">5</div>
                    <div class="grid-item2">6</div>
                    <div class="grid-item1">7</div>
                    <div class="grid-item2">8</div>
                    <div class="grid-item1">9</div>
                </div>
            </div>
        )
    };
};

export default GridVariables;