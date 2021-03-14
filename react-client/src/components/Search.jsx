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
            
                </form>
            </div>
        )
    }
}
