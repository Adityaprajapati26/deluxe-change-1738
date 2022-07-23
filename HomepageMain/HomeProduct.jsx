import styled from "styled-components";
import { RiHeartLine } from "react-icons/ri";
import { useState } from "react";
import "./homeProduct.css";

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	right: 0;
	display: flex;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	width: 280px;
	height: 393px;
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
	// border:1px solid blue;
	// &:hover ${Info} {
	// 	opacity: 1;
	// }
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
`;

const Icon = styled.div`
	width: 26px;
	height: 26px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transform: scale(1.1);
`;
const H3 = styled.div`
	font-size: 14px;
`;
const Product = ({ item }) => {
	const [state, setState] = useState(false);
	const toggle = () => {
		setState(!state);
	};
	return (
		<>
			<div>
				<Container className="container">
					<Image src={item.img} />

					<Info>
						<Icon>
							<RiHeartLine
								onClick={toggle}
								className={"toggle--button " + (state ? "toggle--close" : "")}
							>
								{state ? "" : ""}
							</RiHeartLine>
						</Icon>
					</Info>
				</Container>
				<div style={{ width: "90%", marginLeft: "2%" }}>
					<H3 className="display-5 fw-bold">{item.title}</H3>
					<H3 className="my-3">${item.price}</H3>
				</div>
			</div>
		</>
	);
};

export default Product;

// style={{
// 	width: "21px",
// 	height: "21px",
// 	color: " rgb(201, 172, 146",
// }}
