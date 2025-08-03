import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Kontakt</h2>
      <p>Email: <a href="mailto:din.email@domain.com">din.email@domain.com</a></p>
      <p>
        <a href="https://github.com/din-bruger" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
        <a href="https://linkedin.com/in/din-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}

export default Contact;