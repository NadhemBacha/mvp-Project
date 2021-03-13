import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AddCar from './components/AddCar.jsx'
import Cars from './components/Cars.jsx';
import OneCar from './components/OneCar.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'cars',
      data: [],
      car: {},
      mot:''
    }
    this.fetch = this.fetch.bind(this);
    this.changeView = this.changeView.bind(this);
    this.searching = this.searching.bind(this)
  }
  
  // Get all the data
  fetch(){
    axios.get('/api/cars')
    .then((response)=>{
      this.setState({ data: response.data })
      console.log(this.state.data);
    })
  }
  searching(mot){
    this.setState({mot:mot})
  }
  componentDidMount() {
    this.fetch()
  }
  
  
// Display each component
  changeView(option,car) {
    this.setState({
      view: option,
      car: car
    });
  }

  // render each component 
  renderView() {
    const {view} = this.state;

    if (view === 'cars') {
      return <Cars data={this.state.data} changeView={this.changeView} fetch={this.fetch} mot={this.state.mot}/>
    } else if(view === 'add car' ){
      return <AddCar handleClick={() => this.changeView('add car')}  changeView={this.changeView} fetch={this.fetch}/>
    } else if (view === 'one car') {
      return <OneCar car={this.state.car} fetch={this.fetch} changeView={this.changeView}/>
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('cars')}>
            Rental Cars
          </span>
          <span>
          <Search data={this.state.data} searching={this.searching}/>  
          </span>
          <span className={this.state.view === 'cars'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('cars')}>
            All Cars
          </span>
          <span className="nav-selected"
          onClick={() => this.changeView('add car')}>
            Add Car
          </span>        
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

