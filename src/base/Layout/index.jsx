import * as React from 'react';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
