import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    try {
      console.log({ name, email, subject, message });

      // Handle success
      console.log("Request sent successfully!");
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error occurred:", error);
    }

    setIsSending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name (optional) */}
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      {/* Email (required) */}
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      {/* Subject (required) */}
      <div>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
      </div>

      {/* Message (required) */}
      <div>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>

      {/* Send Button */}
      <button type="submit" disabled={isSending}>
        Send
      </button>
    </form>
  );
}
