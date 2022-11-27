import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainFooter from './components/sidebarNewFooter/blmFooter';
import Home from './views/home';
import Product from './views/productView';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <MainFooter></MainFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
