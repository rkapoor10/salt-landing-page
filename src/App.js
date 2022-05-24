import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        bodyClassName="toastBody"
      />
    </div>
  );
}

export default App;
