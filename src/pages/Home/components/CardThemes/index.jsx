import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Card, Container } from "./cardThemes.style";

export function CardThemes() {
  const { themesList } = useContext(AppContext);
  return (
    <Container>
      {themesList.map((theme, i) => (
        <Card key={i}>
          <img src={theme.img} alt={theme.title} />
          <span>{theme.title} </span>
          <p>{theme.text}</p>
        </Card>
      ))}
    </Container>
  );
}
