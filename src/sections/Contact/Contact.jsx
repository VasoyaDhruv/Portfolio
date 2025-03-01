import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
    .sendForm(
      "service_2ywni7r",
      "template_036hy68",
      e.target,
      "AZKS3fpnL2h2YQjZV"
    )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setLoading(false);
        e.target.reset(); // Reset the form after submission
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>

        <input className="hover btn" type="submit" value=  {loading ? "Sending..." : "Submit"} style={{cursor:"pointer"}} />

        {!status && <p style={{color:"green", fontWeight:"900",}}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
