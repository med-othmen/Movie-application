import React from 'react';

import './index.css'
import Searchbar from './Searchbar/Searchbar'
import Addfilm from './addFilm/add'
import Cardmovies from './cardMovie/Cardmovie'

// Movie slist As our Database
var Filmslist = [
  {
    id: 1,
    title: 'TAXI 5',
    description: "Iam in altera philosophiae parte. quae est quaerendi ac disserend.",
    rate: 4,
    cat: 'Sport',
    img: "https://static1.ozap.com/articles/2/54/91/42/@/4580572-bande-annonce-de-taxi-5-200x200-1.jpg"
  }, {
    id: 2,
    title: 'SUPERMAN',
    description: "Intervallata placuerit digesto noxia commodis. ",
    rate: 5,
    cat: 'Action',
    img: "https://static1.purebreak.com/articles/6/10/49/16/@/462330-batman-v-superman-une-version-longue-d-200x200-1.jpg"
  }, {
    id: 3,
    title: 'JUMANII',
    description: "Et difficile idonei in illis cuius neglegentis. ",
    rate: 2,
    cat: 'Action',
    img: "https://i.pinimg.com/236x/99/77/d4/9977d4e4c077d18ea5a885a9c70f5fbc.jpg"
  }, {
    id: 4,
    title: 'SHADOW',
    description: "Sin autem ad adulescentiam perduxissent. ",
    rate: 3,
    cat: 'Drama',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9qfW6ugSiBZWF0Lo4dUdcQfkTKhJc3ViKBwvGos1CAiyfYZHC&usqp=CAU"
  }, {
    id: 5,
    title: 'SPOLIER',
    description: "Sin autem ad adulescentiam perduxissent. ",
    rate: 2,
    cat: 'Drama',
    img: "https://static1.purebreak.com/articles/5/19/46/35/@/715279-tyler-rake-une-suite-pour-le-film-de-n-200x200-2.jpg"
  }, {
    id: 6,
    title: 'ANTI-GANG',
    description: "Sin autem ad adulescentiam perduxissent. ",
    rate: 1,
    cat: 'ACTION',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA9kJd-r-sQ8WsAlC7Fb8EWzfhDX2nMS044w9RfoshxMXZqSpw&usqp=CAU"
  },
  {
    id: 7,
    title: 'KABIR-SINGH',
    description: "Sin autem ad adulescentiam perduxissent. ",
    rate: 1,
    cat: 'DRAMA',
    img: "https://dansvotretempslibre.pw/wp-content/uploads/3239720-200x200.jpg"
  }, {
    id: 8,
    title: 'VEER',
    description: "Sin autem ad adulescentiam perduxissent. ",
    rate: 5,
    cat: 'AVENTURE',
    img: "https://i.pinimg.com/236x/69/4c/8a/694c8a6f29be21bf65ce7362ecf03ced.jpg"
  },
]
var test = [{
  id: 0,
  title: '*-------',
  description: '---',
  rate: '--',
  cat: '--',
  img: "--",
},
]
var filmsfilterbyrate = Filmslist
class Index extends React.Component {
  state = {
    films: Filmslist,
    filmsfilter: Filmslist,
    title: '---',
    description: '',
    rate: '',
    cat: '',
    ratesearch: [1, 2, 3, 4, 5],
    bgcolor: "black",
    indexofRate: 0

  }
  // search by rate
  getrate = (r) => {
    filmsfilterbyrate = Filmslist.filter((el) => el.rate >= r)
    this.setState({ films: filmsfilterbyrate })

    this.setState({ bgcolor: "yellow" })
    this.setState({ indexofRate: r })
    console.log('tab filter par rate ', filmsfilterbyrate)



  }
  // result of input tape and change table films
  search = (e) => {

    let input = e.target.value.toUpperCase()
    this.setState({ title: input })

    let list = filmsfilterbyrate.filter(el => el.title.includes(this.state.title))
    this.setState({ films: list })
    console.log('film', this.state.films)

    if (e.target.value === '')
      this.setState({ films: filmsfilterbyrate })

    if (e.target.value === '') this.setState({ films: Filmslist })
  }
  //check the input title film ADD
  verifAddTitle = (e) => {
    let filter = /^[A-Z]([a-zA-Z]|[0-9]){1,20}$/;



    if (filter.test(e.target.value)) {
      test.title = e.target.value
      e.target.style.border = "4px solid green";
    }
    else

      e.target.style.border = "2px solid red";
  }
  // Check the input of description film ADD
  verifAddDesc = (e) => {
    let filter = /^[A-Z]([a-zA-Z]|[0-9]){10,50}$/;

    if (filter.test(e.target.value)) {
      test.description = e.target.value
      e.target.style.border = "2px solid green";

    }
    else {
      e.target.style.border = "2px solid red";

    }
  }
  //Check the input of Rate film ADD
  verifAddRate = (e) => {

    let filter = /^[0-5]$/;

    if (filter.test(e.target.value)) {
      test.rate = parseInt(e.target.value)
      e.target.style.border = "2px solid green";
    }
    else {
      e.target.style.border = "2px solid red";
    }
  }
  //Check the input of category film ADD
  verifAddCetogrie = (e) => {
    let filter = /^[A-Z]([a-zA-Z]|[0-9]){4,20}$/;

    if (filter.test(e.target.value)) {
      test.cat = e.target.value
      e.target.style.border = "2px solid green";

    }
    else {
      e.target.style.border = "2px solid red";

    }
  }
  //check path pictures
  verifpicture = (e) => {
    test.img = e.target.value
  }
  //Adding the film to movie list 
  addfilm = (e) => {

    if ((test.title === undefined) | (test.description === undefined) | (test.rate === undefined) | (test.cat === undefined))
      alert('svp saisir les données de nouveau film  ')
    else {
      test.id = Filmslist[Filmslist.length - 1].id + 1
      Filmslist.unshift(test);
      alert(e.target.value)
      this.setState({ films: Filmslist });
      test = []

    }



  }
  //remove movie from list
  removefilm = () => {

    Filmslist.splice(0, 1);
    this.setState({ films: Filmslist })

  }
  // reset result of research 
  resetsearch = () => {

    this.setState({ films: Filmslist })
  }
  render() {
    return <div className="Filmlist" >
      <Searchbar state={this.state} search={this.search} getrate={this.getrate} resetsearch={this.resetsearch} />
      <div className="main">

        <div>
          <Cardmovies state={this.state} films={this.state.films} remove={this.removefilm} Filmslist={Filmslist} />

        </div>
        <Addfilm test={test} state={this.state} verifpicture={this.verifpicture} verifAddTitle={this.verifAddTitle} verifAddDesc={this.verifAddDesc} verifAddRate={this.verifAddRate} verifAddCetogrie={this.verifAddCetogrie} addfilm={this.addfilm} />
      </div>

    </div>
  }
}



export default Index;