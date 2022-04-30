import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import  { ThemeProvider  } from 'styled-components'
import  {theme}  from "./constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
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
      </ThemeProvider>
    </>
  );
}

export default App;
