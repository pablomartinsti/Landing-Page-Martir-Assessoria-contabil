import { Container, Main, Section } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/Monitoramento-Rigoroso-de-Transações-Financeiras.jpg";

function Transactions() {
  return (
    <Container>
      <Main>
        <Section>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Receita Federal : {"\n"}
              Monitoramento Rigoroso{"\n"}
              de Transações Financeiras
            </motion.h1>
          </div>
          <div className="box">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>Análise detalhada de transações</h2>
              <h3>
                A Receita Federal está utilizando tecnologia avançada para
                monitorar transações financeiras, identificando padrões
                suspeitos e inconsistências que possam indicar irregularidades
                fiscais.
              </h3>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <h2> Aumento de auditorias</h2>
              <h3 style={{ marginTop: 10 }}>
                Empresas e indivíduos que não cumprirem as novas exigências da
                Receita Federal poderão enfrentar multas elevadas e penalidades
                rigorosas.
              </h3>
            </motion.div>
          </div>

          <motion.div
            className="cards"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2>Risco de penalidades</h2>
            <h3>
              Empresas e indivíduos que não cumprirem as novas exigências da
              Receita Federal poderão enfrentar multas elevadas e penalidades
              rigorosas.
            </h3>
          </motion.div>
        </Section>
        <motion.img
          src={foto}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          alt="Profissional analisando dados financeiros em um ambiente de escritório moderno"
        />
      </Main>
    </Container>
  );
}

export default Transactions;
