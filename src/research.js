import React, {Component} from "react";
import "./styles.css";
const movie = [
  "Joker" , "Superman" , "Coco" , "Jojo" , "Spiderman" , "Zoro" , "Casa del Pappel"
]

export default class App extends Component {
  state={
    Caractere: '',
    movies : movie
  }
  SearchBar =(e)=>{
     this.setState({Caractere: e.target.value})
  }
   SearchBtn=()=>{
      let movies = this.state.movies
      let k = this.state.Caractere
      let regex = /k/

   movies = movies.filter(el => el.includes(k))  
  this.setState({movies:movies})
  console.log(k) 
 
  }
  render() {
    return (
      <div className="App">
        <h2>Simplon Movies</h2> 
        <input type="text"  onChange={this.SearchBar}/>
        <button onClick={this.SearchBtn}>Search</button>
          {this.state.movies.map(el => <div>{el}</div>)}
        
          
            </div>
    );
  }
}
