import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from './components/Coontainer/Container';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
      <Header />
      <Container />
      <div className="container">
        <Navigation />
        <Content />
      </div>
      <Footer />
    </div>
  );
}



// function Header() {
//   return (
//     <header className="header">
//       <h1>Заголовок</h1>
//     </header>
//   );
// }

// function Content() {
//   return (
//     <div className="content">
//       <h2>Центральний контент</h2>
//       <p>Довільний текст або компоненти можуть розміщуватись тут.</p>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div className='App'>
//       <Header />
//       <Footer />
//     </div>
//   )
// }


export default App;
