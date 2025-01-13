import { Container, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/Especialistas-Ajudam-Identificar.jpg";

function Experts() {
  return (
    <Container>
      <Main>
        <Box>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nossos Especialistas{"\n"}
              Ajudam a Identificar e{"\n"}
              Resolver Problemas {"\n"}
            </motion.h1>
          </div>
          <motion.div className="box-card">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <h2>Planejamento Tributário</h2>
              <h3>
                Optimizamos sua estratégia tributária para reduzir o pagamento
                de impostos e evitar problemas com a Receita Federal.
              </h3>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2>Regularização Fiscal</h2>
              <h3>
                Regularizamos sua situação fiscal, corrigindo erros e omissões
                passadas, evitando multas e penalidades.
              </h3>
            </motion.div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            <h2>Defesa Fiscal</h2>
            <h3>
              Representamos você em processos fiscais, garantindo seus direitos
              e defendendo seus interesses perante a Receita Federal.
            </h3>
          </motion.div>
        </Box>
        <motion.img
          src={foto}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          alt="Especialista analisando dados financeiros e fiscais em um ambiente de escritório"
        />
      </Main>
    </Container>
  );
}

export default Experts;
