const Footer = () => {
  return (
    <footer className="py-6 text-lavender-100">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-peach-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-peach-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-peach-300 transition-colors"
          >
            Twitter
          </a>
        </div>
        <p className="mt-4 text-lavender-300">
          © {new Date().getFullYear()} Franklin Ma. Credit for opening turtle
          goes to Dribbble.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
