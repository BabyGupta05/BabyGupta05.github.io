import React,{useEffect} from "react";
import AOS from "aos";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up"  className="contact-continer sections" id="contact">
      <h1 className="heading">
        <span className="sauce">Contact Me</span>
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Send an Email. I would love to talk more to you. 
        </p>
        <div className="button-container">
          <a
            className="contact-button"
            href="mailto: codecode355@gmail.com"
          >
            Send an email
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a
            className="contact-button"
            href="tel:+918766946031"
          >
            Give a Ring
          </a>
        </div>
      </div>
    </section>
  );
}
