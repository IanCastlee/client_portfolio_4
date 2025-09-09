import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {year} Jhon Doe. All rights reserved.</p>
    </div>
  );
}

export default Footer;
