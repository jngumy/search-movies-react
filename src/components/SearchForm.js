import React, {Component} from 'react'

const API_KEY = '1155cfc7';

export class  SearchForm extends Component {
    
    state = {
        inputMovie : ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value});
    }
    
    _handleSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state
        fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+inputMovie)
           .then(res => res.json())
            .then(results => {
              
                const {Search = [], totalResults = '0'} = results   //toma por valores por defecto [] y '0'
                
                this.props.onResults(Search)
               
            })
    }

  
    render(){
        return (
        <div className= "container">
            <form onSubmit = {this._handleSubmit}>
            <div className="field is-grouped ">
                <p className="control is-expanded ">
                  <input 
               
                    className="input has-text-dark   "
                    onChange = {this._handleChange}
                    type="text" 
                    placeholder="Movies to search.." />
                </p>
                 <p className="control">
                   <button className="button is-dark ">
                        Search
                  </button>
                </p>
            </div>
        </form>
        </div>
        )
    }
}
