import { motion } from "framer-motion";
import { Container } from "./styles";

function Oversight() {
  return (
    <Container>
      <main>
        <div className="title">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nova Fiscalização da Receita Federal{" "}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            a Partir de 2025
          </motion.h1>
        </div>
        <div className="description">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              A partir de janeiro de 2025, a Receita Federal intensificou seu
              monitoramento de transações financeiras, incluindo operações em
              conta corrente, investimentos e pagamentos online. O objetivo é
              combater a sonegação fiscal e garantir a justiça tributária.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
