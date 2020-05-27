import React from 'react';
import { MDBBtn } from "mdbreact";
import './add.css'
import { BrowserRouter } from 'react-router-dom';

class Addfilm extends React.Component {

    render() {
        return <div className="addfilm">

            <h3 className="addsectiontitle"><strong>Ajouter film</strong></h3>

            <input type="text"  placeholder="Titre de film"  onChange={this.props.verifAddTitle}></input>
            <textarea maxlength="50" className="description" name="paragraph_text" cols="25" rows="10" placeholder="Taper la description de film" onChange={this.props.verifAddDesc} />
            <input maxlength="1" type="text" placeholder="Classement de film" onChange={this.props.verifAddRate} ></input>
            <input maxlength="15" type="text" placeholder="Catégorie" onChange={this.props.verifAddCetogrie} ></input>
            <input type="text" placeholder="Source image" onChange={this.props.verifpicture} ></input>
            <MDBBtn className="btnadd" color="danger" >Annuler </MDBBtn>
            <MDBBtn className="btnadd" color="dark" onClick={this.props.addfilm}>Ajouter </MDBBtn>
            <BrowserRouter>

            </BrowserRouter>
        </div>
    }
}



export default Addfilm;