import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import './Elements.css';


class Elements extends Component {



    render() {
        return (
            <div>
                <br />
                <h2>Elements</h2>
                <div className='attributesBox'>
                    <h2>Attributes</h2>
                    <p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>
                    {/* 54J */}
                    <a href="https://www.linkedin.com/in/spencerlallen/">This is a link to my LinkedIn</a>
                </div>
                {/* 54C-3 */}
                <div className='blocksBox'>
                    <h2>blocks</h2>
                    {/* 54C-1 */}
                    {/* 54C-2 */}
                    <p>This is an inline span <span className='span'>Hello World</span> element inside a paragraph.</p>
                    <p>The SPAN element is an inline element, and will not start on a new line and only takes up as much width as necessary.</p>
                </div>
                <div className='contentBox'>
                    <h2>content</h2>
                    {/* 54E-1 */}
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        {/* 54E-2 */}
                        <img className='images' src='https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' alt='' />
                        <li>Milk</li>
                        <img className='images' src='https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' />
                    </ul>
                </div>
                <div className='headersBox'>
                    {/* 54F-2 */}
                    <h2>h2 header</h2>
                    {/* 54F-1 */}
                    <h1>h1 header</h1>
                </div>
                <div className='linkBox'>
                    <h2>link</h2>
                    {/* <Link to='https://www.linkedin.com/in/spencerlallen/'>
                        This is a link tag to my LinkedIn
                    </Link> */}
                </div>
                <div className='sectionsBox'>
                    <h2>sections</h2>
                    {/* 54D-2 */}
                    <section>
                        <h1>This is inside a section tag</h1>
                    </section>
                    {/* 54D-1 */}
                    <article>
                        <h1>This is inside an article tag</h1>
                    </article>
                    {/* 54D-3 */}
                    <footer>
                        <p>This is inside a Footer tag</p>
                    </footer>
                </div>
                <div className='selfClosingBox'>
                    <h2>self closing</h2>
                    {/* 54G */}
                    <img className='selfClosingTag' src='https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' />
                </div>

                <div className='skeletonBox'>
                    <h2>skeleton</h2>
                    {/* 54I - 1 */}
                    <html>
                    {/* 54I-2 */}
                        <head>
                            <title>Page Title</title>
                        </head>
                        {/* 54I-3 */}
                        <body>

                            <h1>My First Heading</h1>
                            <p>My first paragraph.</p>

                        </body>
                    </html>
                </div>
                <div className='scriptBox'>
                    <h2>script</h2>
                    {/* 61C	 */}
                    <script>This is inside a script tag</script>
                </div>

            </div>
        )
    };
};

export default Elements;