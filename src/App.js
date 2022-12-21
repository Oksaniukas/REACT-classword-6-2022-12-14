import React, { useState, useEffect} from "react";
import Header from "./components/Header";


function App() {

  let [count, setCount] = useState(1);
  let [starWarior, setStarWarior] = useState({});


  useEffect(() => {console.log('Hi!')}, []);
 

  console.log('APP') 
  useEffect(() => {
    console.log('Use effect')
    // fetch('https://swapi.dev/api/people/1')
    fetch(`https://swapi.dev/api/people/${count}`)
    .then((res) => res.json())
    .then((data) => setStarWarior(data))
  }, [count])

  return (
      <div className="app-wrapper">
      <Header />
      <div className="form-wrapper">
       <div>
          <button onClick={() => {setCount(prev => prev+1)}}>Add</button>
          <span></span>
          {count}
       </div>
       <div>
          <div>
            <pre>
              <code>
                 {JSON.stringify(starWarior, null, 2)}
              </code>
           </pre>
          </div>
       </div>

       
      </div>
    </div>
  );
}

export default App;




// function App() {

//   let [count, setCount] = useState(1);
//   let [numb, setNumb] = useState(5)


//   useEffect(() => {console.log('Hi!')}, []);
//   useEffect(() => {console.log('Count!')}, [count]);
//   useEffect(() => {console.log('Number!')}, [numb]);

  

//   return (
//       <div className="app-wrapper">
//       <Header />
//       <div className="form-wrapper">
//        <div>
//           <button onClick={() => {setCount(prev => prev+1)}}>Add</button>
//           <span></span>
//           {count}
//        </div>
//        <div>
//           <button onClick={() => {setNumb(prev => prev+1)}}>Add to 10</button>
//           <span></span>
//           {numb}
//        </div>

       
//       </div>
//     </div>
//   );
// }

