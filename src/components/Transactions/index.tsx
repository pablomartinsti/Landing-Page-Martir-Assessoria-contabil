import { Container, Main, Section } from "./styles";
import { motion } from "framer-motion";
import perfil from "../../assets/perfil.jpg";

function Transactions() {
  return (
    <Container>
      <Main>
        <Section>
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transações Financeiras
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Serão Monitoradas
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              com Maior Rigor
            </motion.h1>
          </div>
          <div className="box">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                <h4>Análise detalhada de transações</h4>A Receita Federal está
                utilizando tecnologia avançada para analisar as transações
                financeiras em busca de padrões suspeitos e inconsistências.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <h4> Aumento de auditorias</h4>
              <p>
                O número de auditorias fiscais está aumentando, com foco em
                operações financeiras e declarações de imposto de renda.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="cards"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h4>Risco de penalidades</h4>
            <p>
              Empresas e indivíduos que não estiverem em conformidade com as
              novas normas estão sujeitos a multas e penalidades severas.
            </p>
          </motion.div>
        </Section>
        <motion.img
          src={perfil}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
        />
      </Main>
    </Container>
  );
}

export default Transactions;
