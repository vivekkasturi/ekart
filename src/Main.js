import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Products from './Components/Products';
export default function Main(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/Cart" element={<Cart />} />
                    <Route exact path="/Products" element={<Products />} />
                </Routes>
            </Router>
        </div>
    )
}