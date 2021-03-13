import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div>
                <form>
                    <input name="numberPlate" type="text" action='search' placeholder='Search...' className="sear" onChange={(e)=>this.props.searching(e.target.value)} />
                    <button onClick={() => {this.props.searching(this.state.numberPlate)}}>Search</button>
                </form>
            </div>
        )
    }
}
