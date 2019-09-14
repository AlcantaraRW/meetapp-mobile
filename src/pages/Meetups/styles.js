import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 0;
`;

export const DateSelection = styled.View`
  height: 30px;
  padding: 0 20px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
