import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Köszönjük, ${form.name}! Üzeneted megkaptuk.`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Neved"
        value={form.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Üzeneted"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Küldés</button>
    </form>
  );
};

export default ContactForm;