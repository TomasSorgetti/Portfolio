
"use client";
import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import styles from "./Chatbot.module.scss";
import { steps } from "./ChatbotSteps";
import styled from 'styled-components';

const theme = {
  background: "rgba(8, 5, 22, 0.8);",
  fontFamily: "Bai Jamjuree",
  headerBgColor: "rgba(254, 0, 114, 0.6)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#19113d",
  botFontColor: "#ffff",
  userBubbleColor: "#150462",
  userFontColor: "#ffffff",
};

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const openChat = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };
    openChat();
  }, []);
  const StyledChatBot = styled(ChatBot)`
  .rsc-ts-bubble {
    max-width: 80%;
  }
`;
  return (
    <div className={styles.chatbotCont}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        Chat
      </button>
      <ThemeProvider theme={theme}>
        <StyledChatBot
          className={`${styles.chatbot} ${isOpen ? styles.open : ""}`}
          steps={steps}
          headerTitle="Chatbot"
          hideUserAvatar={true}
          hideBotAvatar={true}
          recognitionEnable={true}
          recognitionLang="es-ES"
          placeholder="Escribe tu mensaje..."
          customDelay={100}
          handleEnd={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 1500);
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatbotComponent;
