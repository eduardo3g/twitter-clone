import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  // Avatar,
  Content,
  Header,
  Dot,
  Description,
  // ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  nickname: string;
  avatar: string;
  time: string;
  description: string;
  tweetImage: string;
}

const Tweet: React.FC<Props> = ({
  name,
  nickname,
  avatar,
  time,
  description,
  tweetImage,
}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        {/* <Avatar /> */}
        <img src={avatar} alt={name} />

        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{nickname}</span>
            <Dot />
            <time>{time}</time>
          </Header>

          <Description>
            {description}
          </Description>

          {/* <ImageContent /> */}
          <img src={tweetImage} alt={nickname} />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              24
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;