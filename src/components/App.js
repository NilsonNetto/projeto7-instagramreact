import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="linha-horizontal-topo"></div>
      <Container />
      <div className="linha-horizontal-footer"></div>
      <Footer />
    </div>
  );
}

