import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Formulario } from './components/login/Formulario';
import { Panel } from './components/panel/Panel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
}

export default App;