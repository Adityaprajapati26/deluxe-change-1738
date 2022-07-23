import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";

const Feed = () => {
	const Container = styled.div`
		// padding: 20px;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
		// border:1px solid green;
		align-item: centre;
		width: 87%;
		margin-left: 7%;
		margin-top: 5%;
		position: relative;
	`;

	const property = {
		imageUrl1:
			"https://storage.covet.pics/postassets/12327673/high_resolution/1b248440676a46ccaef5418696b6cafb",
		imageUrl2:
			"https://storage.covet.pics/postassets/12007666/high_resolution/e914c46768434be928cbaeb7cda40f9a",
		imageUrl3:
			"https://storage.covet.pics/postassets/11999924/high_resolution/2396933b0a70143ee84c2b0352ccc5f2",
		imageUrl4:
			"https://storage.covet.pics/postassets/11980922/high_resolution/f8541afa692ffd452c7f1120072e233d",
		imageUrl5:
			"https://storage.covet.pics/postassets/11953653/high_resolution/471bf5939674561bef2f5f68cdbdb850",
		imageUrl6:
			"https://storage.covet.pics/postassets/11937553/high_resolution/50acd47dd427d9a413d89e3e186e8fa1",
		imageUrl7:
			"https://storage.covet.pics/postassets/11933882/high_resolution/3251903d057a3c2a3b2a4d270652a1ed",
		imageUrl8:
			"https://storage.covet.pics/postassets/11925590/high_resolution/d2c4ba857a82b6a2fb7740b860ecea37",
		imageUrl9:
			"https://storage.covet.pics/postassets/11944342/high_resolution/efc112d679181b8203a58000b44aa492",
	};

	return (
		<>
			<div>
				<h1
					style={{
						textAlign: "center",
						fontSize: "3rem",
						fontWeight: "300",
						marginTop: "80px",
					}}
				>
					SHOP THE FEED
				</h1>
			</div>
			<div>
				<h1
					style={{
						textAlign: "center",
						fontSize: "1.5rem",
						fontWeight: "200",
						marginTop: "10px",
						color: "rgba(18, 18, 18, 0.75)",
					}}
				>
					Tag us on instagram @LovodaShop or #Lovoda
				</h1>
			</div>

			<Container>
				<Grid
					h="100%"
					templateRows="repeat(2, 2fr)"
					templateColumns="repeat(5, 1fr)"
					gap={4}
				>
					<GridItem rowSpan={2} colSpan={2} bg="tomato">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl1}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl2}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl3}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl4}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl5}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem rowSpan={2} colSpan={2} bg="tomato">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl6}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl7}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl8}
							alt={property.imageAlt}
						/>
					</GridItem>
					<GridItem colSpan={1} bg="papayawhip">
						<Image
							style={{ width: "100%" }}
							src={property.imageUrl9}
							alt={property.imageAlt}
						/>
					</GridItem>
				</Grid>
			</Container>

			<div>
				<h1
					style={{
						textAlign: "center",
						fontSize: "2rem",
						fontWeight: "500",
						marginTop: "50px",
						textDecoration: "underline",
					}}
				>
					More
				</h1>
			</div>
		</>
	);
};

export default Feed;
