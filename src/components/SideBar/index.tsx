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

import {
  ProfileGuilhermeRodz,
  RocketseatLogo,
  ProfileDiegoFernandes,
  ProfileGabrielFroes,
  ProfileErickWendel,
} from '../../styles/Avatars';

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
                name="Erick Wendel"
                nickname="@erickwendel_"
                avatar={ProfileErickWendel}
              />,
              <FollowSuggestion
                name="Gabriel Froes"
                nickname="@GabrielFroes"
                avatar={ProfileGabrielFroes}
              />,
              <FollowSuggestion
                name="Rocketseat"
                nickname="@rocketseat"
                avatar={RocketseatLogo}
              />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
                avatar={ProfileGuilhermeRodz}
              />,
              <FollowSuggestion
                name="Diego Fernandes"
                nickname="@dieegosf"
                avatar={ProfileDiegoFernandes}
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>  
  );
}

export default SideBar;