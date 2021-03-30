import React, { Component } from 'react'

class Private extends Component {
    constructor(props) {
        super(props)
        // this.state= {
        //     user: this.props.user
        // }
    }
    render() {
        const user = this.props.user;
        console.log(user)
        console.log(this.props.user.name)
        return (
            <div>
                <h1>Private</h1>
                <h2>Welcome {user.name}</h2>

            </div>
        )
    }
}


export default Private
