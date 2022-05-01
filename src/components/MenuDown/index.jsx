import { Container } from "./styles";
import { MdRecycling } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { useMenu } from '../../Contexts/menu'

export const MenuDown = ( { open } ) => {

  const { SetMenuDown, SetMenuColletc } = useMenu()

  return (
    <>
    { open && 
      <Container>
        <div className="menusAction">
          <div className="collect" onClick={() => (SetMenuDown(false), SetMenuColletc(true))} >
            <MdRecycling className="svg rec" />
            <p>Coletar</p>
          </div>
          <div className="donation" onClick={() => SetMenuDown(false)}>
            <FaHandsHelping className="svg hands" />
            <p>Doar</p>
          </div>
        </div>
      </Container>
      }
    </>
  );
};
