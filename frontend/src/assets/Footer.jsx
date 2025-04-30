
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-made">
        <p>Made with ❤️ by <strong>acid_G9</strong></p>
        <p>&copy; {year} CuraScan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
