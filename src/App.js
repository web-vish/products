import React from 'react';
import './App.scss';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <header>
          <h1>Products</h1>
        </header>
        <sections>
          <ProductList/>
        </sections>
      </div>
    </div>
  );
}

export default App;
