import {
	FaFacebookSquare,
	FaInstagram,
	FaPinterest,
	FaTiktok,
} from "react-icons/fa";
import styled from "styled-components";
import { mobile } from "../../responsive";
import "./footer.css";
import Newsletter from "./Newsletter";

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
`;
const Container2 = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	// border: 1px solid blue;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 170px;
	// border-radius: 50%;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	// margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	font-size: 16px;
	${mobile({ display: "none" })}
`;

const Title = styled.h3`
	margin-bottom: 30px;

	font-size: 17px;
	font-weight: 400;
`;

const List = styled.ul`
	margin: 0;
	list-style: none;
	font-size: 15px;
	color: grey;
`;

const ListItem = styled.li`
	width: 50%;
	padding-top: 1rem;
	padding-bottom: 1rem;
	color: rgba(18, 18, 18, 0.75);
	font-weight: 400;
	font-size: 15px;
	letter-spacing: 0.6px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	letter-spacing: 0.6px;
`;

const Payment = styled.img`
	width: 29%;
`;

const Footer = () => {
	const style = { color: "black", fontSize: "2rem" };
	return (
		<>
			<div
				style={{ marginLeft: "80px",  width: "85%" }}
			>
				<Container>
					<Left>
						<Title>Info</Title>
						<List>
							<ListItem>Search</ListItem>
							<ListItem>Terms and Service</ListItem>
							<ListItem>Refund Policy</ListItem>
							<ListItem>Wholesale</ListItem>
							<ListItem>Wholesale Signup form</ListItem>
							<ListItem>Shipping</ListItem>
						</List>
					</Left>
					<Center>
						<Title>Contact Us!</Title>
						<ContactItem>
							<h4
								style={{
									color: "rgba(18, 18, 18, 0.75)",
									fontSize: "16px",
									fontWeight: "400",
								}}
							>
								Need to talk? Reach us via mail, phone or text
							</h4>
						</ContactItem>
						<ContactItem>
							<h3>Email: Customerservice@Lovoda.com</h3>
						</ContactItem>
						<h3>Phone:(443) 500-1200</h3>
						<br />
						<ContactItem>
							<i style={{ color: "grey", fontSize: "16px", fontWeight: "600" }}>
								**Msg &data rates may apply
							</i>
						</ContactItem>
					</Center>
				</Container>

				<Container2>
					<Left>
					<Newsletter />
					</Left>
					

					<SocialContainer>
						<SocialIcon style={style}>
							<FaFacebookSquare />
						</SocialIcon>
						<SocialIcon style={style}>
							<FaPinterest />
						</SocialIcon>
						<SocialIcon style={style}>
							<FaInstagram />
						</SocialIcon>
						<SocialIcon style={style}>
							<FaTiktok />
						</SocialIcon>
					</SocialContainer>
				</Container2>
				{/* <div className="Payment-icon">
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</div> */}
				
			</div>
			<hr />
				<div style={{ width: "100%", height: "100%" }} className="over">
					<Payment src="https://www.launchtip.com/wp-content/webpc-passthru.php?src=https://www.launchtip.com/wp-content/uploads/2021/04/Screenshot-2021-05-01-at-18.06.24.png&nocache=1" />

					<h5 className="copywrite">© 2022, Lovoda Powered by Shopify</h5>
				</div>
		</>
	);
};

export default Footer;
