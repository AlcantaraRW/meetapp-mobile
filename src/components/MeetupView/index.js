import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import logo from '~/assets/logo.png';

import {
  Container,
  Banner,
  InfoContainer,
  Title,
  Description,
  Info,
  RegistrationsClosedText,
  SubscribeButton,
} from './styles';

export default function MeetupView({ meetup, buttonText, onSubmit }) {
  const imageUrl = meetup.image.url.replace('localhost', '10.0.2.2');

  const formattedDate = format(
    parseISO(meetup.date),
    "dd 'de' MMMM', às' H'h'",
    { locale: pt },
  );

  return (
    <Container>
      <Banner source={{ uri: imageUrl }} />
      <InfoContainer>
        <Title>{meetup.title}</Title>
        <Description>{meetup.description}</Description>
        <Info>{formattedDate}</Info>
        <Info>{meetup.location}</Info>
        <Info>Organizador: {meetup.organizer.name}</Info>
        {meetup.past ? (
          <RegistrationsClosedText>
            INSCRIÇÕES ENCERRADAS
          </RegistrationsClosedText>
        ) : (
          <SubscribeButton onPress={onSubmit}>{buttonText}</SubscribeButton>
        )}
      </InfoContainer>
    </Container>
  );
}
