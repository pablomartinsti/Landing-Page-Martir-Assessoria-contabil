import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "./styles";

function Modal() {
  const [formStatus, setFormStatus] = useState("");

  const formRef = useRef<HTMLFormElement | null>(null);
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
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita fechar o modal ao clicar dentro dele
      >
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
          <textarea id="message" name="message" rows={4} required></textarea>
          <button type="submit">Enviar</button>
          {formStatus && <p>{formStatus}</p>}
        </form>
      </div>
    </Container>
  );
}

export default Modal;
