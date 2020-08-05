import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/14303184?s=400&u=61fe9786fb1bde05b4edbeb887e29f9cc7a1850f&v=4" alt="Lucas"/>
        <div>
          <strong>Lucas Lourenço</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusista da cachaça.

        <br/><br/>
        Apaixonado por você.
      </p>

      <footer>
        <p>Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;