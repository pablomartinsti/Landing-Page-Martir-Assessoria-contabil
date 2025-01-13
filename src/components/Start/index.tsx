import { Container, Img, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/receita-federal-regularizacao.png";
import Modal from "../modal";
function Star() {
  return (
    <Container>
      <Img src={foto} alt="Background" />
      <Main>
        <Box>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Receita Federal em Ação:{"\n"}
            Garanta 100% em Conformidade {"\n"}
            com Suas Transações Financeiras
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            Evite Multas e Problemas Fiscais.{"\n"}
            Conte com Nossa Assessoria Especializada em Regularização.
          </motion.h2>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fbq("track", "Contact")}
            initial={{ opacity: 0, y: 50, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              scale: [1, 1.05, 1], // Efeito de pulsar
              boxShadow: [
                "0 0 10px rgba(255, 193, 7, 0.4)",
                "0 0 20px rgba(255, 193, 7, 0.6)",
                "0 0 10px rgba(255, 193, 7, 0.4)",
              ],
            }}
            transition={{
              duration: 1.8, // Para o fade-in e movimento inicial
              delay: 0.8, // Atraso do efeito de aparecer
              scale: {
                duration: 1.5, // Duração de cada ciclo do efeito de pulsar
                repeat: Infinity, // Faz o pulsar repetir continuamente
                repeatType: "loop", // Ciclo contínuo
              },
              boxShadow: {
                duration: 1.5, // Duração do brilho no efeito de pulsar
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            Fale com um Especialista Sem Custos
          </motion.a>
        </Box>
        <Modal />
      </Main>
    </Container>
  );
}

export default Star;
