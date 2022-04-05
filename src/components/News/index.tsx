import React from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  theme: string;
}

const News: React.FC<Props> = ({ title, theme }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{theme}</strong>
    </Container>
  );
};

export default News;
