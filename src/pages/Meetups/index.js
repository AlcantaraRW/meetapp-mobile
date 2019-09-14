import React, { useEffect, useState, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  format,
  subDays,
  addDays,
  isBefore,
  isEqual,
  parseISO,
  setHours,
  setMinutes,
  setSeconds,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Header from '~/components/Header';

import { Container, DateSelection, DateTitle, MeetupList } from './styles';
import Background from '~/components/Background';
import MeetupView from '~/components/MeetupView';
import api from '~/services/api';

export default function Meetups({ navigation }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date],
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          page: 1,
          date,
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  function incrementDate() {
    setDate(addDays(date, 1));
  }

  function decrementDate() {
    setDate(subDays(date, 1));
  }

  return (
    <Background>
      <Header />
      <DateSelection>
        <TouchableOpacity onPress={decrementDate}>
          <Icon name="chevron-left" size={36} color="#fff" />
        </TouchableOpacity>
        <DateTitle>{formattedDate}</DateTitle>

        <TouchableOpacity onPress={incrementDate}>
          <Icon name="chevron-right" size={36} color="#fff" />
        </TouchableOpacity>
      </DateSelection>
      <Container>
        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupView meetup={item} buttonText="Inscrever-me" />
          )}
        />
      </Container>
    </Background>
  );
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
