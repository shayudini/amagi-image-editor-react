import * as React from 'react';

const Header = () => {
  return (
    <header className="flex items-center p-4">
      <h1>
        <a
          href="https://www.amagi.io/about"
          className="font-semibold uppercase"
        >
          Amagi
        </a>
        <span> | </span>
        <a href="/">Image Editor - React</a> <code>1.0.0</code>
      </h1>
      <button className="ml-auto">Mode</button>
    </header>
  );
};
export default Header;
