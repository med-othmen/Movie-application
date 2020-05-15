import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./cardMovie.css";
import { FaStar, FaHeart, FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import Modalfavoritelist from "../modals/Modalfavoritelist";
import Modalviewfilm from '../modals/Modalviewfilm'
import Modalupdate from '../modals/Modalupdatefilm'
var movieshow = [{
  title: '',
  description: '',
  rate: '',
  cat: '',
  img: "",
}]
const favesList = [];
class Cardmovies extends React.Component {
  state = {
    show: false,
    showfilm: false,
    showupdate: false,
    indexOffilmtoupdate: '',
    allmovies: this.props.Filmslist,
    favoritecount: 0,
    Moviesid: [],
  };
  // show modal for favorite
  showModal = () => {
    this.setState({ show: true });

  };
  // Hide modal for favorite 
  hideModal = () => {
    this.setState({ show: false });
  };

  //show modal for update film
  showModalupdate = () => {
    this.setState({ showupdate: true });
    console.log('show')
  };
  // Hide modal for update film
  hideModalupdate = () => {
    this.setState({ showupdate: false });
    console.log('hide')
  };
  // Show modal for view film
  showModalfilm = () => {
    this.setState({ showfilm: true });

  };
  // Hide modal fo view film 
  hideModalfilm = () => {
    this.setState({ showfilm: false });
  };
  // add movie to favorite list and incriment shopping cart number
  favorite = (id) => {
    var x = this.state.favoritecount + 1;
    this.setState({ favoritecount: x });

    for (let i = 0; i < this.state.allmovies.length; i++) {
      if (this.state.allmovies[i].id === id)
        favesList.unshift(this.state.allmovies[i]);
    }
    this.setState((prevState) => ({
      Moviesid: [...prevState.Moviesid, id],
    }));

  };

  //view movie in other pages with all details 
  viewfilm = (el) => {
    movieshow.title = el.title
    movieshow.description = el.description
    movieshow.img = el.img
    movieshow.rate = el.rate
    movieshow.cat = el.cat
    console.log(movieshow)


  }
  //delete film from favorite list 
  deletefilmfromfavorite = (id) => {
    favesList.splice(0, 1)

    console.log(favesList)
  }

  // Update film 
  update = (el) => {
    for (let i = 0; i < this.props.Filmslist.length; i++)
      if (this.props.Filmslist[i].id === el.id) { this.setState({ indexOffilmtoupdate: i }) }
    console.log(this.state.indexOffilmtoupdate)
  }

  render() {
    return (
      <div>
        <hr />

        <button className="btn btn-link favoriteicon">
          {this.state.favoritecount} <FaHeart color='red' size='35' onClick={this.showModal} />
        </button>

        <div className="fav"> </div>

        <main>
          <Modalfavoritelist
            favesList={favesList}
            show={this.state.show}
            handleClose={this.hideModal}
            deletefilmfromfavorite={this.deletefilmfromfavorite}
          ></Modalfavoritelist>
        </main>

        <main>
          <Modalviewfilm
            movieshow={movieshow}
            showfilm={this.state.showfilm}
            handleClosefilm={this.hideModalfilm}
          ></Modalviewfilm>
        </main>

        <main>
          <Modalupdate
            state={this.state}
            showupdate={this.state.showupdate}
            showModalupdate={this.showModalupdate}
            Filmslist={this.props.Filmslist}
            handleCloseupdate={this.hideModalupdate}
          ></Modalupdate>
        </main>

        <div className="cards">

          {this.props.films.map((el) => (
            <div className="cardfilm text-center">
              <Card>
                <small>{el.id}</small>
                <button onClick={() => { this.viewfilm(el); this.showModalfilm() }}>
                  <CardImg top width="100%" src={el.img} alt="Card image cap" />{" "}
                </button>
                <div className="star">
                  {[...Array(el.rate)].map((star) => (
                    <FaStar size={25} color="yellow" />
                  ))}
                </div>
                <CardBody className="details">

                  <CardTitle>{el.title}</CardTitle>
                  <CardSubtitle>{el.cat}</CardSubtitle>
                  <CardText>
                    <small>{el.description}</small>
                  </CardText>
                  <div className="actionBTNs">
                    <FaRegTrashAlt
                      className="btnremove"
                      size="30"
                      color="danger"
                      onClick={this.props.remove}
                    >
                      Supprimer{" "}
                    </FaRegTrashAlt>
                    <FaHeart
                      size="30"
                      className="btnfavori"
                      onClick={() => this.favorite(el.id)}
                      color="black"
                    >
                      Modifier{" "}
                    </FaHeart>

                    <FaPencilAlt onClick={() => { this.update(el); this.showModalupdate() }} className="btnmodifie" size="30" color="dark">
                      Modifé{" "}
                    </FaPencilAlt>

                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Cardmovies;
