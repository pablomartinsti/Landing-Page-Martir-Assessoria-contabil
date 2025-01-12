import { Container, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/foto3.jpg";

function Experts() {
  return (
    <Container>
      <Main>
        <Box>
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nossos Especialistas{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ajudam a Identificar e
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Resolver Problemas
            </motion.h1>
          </div>
          <motion.div className="box-card">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <h4>Planejamento Tributário</h4>
              <p>
                Optimizamos sua estratégia tributária para reduzir o pagamento
                de impostos e evitar problemas com a Receita Federal.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h4>Regularização Fiscal</h4>
              <p>
                Regularizamos sua situação fiscal, corrigindo erros e omissões
                passadas, evitando multas e penalidades.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            <h4>Defesa Fiscal</h4>
            <p>
              Representamos você em processos fiscais, garantindo seus direitos
              e defendendo seus interesses perante a Receita Federal.
            </p>
          </motion.div>
        </Box>
        <motion.img
          src={foto}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
      </Main>
    </Container>
  );
}

export default Experts;
