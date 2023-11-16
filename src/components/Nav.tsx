import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <ul style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/greeting">Greeting</Link></li>
                <li><Link to="/person">Person</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/productlist">Product List</Link></li>
                <li><Link to="/usestate">Use State</Link></li>
                <li><Link to="/useeffect">Use Effect</Link></li>
                <li><Link to="/usereducer">Use Reducer</Link></li>
                <li><Link to="/usecontext">Use Context</Link></li>
                <li><Link to="/zustand">Zustand</Link></li>
                <li><Link to="/localproducts/1">LocalProduct 1</Link></li>
                <li><Link to="/localproducts/2">LocalProduct 2</Link></li>
                <li><Link to="/localproducts/3">LocalProduct 3</Link></li>
                <li><Link to="/postapicall">Api call</Link></li>
                <li><Link to="/post/6">SinglePost</Link></li>
                <li><Link to="/firstform">First form</Link></li>
                <li><Link to="/reacthookform">React hook form</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;