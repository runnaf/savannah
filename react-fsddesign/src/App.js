// import React from 'react';
// // import { ProductList } from './feature/auth/components';
// import Header from './shared/components/Header';
// import HomePage from './pages/HomePage';

// const App = () => {
//   return (
//   <div>
//  <h1>FSD Design</h1>
//  {/* <ProductList/> */}
// <Header/>
// <HomePage/>

//   </div>
//   );
// };

// export default App;


import React, { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([...numbers, 1]);
  };

  const deleteNumber = () => {
    const updatedNumbers = [...numbers];
    updatedNumbers.pop();
    setNumbers(updatedNumbers);
  };

  return (
    <div>
      <h1>Number Management</h1>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={deleteNumber}>Delete Number</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;