import React from 'react';

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

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
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

        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />

        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />

        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
    </Container>  
  );
}

export default SideBar;