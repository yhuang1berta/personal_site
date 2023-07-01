import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import CVPage from './components/CVPage/CVPage';

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/CV" element={<CVPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;