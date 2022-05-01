import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const CreateDonation = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="Top">
        <IoIosArrowBack onClick={() => navigate("/home")} />
        <p>Inserir anúncio para doação</p>
        <button>Limpar</button>
      </div>
      <div className="Photo">
        <MdOutlineAddAPhoto />
        <p>Incluir fotos</p>
      </div>
      <form>
        <label>Título do anúncio</label>
        <input placeholder="EX.:  Caixas de papelão" />
        <label>Descrição</label>
        <input placeholder="EX.:  Caixas de papelão utilizadas nas mudança" />
        <label>Quantidade</label>
        <input placeholder="EX.:  10 Caixas de papelão" />
        <label>Categoria</label>
        <input placeholder="Selecione uma categoria" />
        <label>Endereço</label>
        <input placeholder="Seu endereço" />
        <button>Enviar anúncio para doação</button>
      </form>
    </Container>
  );
};
