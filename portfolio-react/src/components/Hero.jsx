import meImg from '../assets/me.jpg';

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div>
        <h1>Hi, I'm Nguyen Trong Phat</h1>
        <p>
          4th-year Physics &amp; Informatics student. Deeply passionate and
          self-taught in Electronics, Internet of Things (IoT), and Information
          Technology. I love building bridges between hardware and software.
        </p>
        <a className="button" href="#contact">Get in Touch</a>
      </div>
      <img src={meImg} alt="Portrait of Nguyen Trong Phat" />
    </section>
  );
}
