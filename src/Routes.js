import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'
  
  import Home from './components/pages/Home'
  import Company from './components/pages/Company'
  import Contact from './components/pages/Contact'
  import Container from './components/layout/Container'
  import Navbar from './components/layout/Navbar'
  import Footer from './components/layout/Footer'
  import Doar from './components/pages/Doar'
  import Receber from './components/pages/Receber'
  import CarrinhoDoar from './components/pages/CarrinhoDoar'
  import Formulario from './components/pages/TabelaAjudantes'
  import Signup from './components/pages/Signup'
  import useAuth from './context/useAuth'
  
  const Private = ({Item}) => {
    const {signed} = useAuth();
    return signed > 0? <Item/> : <Company/>
  }
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Container customClass='min-height'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Doar" element={<Doar />} />
            <Route path="/Receber" element={<Receber />} />
            <Route path="/CarrinhoDoar" element={<CarrinhoDoar />} />
            <Route path="/Formulario" element={<Private Item={Formulario}/>} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    )
  }
  
  export default App
  