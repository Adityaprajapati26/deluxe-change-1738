import styled from "styled-components";
import { mobile } from "./responsive";
import "./homeProduct.css";

const Container = styled.div`
	flex: 1;
	// margin: 3px;
	height: 100vh;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	${mobile({ height: "20vh" })}
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title1 = styled.h1`
	color: white;
	margin-bottom: 20px;
	font-size: 40px;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
	font-size: 20px;
`;

const Button = styled.button`
	border: 1px solid white;
	padding: 10px;
	color: white;
	cursor: pointer;
	font-weight: 300;
	font-size: 20px;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_1500x.jpg?v=1645120932" />

			<Info>
				<Title1>NEW NEW NEW</Title1>
				<Title>Check out the new beauties!</Title>
				<Button className="click">Shop All</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
