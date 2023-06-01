import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import Cart from './Cart';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [addToCartItem, setAddToCartItem] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setProducts(result)
            })
    }, [])


    console.log(addToCartItem);
    const addtocartfunction = (item) => {
        console.log(item);
        setAddToCartItem((prevItems)=>[...prevItems,item])
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <Button color="inherit">ekart</Button>
                            <Button color="inherit">Products</Button>
                            <Button color="inherit">Cart</Button>
                        </div>

                        <Button color="inherit"> <ShoppingCartIcon />Cart</Button>
                    </Toolbar>
                </AppBar>
            </Box>




            <div className="container-fluid">
                <div className="row">

                    {products && products.map((item) => (
                        <div key={item.id}>
                            <div className="col-sm-3">
                                <div className="card-sm-9" style={{ background: 'pink' }}>
                                    <img src={item.image} className="card-img-top" alt="Product Image" style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">INR: {item.price}</h5>
                                        <p className="card-text">{item.description}</p>
                                        {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                                        <Button onClick={() => addtocartfunction(item)}>Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            <Cart addToCartItem={addToCartItem} />



        </>
    );
}

