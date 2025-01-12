import { Container, Img, Main, Box } from "./styles";
import { motion } from "framer-motion";
import backgorund from "../../assets/backgorund.png";
function Star() {
  return (
    <Container>
      <Img src={backgorund} alt="Background" />
      <Main>
        <Box>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Receita Federal Intensifica Fiscalização:
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Esteja em Conformidade com Suas
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            Transações Financeiras
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            Evite penalidades e multas com nossa assessoria contábil
            especializada em regularização fiscal.
          </motion.h3>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.8 }}
          >
            Agende uma Consultoria Gratuita
          </motion.button>
        </Box>
      </Main>
    </Container>
  );
}

export default Star;
