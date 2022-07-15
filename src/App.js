import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

export default function App() {
  return (
    <div class="main">
      <Header />
      <div class="linha-horizontal-topo"></div>
      <Container />
      <div class="linha-horizontal-footer"></div>
      <Footer />
    </div>
  );
}

