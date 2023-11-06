import { useContext } from 'react';
import { ProductContext } from './UseContext';


function DisplayData() {
    const data = useContext(ProductContext);

    return(
        <div>
            <h2>Products:</h2>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayData;