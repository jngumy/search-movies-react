import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const API_KEY = '1155cfc7';



export class Detail extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact : PropTypes.bool,
            path : PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: {}
    }
    _fetchMovie({id}){
        fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&i='+id)
           .then(res => res.json())
            .then(movie => {
              
               console.log({movie})
               this.setState({movie})

               
            })
    }
    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    _goBack(){
        window.history.back();
    }
    render(){
        const {Title,Year, imdbRating, Rated,Director, Poster, Writer, Production,Actors, Metascore, Plot} = this.state.movie
        return(
          
            <div className="detail">

            <article className="columns is-desktop">
              <div className= "column">

                  <div className="column">
                    
                      <img  src= {Poster} alt="Image"/>
                    
                  </div>

              </div>
             <div className = "column">
                <div className="media-content  ">
                    <div className="content">
                            <p>
                              <h1><strong>{Title}</strong> </h1>  <small> ({Year}) - {Production}</small> 
                              <br/>
                              {Plot}
                            </p>
                            <p><strong>Director:</strong> {Director}</p> 
                            <p><strong>Writer:</strong> {Writer}</p>
                            <p><strong>Cast:</strong> {Actors}</p>
                            
                                  <img className= "image is-24x24" src ="https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg" alt="star"/> 
                                  <p><strong>{imdbRating}</strong>/10 IMDb </p>
                          
                                  <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Rated</span>
                                        <span className="tag is-warning">{Rated}</span>
                                    </div>
                                  </div>
                          </div>
                  </div>
             </div>
              
            </article>
            <Link className = "button is-dark" to = '/'> Back</Link>
          </div>
                
            

        )
    }
}