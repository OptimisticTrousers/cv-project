import React from 'react'

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="header">
                <div className="introduction">
                    <p>I am</p>
                    <h1>Tom Newton</h1>
                    <p>A Digital Designer based in London, England.</p>
                </div>
            </div>
        )
    }

}

export default Header