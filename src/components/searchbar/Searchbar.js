import React, { Component } from 'react';
import data from "../../../data"; 
import HorseCard from '../horseCard/HorseCard';

class SearchBar extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      position:'relative',
      height:'35px',
      width:'300px',
      marginTop:'5vh',
      marginBottom:'10vh',
      padding: "5px"
    }
    const items = data.Horses.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.breed.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map((data, i) => {
      console.log(data.name);
      return(
      <div style={styleInfo} key={i}>
            <span>{data.name}</span>
      </div>
      )
    })

    return (
      <div>
        <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      </div>
    )
  }
}

export default SearchBar;