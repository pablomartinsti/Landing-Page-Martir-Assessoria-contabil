import { useRef, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isModal, setIsModal] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Definindo o tipo correto para formRef
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setFormStatus("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      setFormStatus("Erro: O formulário não foi encontrado.");
      return;
    }

    const SERVICE_ID = "service_ocg8rum";
    const TEMPLATE_ID = "template_q6hlaou";
    const PUBLIC_KEY = "6Z2XpytWyhkd4bo7I";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setFormStatus("Mensagem enviada com sucesso!"); // Mensagem de sucesso
        formRef.current?.reset(); // Limpa os campos do formulário
      },
      (error) => {
        console.error(error.text);
        setFormStatus("Erro ao enviar mensagem. Tente novamente."); // Mensagem de erro
      }
    );
  };

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

          <h2>
            Entre em contato conosco para uma avaliação gratuita e descubra como
            podemos ajudar a manter sua situação fiscal em ordem.
          </h2>

          <div className="box-button">
            <a onClick={handleOpenModal}>Agende uma Consultoria </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5534997624502&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um Especialista
            </a>
          </div>
        </div>
      </motion.div>
      {isModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro dele
          >
            <button className="close-button" onClick={handleCloseModal}>
              x
            </button>
            <div>
              <h2>Agende sua Consultoria</h2>
              <p>Preencha o formulário abaixo para agendar sua consultoria.</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="from_name" required />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="from_email" required />
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>
              <button type="submit">Enviar</button>
              {formStatus && <p>{formStatus}</p>}
            </form>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Contact;
