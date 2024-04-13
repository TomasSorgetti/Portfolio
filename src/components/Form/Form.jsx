import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import styles from "./Form.module.scss";
const EmailSend = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submited, setSubmited] = useState(false);
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };
  function handleKeyDown(e) {
    const textarea = e.target;
    const maxLength = textarea.maxLength;
    const currentLength = textarea.value.length;
    const keyPressed = e.key;

    if (currentLength >= maxLength && keyPressed !== "Backspace") {
      e.preventDefault();
    }
  }
  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    if (!form.name || !form.email || !form.subject || !form.message) {
      return;
    }
    emailjs
      .sendForm(
        "service_ilfyop4",
        "template_bc0qyva",
        e.target,
        "4IAZoxJjzZX5E3IYV"
      )
      .then((res) => {
        if (res) {
          console.log(res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent",
            text: "Thank you for your message! I will read and respond shortly",
            showConfirmButton: false,
            timer: 3500,
          });
          resetForm();
          setSubmited(false);
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error",
          text: "Opps! Something went wrong",
          timer: 3000,
        });
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.nameCont}>
        <label>Name*</label>
        <input
          placeholder="John Doe"
          onChange={handleChange}
          name="name"
          type="text"
          value={form.name}
        />
        {submited && form.name === "" && (
          <span className={styles.errorField}>Please fill in this field</span>
        )}
      </div>
      <div className={styles.emailCont}>
        <label name="email">E-mail address*</label>
        <input
          placeholder="johndoe@mail.com"
          onChange={handleChange}
          name="email"
          type="email"
          value={form.email}
        />
        {submited && form.email === "" && (
          <span className={styles.errorField}>Please fill in this field</span>
        )}
      </div>
      <div className={styles.subjectCont}>
        <label>Subject*</label>
        <input
          placeholder="Developer Interview"
          onChange={handleChange}
          name="subject"
          type="text"
          value={form.subject}
        />
        {submited && form.subject === "" && (
          <span className={styles.errorField}>Please fill in this field</span>
        )}
      </div>
      <div className={styles.messageCont}>
        <label>Message*</label>
        <textarea
          placeholder="Drop me a message and let's start a conversation!"
          onChange={handleChange}
          name="message"
          maxLength={500}
          onKeyDown={handleKeyDown}
          value={form.message}
        ></textarea>
        <span className={styles.msgCount}>{form.message.length}/500</span>
        {submited && form.message === "" && (
          <span className={styles.errorField}>Please fill in this field</span>
        )}
      </div>
      <div className={styles.buttonCont}>
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default EmailSend;
