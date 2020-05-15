import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MDBBtn } from "mdbreact";
import { Card, CardTitle, CardText } from 'reactstrap';

    class Modal extends React.Component {
  render(){
    return (
      <div className={this.props.showfilm ? 'modal display-block' : 'modal display-none'}>
          
       
          <div className="cardshow">
        <Card  className="text-center">
        <img width="75%" src={this.props.movieshow.img} alt="Cardfilm" />
        <div>
          <CardTitle>{this.props.movieshow.title}</CardTitle>
          <div>{[...Array(this.props.movieshow.rate)].map(star=>{ return  <FaStar color='yellow' size={20}/>;})}</div>
          <CardText>{this.props.movieshow.cat}</CardText>
          <CardText>
          <CardText>{this.props.movieshow.description}</CardText>
            <small className="text-muted"></small>
          </CardText>
        </div>
      </Card>
         
      </div>
        <div>
       
            </div>  
            <MDBBtn className="btnshow" color="warning" 
            onClick={this.props.handleClosefilm}
          >
            fermer
          </MDBBtn>
          
        </div>
    
    );
  };
}
  export default Modal;