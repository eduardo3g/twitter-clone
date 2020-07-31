import React from 'react';

import {
  Container,
} from './styles';

interface Props {
  subject: string;
  description: string;
}

const News: React.FC<Props> = ({
  subject,
  description
}) => {
  return (
    <Container>
      <strong>{subject}</strong>
      <span>{description}</span>
    </Container>
  );
}

export default News;