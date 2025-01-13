import { Container } from "./styles";

import Star from "./components/Start";
import Oversight from "./components/NovaFiscalização";
import Transactions from "./components/TransaçõesFinanceiras";
import Regularize from "./components/Regularize";
import Experts from "./components/NossosEspecialistas";
import Criteria from "./components/NovosCritérios";
import Tips from "./components/DicasEssenciais";
import Contact from "./components/Contato";

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
