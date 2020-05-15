import React from 'react';
import { FaStar } from 'react-icons/fa';

class Favorite extends React.Component {

    render() {
        return <div>

            <tbody>{this.props.favesList.map(el =>
                <tr >
                    <th><img src={el.img} alt="img" /></th>
                    <th >{el.title}</th>
                    <th ><small>{el.description}</small></th>
                    <th >{el.cat}</th>
                    <th className='starcard'>{[...Array(el.rate)].map(star => { return <FaStar color='yellow' size={20} />; })}
                    </th>

                </tr>)}
            </tbody>


        </div>

    }
}

export default Favorite;