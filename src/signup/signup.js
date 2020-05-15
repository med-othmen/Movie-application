import React from 'react';
import { Col, Form, FormGroup, Label, Input, ButtonToggle } from 'reactstrap';
import { Link } from "react-router-dom";
import './signup.css'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      confirmmail: '',
      mdp: '',
      imgutlisateur:''

    };
  }

  Verifname = (e) => {
    let filter = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;

    this.setState({ firstname: e.target.value })

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
      return true;
    }
    else {
      e.target.style.border = "3px solid red";
      return false;
    }


  }
  verifprenom = (e) => {
    let filter = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;

    this.setState({ lastname: e.target.value })

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }
  }
  verifmail = (e) => {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    this.setState({ email: e.target.value })

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }

  }
  Confirmmail = (e) => {
    this.setState({ confirmmail: e.target.value })
    if (this.state.email === e.target.value) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }

  }
  verifpassword = (e) => {
    let filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    this.setState({ mdp: e.target.value })

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }

  }
  inscriptionvalidation = () => {
    let regex1 = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    let regex2 = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    let regex3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let regex4 =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if ((regex1.test(this.state.firstname)) && (regex2.test(this.state.lastname)) && (regex3.test(this.state.email)) && (this.state.email === this.state.confirmmail) && (regex4.test(this.state.mdp)))

   {  localStorage.setItem('nom',this.state.firstname)
     localStorage.setItem('prenom',this.state.lastname)
     localStorage.setItem('email',this.state.email)
     localStorage.setItem('mdp',this.state.mdp)
     localStorage.setItem('img',this.state.imgutlisateur)
     alert('inscription validée ')
    }
    else alert('Remplir et verifier vos données')
    console.log(localStorage)
  }

  render() {
    return <div className="Login">
      <Form className="form">
        <FormGroup >
          <Label for="exampleEmail" sm={10} >Votre nom </Label>
          <Col sm={10}>
            <Input type="name" name="prenom" id="exampleEmail" value={this.state.firstname} placeholder="Votre nom" bsSize="lg" onChange={this.Verifname} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Label for="exampleEmail2" sm={10}>Votre prénom</Label>
          <Col sm={10}>
            <Input type="prenom" name="nom" id="exampleEmail" value={this.state.lastname} placeholder="Votre prénom" bsSize="lg" onChange={this.verifprenom} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Label for="exampleEmail" sm={10} >Adresse e-mail</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" value={this.state.email} placeholder="E-mail" bsSize="lg" onChange={this.verifmail} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Label for="exampleEmail" sm={10} >Confirmer adresse email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" value={this.state.confirmmail} placeholder="confirmer adress e-mail" bsSize="lg" onChange={this.Confirmmail} />
          </Col>
        </FormGroup>
        <FormGroup >
          <Label for="exampleEmail" sm={10} >Mot de passe </Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" value={this.state.mdp} placeholder="Numéro de telephone" bsSize="lg" onChange={this.verifpassword} />
          </Col>
        </FormGroup>
        <FormGroup >
        <Label for="exampleEmail" sm={10} >Mot de passe </Label>
        <Col sm={10}>
        <Input type="email" name="email" id="exampleEmail"  placeholder="URL de votre image" bsSize="lg"  />
      
        </Col>
        </FormGroup>

        <div className="buttons">
          <ButtonToggle color="danger" className="CI2" float="right" onClick={this.inscriptionvalidation}>S'inscrire</ButtonToggle>
          <Link to="/"> <ButtonToggle className="CI1" color="warning" onClick={this.cancelinscription}>Login</ButtonToggle></Link>
        </div>

      </Form>
    </div>;
  }
}



export default Signup;