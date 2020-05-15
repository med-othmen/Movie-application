import React from 'react';
import { FaStar } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { MDBBtn} from "mdbreact";


class Card extends React.Component {

    render() {
        return  <tbody>{this.props.films.map(el=>
            <tr >
                <th><img src={el.img} alt="img" /></th>
                <th >{el.title}</th>
                <th >{el.description}</th>
                <th >{el.cat}</th>
                <th>{[...Array(el.rate)].map(star=>{ return <FaStar size={15}/>;})}
                </th>
                <th ><Link to='/filmview'> <MDBBtn className="btnwatch" color="info" >Regarder </MDBBtn></Link>
                <MDBBtn className="btnwatch" color="danger" onClick={this.props.remove} >Supprimer </MDBBtn> 
                <MDBBtn className="btnfavori" color="warning">Favori </MDBBtn> 
                <MDBBtn className="btnfavori" color="dark">Modifé </MDBBtn> 
                
                </th>
            </tr>)}
            </tbody>
}
}
export default Card;