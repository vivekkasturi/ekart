import { Button } from '@mui/material'
import { useEffect, useState } from 'react';
export default function Cart(props) {

    const [cit, setCit] = useState([])


    useEffect(() => {
        setCit(props.addToCartItem)
    }, [props.addToCartItem]);

    return (
        <>
            <h1>Cart</h1>
            <div className="row">
                <div className="column">
                    <div className="container">
                        {
                            cit && cit.map((cartitem, index) => {


                                return (

                                    <div key={index}>
                                        <li><strong>image</strong>{cartitem.image}</li>
                                        <li><strong>title</strong>{cartitem.title}</li>
                                        <li><strong>price</strong>{cartitem.price}</li>

                                    </div>


                                )

                            })
                        }
                    </div>
                </div>
            </div>


            <Button variant="contained">Submit</Button>
        </>
    )
}
