import React from 'react';
import './navbar.css'
import { MDBCol, MDBBtn } from "mdbreact";
import { FaStar, FaSistrix } from 'react-icons/fa';


class Hedearnav extends React.Component {
    render() {
        return <div>
            <hr />
            <div className="utilisateur">
                <div>
                    <img src={localStorage.getItem('img')} alt='rrr' />
                </div>
                <div>
                <h1>{localStorage.getItem('nom')}</h1>
                {localStorage.getItem('email')}
                </div>
            </div>
            <hr />
            <div className="searchbar">

                <div className="header">
                    <MDBCol md="14">
                        <div className="input-group md-form form-sm form-1 pl-0">
                            <input className="form-control my-0 py-1" type="text" placeholder="Trouver un film à regarder" aria-label="Search" onChange={this.props.search} />
                            <MDBBtn className='btnresetsearch' color="warning" onClick={this.props.resetsearch}>Réinitialiser la recherche</MDBBtn>
                            {this.props.state.ratesearch.map((el, i) =>

                                <button class="btn btn-link"

                                    onClick={() => this.props.getrate(el)}>
                                    <FaStar
                                        style={{ color: this.props.state.bgcolor }}

                                        size={25} />
                                </button>

                            )



                            }
                        </div>
                        <FaSistrix size='20' />{this.props.state.films.length} Films trouvée
        </MDBCol>
                </div>
            </div>
        </div>;
    }
}


export default Hedearnav;