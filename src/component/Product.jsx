import React,{useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import Skeleton from 'react-loading-skeleton';
import { addCart } from '../redux/action';
import { Link } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
    }, [id]);
    console.log(product);

    const Loading = () => {
        return (
            <>
                <div>
                    <Skeleton height={400} />
                </div>
                <div>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div >
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div>
                    <h4 >{product.category}
                    </h4>
                    <h1>{product.title}</h1>
                    <p >
                        Rating {product.rating && product.rating.rate}
                        
                    </p>
                    <h3>{product.price}</h3>
                    <p >{product.description}</p>
                    <button onClick={() => addProduct(product)}>Add to Cart</button>
                    <Link to="/cart" >Go to Cart</Link>
                </div>
            </>
        )
    }
    return (
        <div>
        <div >
            <div >
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
    )
}

export default Product