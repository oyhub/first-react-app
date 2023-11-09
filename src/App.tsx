import React, { useEffect, useState } from 'react';
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
import { Route, Routes } from 'react-router-dom';
import greeting from './components/greeting';
import Nav from './components/Nav';
import Layout from './components/Layout';
import LocalProducts from './components/LocalProducts';
import PostApiCall from './components/ApiCall/PostApiCall';
import Post, { SinglePost } from './components/ApiCall/Post';
import { usePerson } from './hooks/usePerson';
import useApi from './hooks/useApi';
import FirstForm from './components/First-form';

const products = [
    { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
    { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
    { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
    { id: 3, title: 'Water', price: 15.99, isOnSale: true },
];

function UseTheUseApi() {
    const { data, isLoading, isError } = useApi(
        'https://jsonplaceholder.typicode.com/todos'
    );

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error!</div>
    }
    console.log(data);
    return <div>Data loaded from the useApi</div>
}

function App() {
    const [productTitle, setProductTitle] = useState('Milk');
    const onButtonClick = () => {
        setProductTitle('Cheese');
    }

    const [activeState, setActiveState] = useState(false);
    const handleButtonClick = () => {
        setActiveState(!activeState);
    }

    const { greetPerson, setFirstName } = usePerson();
    useEffect(() => {
        setFirstName('Ola');
        greetPerson();
    }, [setFirstName, greetPerson]);

  // @ts-ignore
    return (
    <div>
        {/*<Nav/>*/}
        {/*<Greeting></Greeting>*/}
        {/*<Person firstName="First" lastName="Last name" city="The city"></Person>*/}
        <UseTheUseApi/>
        <button onClick={onButtonClick}>Change Product</button>
        {/*<Product productTitle={productTitle}></Product>*/}
        {/*<ProductList products={products}></ProductList>*/}
        <Button isActive={activeState} onClick={handleButtonClick}>Test button</Button>
        <p className='text'>Paragraph 1</p>
        <p className='text'>Paragraph 2</p>
        <img src={Logo} style={{ maxWidth: '15rem' }} alt="Alt tekst her" title="Test tittel her" />
        {/*<UseState/>*/}
        {/*<UseEffect/>*/}
        {/*<UseReducer/>*/}
        {/*<UseContext/>*/}
        {/*<Zustand/>*/}
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<div>Home Page</div>}/>
                <Route path="greeting" element={<Greeting/>}/>
                <Route path="person" element={<Person firstName="First" lastName="Last name" city="The city"/>}/>
                <Route path="product" element={<Product productTitle={productTitle}/>}/>
                <Route path="productlist" element={<ProductList products={products}/>}/>
                <Route path="usestate" element={<UseState/>}/>
                <Route path="useeffect" element={<UseEffect/>}/>
                <Route path="usereducer" element={<UseReducer/>}/>
                <Route path="usecontext" element={<UseContext/>}/>
                <Route path="zustand" element={<Zustand/>}/>
                <Route path="localproducts/:id" element={<LocalProducts/>}/>
                <Route path="postapicall" element={<PostApiCall/>}/>
                <Route path="post/:id" element={<SinglePost/>}/>
                <Route path="firstform" element={<FirstForm/>}/>
                <Route path="*" element={<div>Element not found</div>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;