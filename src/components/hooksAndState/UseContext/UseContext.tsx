import { createContext } from 'react';
import DisplayData from './DisplayData';

const products = [
    { id: 0, title: 'Bread', price: 19.99 },
    { id: 1, title: 'Milk', price: 29.99 },
    { id: 2, title: 'Cheese', price: 35.99 },
    { id: 3, title: 'Water', price: 15.99 },
];
export const ProductContext = createContext(products);


function UseContext() {
    return (
        <ProductContext.Provider value={products}>
            <label style={{display: 'block', marginTop: '2rem'}}>This data is shown with useContext</label>
            <DisplayData/>
        </ProductContext.Provider>
    )
}

export default UseContext;

