import React, { useState } from 'react';
import Greeting from './components/greeting';
import Person from './components/Person';
import Product from './components/Product';
import ProductList from './components/ProductList';
import './styles.scss'
import styles from './App.module.css';
import Button from './components/StyledComponents/button';
import Logo from './images/noroff-logo.png';
import UseState from './components/hooksAndState/useState';
import UseEffect from './components/hooksAndState/UseEffect';
import UseReducer from './components/hooksAndState/UseReducer';
import UseContext from './components/hooksAndState/UseContext/UseContext';
import Zustand from './components/zustand/Zustand';

const products = [
    { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
    { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
    { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
    { id: 3, title: 'Water', price: 15.99, isOnSale: true },
];

function App() {
    const [productTitle, setProductTitle] = useState('Milk');
    const onButtonClick = () => {
        setProductTitle('Cheese');
    }

    const [activeState, setActiveState] = useState(false);
    const handleButtonClick = () => {
        setActiveState(!activeState);
    }

  // @ts-ignore
    return (
    <div>
        <Greeting></Greeting>
        <Person firstName="First" lastName="Last name" city="The city"></Person>
        <button onClick={onButtonClick}>Change Product</button>
        <Product productTitle={productTitle}></Product>
        <ProductList products={products}></ProductList>
        <Button isActive={activeState} onClick={handleButtonClick}>Test button</Button>
        <p className='text'>Paragraph 1</p>
        <p className='text'>Paragraph 2</p>
        <img src={Logo} style={{ maxWidth: '15rem' }} alt="Alt tekst her" title="Test tittel her" />
        <UseState/>
        <UseEffect/>
        <UseReducer/>
        <UseContext/>
        <Zustand/>
    </div>
  );
}

export default App;