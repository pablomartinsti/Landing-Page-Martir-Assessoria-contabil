import { Container, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/Critérios-de-Monitoramento.jpg";

function Criteria() {
  return (
    <Container>
      <Main>
        <motion.img
          src={foto}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <Box>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entenda os Novos{"\n"}
              Critérios de{"\n"}
              Monitoramento{"\n"}
            </motion.h1>
          </div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <h2>Análise de dados</h2>
            <h3>
              A Receita Federal utiliza algoritmos para identificar padrões
              suspeitos de movimentação financeira, como transações incomuns ou
              desproporcionais à renda declarada.
            </h3>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2>Monitoramento de transações internacionais</h2>
            <h3>
              A Receita Federal está intensificando o controle sobre transações
              internacionais, como transferências de dinheiro, investimentos e
              importações.
            </h3>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.7 }}
          >
            <h2>Compartilhamento de informações</h2>
            <h3>
              A Receita Federal está intensificando o compartilhamento de
              informações com outras instituições, como bancos e empresas de
              cartão de crédito, para complementar suas análises.
            </h3>
          </motion.div>
        </Box>
      </Main>
    </Container>
  );
}

export default Criteria;
