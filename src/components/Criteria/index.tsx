import { Container, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/foto4.jpg";

function Criteria() {
  return (
    <Container>
      <Main>
        <motion.img
          src={foto}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <Box>
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entenda os Novos{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Critérios de{" "}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Monitoramento
            </motion.h1>
          </div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <h4>Análise de dados</h4>
            <p>
              A Receita Federal utiliza algoritmos para identificar padrões
              suspeitos de movimentação financeira, como transações incomuns ou
              desproporcionais à renda declarada.
            </p>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h4>Monitoramento de transações internacionais</h4>
            <p>
              A Receita Federal está intensificando o controle sobre transações
              internacionais, como transferências de dinheiro, investimentos e
              importações.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7 }}
          >
            <h4>Compartilhamento de informações</h4>
            <p>
              A Receita Federal está intensificando o compartilhamento de
              informações com outras instituições, como bancos e empresas de
              cartão de crédito, para complementar suas análises.
            </p>
          </motion.div>
        </Box>
      </Main>
    </Container>
  );
}

export default Criteria;
