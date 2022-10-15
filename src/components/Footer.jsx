import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Certificate Generator ${year}`}</footer>;
};

export default Footer;
