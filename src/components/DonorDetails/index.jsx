import { Container } from "./styles";
import { FaRegUser } from "react-icons/fa";

export const DonorDetails = ({ visible }) => {
  return (
    <Container visible={visible}>
      <div className="Up"></div>

      <section className="Profile">
        <div className="Icon">
          <FaRegUser />
        </div>
        <div className="Details">
          <h3>Rafael da Silva</h3>
          <p>Carioca, 27 anos.</p>
          <p>
            "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que
            deixa de existir" Steve Jobs.
          </p>
        </div>
      </section>

      <section className="Items">
        <div className="ItemOne">
          <div className="img">img</div>
          <div className="DetailsItem">
            <h3>Caixa de papelão</h3>
            <p>Av. Passos, 40 - 50 - Centro, Rio de Janeiro - RJ, 20051-040</p>
            <h3>
              Quantidade <span>2 kg</span>
            </h3>
            <h3>
              Categoria <span>Papelão</span>
            </h3>
          </div>
        </div>
      </section>
      <footer>
        <button>Solicitar</button>
        <button>Mensagem</button>
      </footer>
    </Container>
  );
};
