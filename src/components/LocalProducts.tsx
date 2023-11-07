import { useParams } from 'react-router-dom';

function LocalProducts() {
    let params = useParams();
    console.log(params)

    return (
        <div>Dette er side: {params.id}</div>
    )
}

export default LocalProducts;