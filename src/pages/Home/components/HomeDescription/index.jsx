import { Link } from "react-router-dom";
import { Button, Container } from "./homeDescription.styles";
import home from "../../../../assets/images/home-1.png";

export function HomeDescription() {
  return (
    <Container>
      <img src={home} />
      <div className="content">
        <h1>A sua comunidade empreendedora de food service</h1>
        <p>
          Conecte-se a outros empreendedores e participe compartilhando
          jornadas, dúvidas e ideias para que todo mundo prospere #junto
        </p>
        <Link to="#">
          <Button>Saiba mais</Button>
        </Link>
      </div>
    </Container>
  );
}
