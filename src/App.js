import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalCSS from "./style/global.js";

function App() {
  return (
    <>
      <Router />
      <GlobalCSS />

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
