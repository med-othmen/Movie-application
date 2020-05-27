import React from 'react';
import { Col, Form, FormGroup, Label, Input, ButtonToggle } from 'reactstrap';
import './login.css'
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  state = {
    redirect: false
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

  verifpswd = (e) => {
    let filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;   // at least one number, one lowercase and one uppercase letter
    // at least six characters

    this.setState({ password: e.target.value })

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }
  }
  Log=()=>{
alert('r')
  }

  signin = () => {
    let filter1 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let filter2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ((filter2.test(this.state.email)) && (filter1.test(this.state.password)) && (localStorage.getItem('mdp') === this.state.password) && (localStorage.getItem('email') === this.state.email))
    {alert('bienvenue'+localStorage.getItem('nom'))
    this.props.history.push("/index")}

    else alert('vous devez s inscrire  avant ')

  }



  render() {
    return (<div className="login">
      <Form className="Form">

        <FormGroup >
          <Label for="exampleEmail" sm={10} >Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" value={this.state.email} placeholder="E-mail" bsSize="lg" onChange={this.verifmail} />
          </Col>
        </FormGroup>

        <FormGroup >
          <Label for="exampleEmail2" sm={10}>Mot de passe</Label>
          <Col sm={10}>
            <Input type="password" name="email" id="exampleEmail2" placeholder="Mot de passe" onChange={this.verifpswd} />
          </Col>
          <div className="buttons">
            <Link to='/Register'>  <ButtonToggle className="CI2" color="danger" float="right" onClick={this.signup}>S'inscrire</ButtonToggle></Link>
             <ButtonToggle className="CI1" color="warning" onClick={this.signin}>Se connecter</ButtonToggle>
          </div>

        </FormGroup>

      </Form>
    </div>

    )

  }
}

export default Login;
