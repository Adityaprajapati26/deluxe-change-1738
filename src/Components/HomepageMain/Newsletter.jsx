import styled from "styled-components";
import { mobile } from "./responsive";
import { AiOutlineArrowRight } from "react-icons/ai";
const Container = styled.div`
	display: flex;
	width: 30%;
	// border:1px solid green;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 17px;
	margin-bottom: 20px;
`;

const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
	${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
	width: 100%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	${mobile({ width: "80%" })}
`;

const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;

const Button = styled.button`
	flex: 1;
	border: none;
	color: black;
	background-color: white;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title
				style={{
					color: "rgba(18, 18, 18, 0.75)",
					fontSize: "16px",
					fontWeight: "400",
				}}
			>
				Subscribe to our emails
			</Title>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<AiOutlineArrowRight />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
