import BG from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundPosition: "center",
      }}
    >
      <footer className="footer md:gap-x-[30vw] p-10 md:place-content-center text-black">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </nav>
        <nav>
          <header className="footer-title">Oral Health</header>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teeth Whitening</a>
        </nav>
        <nav>
          <header className="footer-title">Our Address</header>
          <a className="link link-hover">Sylhet-3100, Bangladesh</a>
        </nav>
      </footer>
      <h6 className="text-center py-[25px] font-semibold">
        Copyright 2022 All Rights Reserved
      </h6>
    </div>
  );
};

export default Footer;
