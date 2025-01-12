import { Container, Section, Main, Img, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/foto 2.jpg";
function Regularize() {
  return (
    <Container>
      <Img src={foto} />
      <Section>
        <Main>
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Regularize Sua Situação Fiscal Antes que
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {" "}
              Seja Tarde
            </motion.h1>
          </div>
          <Box>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h4>Análise detalhada dos seus registros financeiros</h4>
              <p>
                Nossos especialistas identificam potenciais problemas fiscais e
                orientam você sobre as medidas necessárias para regularizar sua
                situação.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4>Elaboração de planos de regularização fiscal</h4>
              <p>
                Elaboramos um plano personalizado para que você possa
                regularizar sua situação com segurança e eficiência, evitando
                multas e penalidades.
              </p>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <h4>Assessoria especializada em questões fiscais</h4>
              <p>
                Oferecemos suporte completo, desde o planejamento tributário até
                a representação em processos fiscais, garantindo sua
                tranquilidade.
              </p>
            </motion.div>
          </Box>
        </Main>
      </Section>
    </Container>
  );
}

export default Regularize;
