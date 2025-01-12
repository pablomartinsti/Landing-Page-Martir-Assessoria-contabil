import { Container } from "./styles";

import Star from "./components/Start";
import Oversight from "./components/Oversight";
import Transactions from "./components/Transactions";
import Regularize from "./components/Regularize";
import Experts from "./components/Experts";
import Criteria from "./components/Criteria";
import Tips from "./components/Tips";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Star />
      <Oversight />
      <Transactions />
      <Regularize />
      <Experts />
      <Criteria />
      <Tips />
      <Contact />
    </Container>
  );
}

export default App;
