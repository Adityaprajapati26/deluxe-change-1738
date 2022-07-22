import styled from "styled-components";

const Container = styled.div`

    text-align: center;
    padding: 1rem 2rem;
    margin: 0;
    letter-spacing: .1rem;
    font-size: small;
    background-color:white;
`;

const Announcement = () => {
  return <Container>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</Container>;
};

export default Announcement;
