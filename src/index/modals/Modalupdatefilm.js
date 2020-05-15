import React from 'react';
import { MDBBtn } from "mdbreact";
var index = 0


class Modalupdate extends React.Component {
  updatefilm = () => {
    alert('dddd')
  }
  getindex = () => {

    for (let i = 0; i < this.props.Filmslist.length; i++) {
      if (this.props.Filmslist[i].id === this.props.state.indexOffilmtoupdate)
        index = this.props.state.indexOffilmtoupdate
    }
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
  render() {
    this.getindex()
    return (
      <div className={this.props.showupdate ? 'modal display-block' : 'modal display-none'}>
        <h3 className="titleupdate"><strong>Modifier film</strong></h3>
        <hr />
        <div className="updatemodal">


          <div className='inputupdate'>
            <input type="text" placeholder="Titre de film" value={this.props.Filmslist[index].title} onChange={this.verifAddTitle}></input>
            <textarea maxlength="50" value={this.props.Filmslist[index].description} name="paragraph_text" cols="25" rows="10" placeholder="Taper la description de film" onChange={this.verifAddDesc} />
            <input maxlength="1" value={this.props.Filmslist[index].rate} type="text" placeholder="Classement de film" onChange={this.verifAddRate} ></input>
            <input maxlength="15" value={this.props.Filmslist[index].cat} type="text" placeholder="Catégorie" onChange={this.verifAddCetogrie} ></input>
            <input type="text" value={this.props.Filmslist[index].img} placeholder="Source image" onChange={this.verifpicture} ></input>

            <MDBBtn className="btnupdate" color="success" onClick={this.updatefilm}>Enregistrer </MDBBtn>
            <MDBBtn className="btnupdate" color="warning"
              onClick={this.props.handleCloseupdate}
            >
              fermer
          </MDBBtn>
          </div>
        </div>

      </div>

    );
  };
}
export default Modalupdate;