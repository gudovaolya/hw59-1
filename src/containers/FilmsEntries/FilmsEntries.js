import React, {Component, Fragment} from 'react';
import './FilmsEntries.css';
import Film from "../../components/Film/Film";


class FilmsEntries extends Component {

   state = {
      films: []
   };

   changeFilmName = (event, id) => {
       const index = this.state.films.findIndex(film => film.id === id);
       const currentFilm = this.state.films[index];
       currentFilm.name = event.target.value;

       const films = [...this.state.films];
       films[index] = currentFilm;

       const filmsInString = JSON.stringify(films);
       localStorage.setItem('filmsList', filmsInString);

       this.setState({films});
   };

   removeFilmFromList = (id) => {
       const index = this.state.films.findIndex(film => film.id === id);
       const currentFilm = this.state.films[index];

       const films = [...this.state.films];
       films.splice(currentFilm, 1);

       const filmsInString = JSON.stringify(films);
       localStorage.setItem('filmsList', filmsInString);

       this.setState({films});
   };

   addFilmToList = () => {
        const newFilm = {};
        newFilm.name = document.getElementById('filmField').value;
        newFilm.id = 'film' + Math.random().toString(36).substr(2, 9);

        const films = [...this.state.films];
        films.push(newFilm);

        const filmsInString = JSON.stringify(films);
        localStorage.setItem('filmsList', filmsInString);

        this.setState({films});
   };

    componentWillMount() {
        let films = [...this.state.films];
        films = JSON.parse(localStorage.getItem('filmsList')) || [];
        this.setState({films});
    };


    renderFilmsBlock = () => {

       if (this.state.films.length > 0) {
           return (
               <Fragment>
                   <h4>To watch list:</h4>
                   {this.state.films.map(film => (
                       <Film
                           key={film.id}
                           id={film.id}
                           name={film.name}
                           change={this.changeFilmName}
                           remove={this.removeFilmFromList}
                       />
                   ))}
               </Fragment>
           )
       } else {
           return <p>There are no movies in the list!</p>
       }
   };




   render () {

       return(
           <Fragment>
               <div className="form-block">
                   <input className="field" type="text" id="filmField"/>
                   <button className="btn" onClick={this.addFilmToList}>Add</button>
               </div>
               <div className="films-block">
                   {this.renderFilmsBlock()}
               </div>
           </Fragment>
       )
   }
};

export default FilmsEntries;