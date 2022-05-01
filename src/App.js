import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalCSS from "./style/global.js";
import { DonorDetails } from "./components/DonorDetails";
import { useMenu } from "./Contexts/menu";

function App() {
  const { setOpenDonorDetails, openDonorDetails } = useMenu();
  return (
    <>
      <Router />
      <GlobalCSS />
      <DonorDetails visible={openDonorDetails} />
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
