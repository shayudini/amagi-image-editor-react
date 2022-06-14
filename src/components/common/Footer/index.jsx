const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <p className="text-sm">
        <a
          href="https://www.amagi.io/about"
          className="font-bold uppercase tracking-widest underline decoration-transparent decoration-wavy decoration-2 underline-offset-4 transition-all duration-500 ease-in-out hover:decoration-amber-500"
        >
          Amagi
        </a>
        , All rights reserved. © {new Date().getFullYear()}, Built with{' '}
        <a
          href="https://www.reactjs.org"
          className="font-semibold underline decoration-transparent decoration-wavy decoration-2 underline-offset-4 transition-all duration-500 ease-in-out hover:decoration-cyan-500"
        >
          <em>React</em>
        </a>{' '}
        by{' '}
        <a
          href="mailto:shayudini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold tracking-wider underline decoration-transparent decoration-wavy decoration-2 underline-offset-4 transition-all duration-500 ease-in-out hover:decoration-pink-500"
        >
          Sharif Hayudini
        </a>
      </p>
    </footer>
  );
};
export default Footer;
