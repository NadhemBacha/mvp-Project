import axios from 'axios';
import React, { Component } from 'react';

export default class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            numberPlate: "",
            carBrand: "",
            imageUrl: "",
        
        }
        this.addCar = this.addCar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Post a new car
    addCar(event){
        event.preventDefault();
        axios.post('/api/cars', this.state)
        .then(() => {
            this.props.changeView("cars", this.state) 
            this.props.fetch()
        })
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
        console.log(this.state);
    }

    
    render() {
        return (
            <div>
                <form className='myInput'>
                    <label>NumberPlate
                    </label>
                    <br />
                    <input className='myInput' type="text" name="numberPlate" onChange={this.handleChange}/> 
                    <br />
                    <label>Car Brand
                    <br />
                    <input className='myInput' type="text" name="carBrand" onChange={this.handleChange}/>
                    </label>
                    <br /> 
                    <label>ImageUrl
                    <br />
                    <input className='myInput' type="text" name="imageUrl" onChange={this.handleChange}/>
                    </label>
                    <br />
                    <button className="addbtn" onClick={(event)=> {this.addCar(event)}}>Add Car</button>   
                </form>
            </div>
        )
    }
}
