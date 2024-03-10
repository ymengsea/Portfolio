import React from "react";
import "./Message.css";
const Sendmessage = () => {
  return (
    <div className="container py-5">
      <h2>Get in touch</h2>
      <p>i'm here for you! How can i help you?</p>
      <form action="">
        <input type="text" className="form-control my-3 input" placeholder="Full Name" name="Name" required />
        <input type="email" className="form-control my-3 input" placeholder="Email" name="Emial" required />
        <textarea className="form-control my-3 textarea" name="Messages" id="" cols="30" rows="10" placeholder="Messages" required></textarea>
        <button type="submit" class="send_message_btn my-3">
          Send messages
        </button>
      </form>
    </div>
  );
};

export default Sendmessage;
