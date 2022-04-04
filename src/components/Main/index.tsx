import React from 'react';
import ProfilePage from '../ProfilePage';

import {
  BackIcon,
  BellIcon,
  BottomMenu,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  ProfileInfo,
  SearchIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Guilherme Raposo</strong>
          <span>800 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
