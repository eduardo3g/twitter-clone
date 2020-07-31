import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="O que está acontecendo"
            elements={[
              <News
                subject="Covid-19: OMS registra recorde diário de novos casos no mundo"
                description="Novos casos de coronavírus no mundo"
              />,
              <News
                subject="Após 36 anos, 'Chaves' deixa de ser exibido no SBT - e no Brasil"
                description="Entretenimento"
              />,
              <News
                subject="Dá para preparar um filé mignon em 10 minutos? Teve isso no Masterchef desta terça"
                description="Culinária"
              />,
              <News
                subject="Assuntos do momento no Brasil"
                description="Bootcamp da Rocketseat"
              />,
            ]}
          />

          <List 
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="Gabriel Froes"
                nickname="@GabrielFroes"
              />,
              <FollowSuggestion
                name="Rocketseat"
                nickname="@rocketseat"
              />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
              <FollowSuggestion
                name="Diego Fernandes"
                nickname="@dieegosf"
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>  
  );
}

export default SideBar;