import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalCSS from "./style/global.js";
import { DonorDetails } from "./components/DonorDetails";
import { useMenu } from "./Contexts/menu";
import { MenuCollect } from "./components/menuCollect";

function App() {
  const { setOpenDonorDetails, openDonorDetails, setOpenMenuCollet } =
    useMenu();
  return (
    <>
      <Router />
      <GlobalCSS />
      <DonorDetails visible={openDonorDetails} />
      <MenuCollect />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
