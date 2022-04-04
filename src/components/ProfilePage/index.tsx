import React from 'react';

import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Guilherme Raposo</h1>
        <h2>@guirapososilva</h2>

        <p>Front-End Developer</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 17 de março de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>200 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
