import React from 'react';
import './styles.css';
import Logo from '../../assets/logo-green.png';
import Button from '../../components/Button';

function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Ceflix" />
      </a>

      <Button href="/" className="ButtonLink">
        Novo Video
      </Button>

    </nav>
  );
}

export default Header;