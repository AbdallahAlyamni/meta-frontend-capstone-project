import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <nav>
        <Nav/>
      </nav>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
