import React from 'react';
import Header from './components/Header';

import dadosIniciais from '../src/data/dados_iniciais.json';

import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import { Container } from './styles';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Fron-end? Trabalhando na área"}
      />

      {dadosIniciais.categorias.map(categoria => (
        <Carousel
          ignoreFirstVideo
          category={categoria}
        />
      ))}

      <Footer />
    </Container>
  );
}

export default App;
