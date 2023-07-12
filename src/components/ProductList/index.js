import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(({ data }) => {
            setProducts(data.products);
        })

    }, [])

    return (
        <section>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <div className='image-container'>
                                <img src={product.thumbnail} />
                            </div>
                            <div className='product-main'>
                                <h2>
                                    {product.title}
                                </h2>
                                <p>{product.description}</p>
                            </div>
                            <div className='product-footer'>
                                <button>Buy Now</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
