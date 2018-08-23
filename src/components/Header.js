import React from 'react'

class Header extends React.Component {

    render(){
        return(
        <div className="Header row">
            <div className="col-md-8 col-sm-12 offset-md-2">
                <h1 id="title">NeverLate</h1>
            </div>
        </div>
        )
    }
}


export default Header