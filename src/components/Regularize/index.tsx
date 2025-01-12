import { Container, Section, Main, Img, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/foto 2.jpg";
function Regularize() {
  return (
    <Container>
      <Img
        src={foto}
        alt="Pessoa analisando regularizar sua situação tributária"
      />
      <Section>
        <Main>
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Regularize Sua Situação Fiscal com {"\n"}
              Segurança e Eficiência
            </motion.h1>
          </div>
          <Box>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2>Análise detalhada dos seus registros financeiros</h2>
              <h3>
                Nossos especialistas identificam potenciais problemas fiscais e
                orientam você sobre as medidas necessárias para regularizar sua
                situação.
              </h3>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>Elaboração de planos de regularização fiscal</h2>
              <h3>
                Elaboramos um plano personalizado para que você possa
                regularizar sua situação com segurança e eficiência, evitando
                multas e penalidades.
              </h3>
            </motion.div>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <h2>Assessoria especializada em questões fiscais</h2>
              <h3>
                Oferecemos suporte completo, desde o planejamento tributário até
                a representação em processos fiscais, garantindo sua
                tranquilidade.
              </h3>
            </motion.div>
          </Box>
        </Main>
      </Section>
    </Container>
  );
}

export default Regularize;
