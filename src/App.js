import logo from "./logo.svg";
import "./App.css";
import Header from "./components/global/Header";
import Content from "./components/global/Content";
import Footer from "./components/global/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
