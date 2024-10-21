import React, { Component } from "react";
import Products from './Products';

class App extends Component {

  // formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }
  render() {
    // const user = {
    //   firstName: 'Michael',
    //   lastName: 'van den Berg'
    // };
    return (
      <div>
        {/* <h1>My First React App!</h1>
        <Products /> */}

        {/* <h1>Hello, {this.formatName(user)}!</h1> */}
        <Products />
      </div>
    );
  }
}
export default App;


// import React, { Component } from 'react';
// import Products from './Products';
// class App extends Component {
//   //render function allows html to display in broweser
//   render() {
//     return (
//       <div>
//         <h1>My First React App!</h1>
//         <Products />
//       </div>
//     );
//   }
// }
// export default App;
