import React ,{Component} from 'react'
import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import {MoviesList} from '../components/MoviesList'
import {Link} from 'react-router-dom'

import '../App.css';

var busqueda = []
var usedSearch = false

export class Home extends Component{
    state = {  usedSearch  ,results : busqueda}

  _handleResults = (results) =>{
    console.log(results)
    usedSearch =true
    this.setState({results, usedSearch})
    busqueda = results;
    
  }

_renderResults(){
  return this.state.results.length === 0
    ? <p style = {{padding:40, fontSize:20}}>Sorry! :( results not found</p>
    : <div className= "container has-background-light is-bold">
        
          <MoviesList movies = {this.state.results} />
     </div>
   
    
}


    render(){
        return(
            <div className= 'App' >
                  <section class="hero is-dark is-medium  is-bold">
                    <div class="hero-body ">
                      <div class="container">
                       
                           <Title>Search Movies</Title>
                      
                        
                        
                        <h2 class="subtitle has-text-warning">
                          IMDb api - JNG
                        </h2>
                      </div>
                      <div className = 'container'>
                        <SearchForm onResults = {this._handleResults} />
                      </div>
                    </div>
                  </section>
                   
                
                                      
                        {this.state.usedSearch
                      ? this._renderResults()
                        : <p style ={{padding:40, fontSize:20}}>Use the form to search a movie</p>}

              
      
                
            </div>
        )
    }
}