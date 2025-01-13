import { Container, Img, Main, Box } from "./styles";
import { motion } from "framer-motion";
import foto from "../../assets/Dicas-Essenciais.jpg";
import { AiFillCaretDown } from "react-icons/ai";

function Tips() {
  return (
    <Container>
      <Img src={foto} />
      <Main>
        <Box>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dicas Essenciais para Evitar Problemas{"\n"}
              com a Receita Federal
            </motion.h1>
          </div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AiFillCaretDown size={100} color=" #d7d4cc;" />
            <div>
              <h2>Declare seus rendimentos corretamente</h2>
              <h3>
                Informe todos os seus rendimentos no imposto de renda, incluindo
                salários, rendimentos de investimentos e outros ganhos.
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AiFillCaretDown size={100} color=" #d7d4cc;" />
            <div>
              <h2>Mantenha seus registros financeiros organizados</h2>
              <h3>
                Documente todas as suas transações financeiras e guarde os
                comprovantes de forma organizada, para facilitar a fiscalização.
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <AiFillCaretDown size={100} color=" #d7d4cc;" />
            <div>
              <h2>Busque orientação profissional</h2>
              <h3>
                Contate um contador ou consultor fiscal para garantir que suas
                obrigações fiscais estão sendo cumpridas corretamente.
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <AiFillCaretDown size={100} color=" #d7d4cc" />
            <div>
              <h2>Fique atento às mudanças nas legislações</h2>
              <h3>
                A Receita Federal constantemente atualiza suas normas e
                procedimentos, por isso é importante se manter informado sobre
                as mudanças.
              </h3>
            </div>
          </motion.div>
        </Box>
      </Main>
    </Container>
  );
}

export default Tips;
