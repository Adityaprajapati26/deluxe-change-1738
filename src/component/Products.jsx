import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import { Container, Box, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import modu from "../component/Products.module.css";


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    console.log(filter);

    const Loading = () => {
        return (
            <>
                <div >
                    <Skeleton width="100px" height="200px" />
                    <Skeleton width="100px" height="300px" />
                    <Skeleton width="100px" height="100px" />
                    <Skeleton width="100px" height="150px" />
                </div>
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                {
                    filter.map((product) => {
                        return (
                            <div classNameName={modu.container}>
                                <Container style={{ width: "18rem", margin: "20px" }} key={product.id} >
                                    <Box boxSize='sm' >
                                        <Image style={{ height: "300px" }} src={product.image} alt={product.title} />
                                    </Box>
                                    <Box>
                                        <h5>{product.title.substring(0, 12)}</h5>
                                    </Box>
                                    <Box>
                                        <p >{product.price}</p>
                                    </Box>
                                    <Button colorScheme='teal'>
                                        <Link to={`/products/${product.id}`}>Add to Cart</Link>
                                    </Button>
                                </Container>
                            </div>
                        )
                    })
                }
            </>
        )
    };
    return (
        <div>
            <div >
                <Box>
                    Latest Products
                </Box>
                <div>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>


        </div>
    )
}

export default Products;