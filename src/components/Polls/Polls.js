import React from "react";
import data from "../../data";
import { Container, Title, InfosContainer, Box } from "./styles";

export default function Polls() {
  return (
    <>
      {data.map((info) => (
        <Infos
          key={info.id}
          title={info.title}
          image={info.image}
          paragraph={info.paragraph}
          description={info.description}
        />
      ))}
    </>
  );
}

function Infos({ title, image, paragraph, description }) {
  return (
    <>
      <Container>
        <Title>
          <h1>Endangered Species</h1>
        </Title>
        <InfosContainer>
          <h2>{title}</h2>
          <img src={image} alt="animal" />
          <h3>{paragraph}</h3>
          <p>{description}</p>
        </InfosContainer>
      </Container>
      <Box>
        <p>
          See more:{" "}
          <a
            href="https://www.todamateria.com.br/animais-em-extincao/"
            rel="noreferrer"
            target={"_blank"}
          >
            Endangered species
          </a>
        </p>
      </Box>
    </>
  );
}
