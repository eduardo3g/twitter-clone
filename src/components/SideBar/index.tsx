import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

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
            // <FollowSuggestion
            //   name="Guilherme Rodz"
            //   nickname="@guilherme_rodz"
            // />
            <FollowSuggestion
              name="Diego Fernandes"
              nickname="@dieegosf"
            />
          ]}
        />

        <List 
          title="Talvez você curta"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />
      </Body>
    </Container>  
  );
}

export default SideBar;