import React, { Component } from 'react';
import './Friend.css';


export default class Friend extends Component {

    render() {
        const { recommended_user} = this.props;        
        return (
            <div className="friend-result">
                <img src='https://robohash.org/me' width="100px" alt="profile" />
                <div className="friend-name">
                    <span className="name">Joe</span>
                    <span className="name">Blank</span>
                </div>
                <button className="add-friend">Add Friend</button>
            </div>
        );
    }
}




// import React, { Component } from "react";

// import './Recommended.css';

// export default class Recommended extends Component {
//   render() {
//     const { logged_in_user, recommended_user, filter, add } = this.props;
//     return (
//       <div className="Recommended__parent content-container">
//         <img src={ recommended_user.picture } width="100px" alt="profile" />

//         <div className="Recommended__name_container">
//           <span className="Recommended__first_name open-sans-bold">{ recommended_user.first }</span>
//           <br />
//           <span className="Recommended__last_name open-sans-bold">{ recommended_user.last }</span>
//         </div>

//         <button className="Recommended__btn orange-btn" onClick={ () => add( logged_in_user, filter, recommended_user.id ) }> Add Friend </button>
//       </div>
//     )
//   }
// }