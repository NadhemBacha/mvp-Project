import axios from 'axios';
import React, { Component } from 'react'

export default class Cars extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
        this.deleteCar = this.deleteCar.bind(this)
      }

// Delete car by it's ID
    deleteCar(ID){
        axios.delete(`/api/cars/${ID}` )
        .then(() => {
            this.props.fetch()
        })
    }
    render() {
        console.log(this.props.mot)
        return (
            <div>
            {this.props.data.map((car,index)=>{
                if(car.carBrand.includes(this.props.mot)){
                    return (
                        <div key={index}>
                                <div>
                                    <h3>NumberPlate: {car.numberPlate}</h3>
                                    <h3>Car Brand: {car.carBrand}</h3>
                                    <img className="image" src={car.imageUrl} onClick={()=>{this.props.changeView('one car', car)}}/>
                                    <button style={{width:"38rem" , height:"3rem", "background-color": "#8a0f06", "font-weight": "bold", "font-size": "18px", "color": "white" }} onClick={()=>{this.deleteCar(car.ID)}}>DELETE</button>   
                                </div>
                        </div>
                    )
                }
                
            })}
            </div>
        )
    }
}
