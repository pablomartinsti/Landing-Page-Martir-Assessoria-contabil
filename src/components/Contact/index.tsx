import { Container } from "./styles";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Container>
      <motion.div
        className="main"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1>Entre em Contato e Garanta Sua</h1>
          <h1>Conformidade Fiscal</h1>

          <h3>
            Entre em contato conosco para uma avaliação gratuita e descubra como
            podemos ajudar a manter sua situação fiscal em ordem.
          </h3>

          <div className="box-button">
            <button>Agendar Consulta</button>
            <button>Conheça nossos Serviços</button>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default Contact;
