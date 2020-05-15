import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MDBBtn } from "mdbreact";
import { Table } from 'reactstrap'

class Modal extends React.Component {
  render() {
    return (
      <div className={this.props.show ? 'modal display-block' : 'modal display-none'}>

        <div className='modale-main'>



          <div>
            <Table  hover >

              <thead>

                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Catégorie</th>
                  <th>Classement</th>

                </tr>
              </thead>
              <tbody>{this.props.favesList.map(el =>
                <tr >
                  <th><img src={el.img} alt="img" /></th>
                  <th >{el.title}</th>
                  <th ><small>{el.description}</small></th>
                  <th >{el.cat}</th>
                  <th className='starcard'>{[...Array(el.rate)].map(star => { return <FaStar color='yellow' size={20} />; })}
                  </th>
                  <MDBBtn color="danger" onClick={() => { this.props.deletefilmfromfavorite(el) }}
            
          >
           X
          </MDBBtn>
                </tr>)}
              </tbody>
            </Table>
            <MDBBtn className="btnadd" color="warning"
            onClick={this.props.handleClose}
          >
            fermer
          </MDBBtn>
          </div>
          

        </div>
      </div>
    );
  };
}
export default Modal;