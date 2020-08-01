import React from 'react';

import Tweet from '../Tweet';

import {
  Container,
  Tab,
  Tweets,
} from './styles';

import {
  RocketseatLogo,
  GoogleLogo,
  DellLogo,
} from '../../styles/Avatars';

import {
  DellTweetImage,
  GoogleTweetImage,
  RocketseatTweetImage,
} from '../../styles/TweetImages';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          name="Dell"
          nickname="@Dell"
          avatar={DellLogo}
          time="31 de jul"
          description="Some #LittleThings in life will glue you to your seat. #DellXPS"
          tweetImage={DellTweetImage}
        />

        <Tweet
          name="Google"
          nickname="@Google"
          avatar={GoogleLogo}
          time="30 de jul"
          description="Who is it for? ⬇️"
          tweetImage={GoogleTweetImage}
        />

        <Tweet
          name="Rocketseat"
          nickname="@rocketseat"
          avatar={RocketseatLogo}
          time="27 de jul"
          description="Ah, e lembrando que se você ainda não se inscreveu não precisa se preocupar, corre que dá tempo. 🚀"
          tweetImage={RocketseatTweetImage}
        />
      </Tweets>
    </Container>
  );
}

export default Feed;