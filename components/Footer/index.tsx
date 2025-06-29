const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Moje Aplikace. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
};

export default Footer;
