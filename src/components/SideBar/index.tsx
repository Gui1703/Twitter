import React from 'react';
import StickyBox from 'react-sticky-box';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper,
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
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
              <News
                title="Assuntos do momento no Brasil"
                theme="Bootcamp da Rocketseat"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
