import Header from "./components/header.jsx";
import gallery from "./components/gallery.jsx";
import Footer from "./components/footer.jsx";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
