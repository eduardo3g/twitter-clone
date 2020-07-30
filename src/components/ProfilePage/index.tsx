import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Eduardo Santana</h1>
        <h2>@eduardo3g</h2>

        <p>
          Integration Engineer at <a href="https://linkapi.solutions">@LinkApi</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 27 de Março de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>41</strong>
          </span>
          <span>
            <strong>218 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;