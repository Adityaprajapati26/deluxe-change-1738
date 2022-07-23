import styled from "styled-components";
import { popularProducts } from "./data";
import Product from "./HomeProduct";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	// border:1px solid green;
	align-item: centre;
	width: 87%;
	margin-left: 7%;
	// margin-top: 7%;
	position: relative;
`;

const Products = () => {
	return (
		<>
			<Container>
				{popularProducts.map((item) => (
					<Product item={item} key={item.id} />
				))}
			</Container>
		</>
	);
};

export default Products;
