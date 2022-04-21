import { Link } from "react-router-dom";
import { Container, Grid } from "./downloadNow.style";

export function DownloadNow() {
  return (
    <Container id="downloadNow">
      <h4>
        E aí, você está pronto(a) pra participar e estar #junto com a gente?
      </h4>
      <h5>
        É só baixar o app pela sua loja de aplicativos e se cadastrar pra fazer
        parte da comunidade tamojunto!
      </h5>
      <Grid>
        <Link to="#">
          <img
            className="play-store"
            src="/icons/play-store.svg"
            alt="botão play store"
          />
        </Link>
        <Link to="#">
          <img
            className="apple-store"
            src="/icons/apple-store.svg"
            alt="botão apple store"
          />
        </Link>
      </Grid>
    </Container>
  );
}
