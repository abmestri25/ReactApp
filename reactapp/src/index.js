import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// const name = "Abhishek"
// const lname = "Mestri"
// const img1 = "https://picsum.photos/199/200"
// const img2 = "https://picsum.photos/200/199"
// const img3 = "https://picsum.photos/200/200"

// this is to get current date and time
// const currTime = new Date().toLocaleTimeString();
// const currDate = new Date().toLocaleDateString();

// ReactDOM.render(
        // JSX Fragment
//     <>
//       {/* template literal in jsx,write in braces otherwise it wont work */}
//       <h1 className="heading">{`My name is ${name} ${lname}`}</h1>
//       <div className="images">
//           <img src= {img1} alt="ramdom" />
//           <img src= {img2} alt="ramdom" />
//           <img src= {img3} alt="ramdom" />
//       </div>
//       <div className="dateTime">
//           <h3>Current Time is "{currTime}"</h3>
//           <h3>Current Date is {currDate}</h3>
//       </div>
//     </>  
//   ,document.getElementById('root')
// );



// Greeting

let currTime = new Date();
currTime = currTime.getHours();   ////getting hours only

let greeting = " ";
const cssStyle = {}   ///css variable to apply style

if(currTime>=1 && currTime <=12){
  greeting = "Good Morning "
  cssStyle.color = "green"
}
else if(currTime>=13 && currTime <=18){
  greeting = "Good Afternoon"
  cssStyle.color = "orange"
}
else{
  greeting = "Good Night "
  cssStyle.color = "blue"
}

ReactDOM.render(
  <>
  <div>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span> !</h1> 
  </div>
  </>
  ,document.getElementById("root")
);


