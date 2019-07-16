import React, { Component } from 'react';
import './Selectors.css';


class Selectors extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Using id, class, descendant, child, and addition selectors in CSS to style elements because I have too</h2>
                <div className='selectorsBox'>
                    <div className='content'>
                        <div id="identified">This div has a special ID on it!</div>
                        <div>
                            <ul>
                                <li>
                                    <div>Item 1</div>
                                    <ul>
                                        <li>Subitem A</li>
                                        <li>Subitem B</li>
                                    </ul>
                                </li>
                                <li>
                                    <div>Item 2</div>
                                    <ul>
                                        <li>Subitem A</li>
                                        <li>Subitem B</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>Span #1, in the div.
                            <span>Span #2, in the span that's in the div.</span>
                            </span>
                        </div>
                        <span>Span #3, not in the div at all.</span>
                        <div>
                            <ul>
                                <li>One</li>
                                <li>Two!</li>
                                <li>Three</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Selectors;