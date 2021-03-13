import React, { Component } from 'react';
import axios from 'axios';

export default class Onecar extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberPlate: this.props.car.numberPlate,
            carBrand: this.props.car.carBrand,
            imageUrl: this.props.car.imageUrl,
        };
        this.handleChange = this.handleChange.bind(this);
        this.editCar = this.editCar.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
        console.log(this.state);
    }


    //Update a Car
    editCar(ID){
        axios.put(`/api/cars/${ID}`, this.state)
        .then(()=>{
            this.props.changeView('cars', this.state)
            this.props.fetch()
        })
    }
    render() {

        return (
            <div>
                <img src={this.state.imageUrl}/>
                <input  className='myInput' type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                <h3>NumberPlate: {this.state.numberPlate}</h3>
                <input  className='myInput' type="text" name="numberPlate" value={this.state.numberPlate} onChange={this.handleChange}/>
                <h3>Car Brand: {this.state.carBrand}</h3>
                <input  className='myInput' type="text" name="carBrand" value={this.state.carBrand} onChange={this.handleChange}/>
                <button className="bd" onClick={()=>{this.editCar(this.props.car.ID)}} >Edit Car</button>           
            </div>
        )
    }
}
