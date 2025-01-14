import { motion } from "framer-motion";

import { Container } from "./styles";

function Oversight() {
  return (
    <Container>
      <main>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Receita Federal: Nova Fiscalização Entra{"\n"}
            em Vigor em 2025
          </motion.h1>
        </div>
        <div className="description">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Em janeiro de 2025, a Receita Federal iniciou um monitoramento
              mais rigoroso de transações financeiras, como movimentações em
              contas correntes, investimentos e pagamentos online. A meta é
              combater a sonegação fiscal e promover justiça tributária.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A nova fiscalização abrange um leque mais amplo de transações,
              incluindo movimentações em conta corrente, investimentos,
              pagamentos online e transferências internacionais. Isso significa
              que a Receita Federal está examinando mais de perto os seus
              registros financeiros.
            </motion.p>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Oversight;
