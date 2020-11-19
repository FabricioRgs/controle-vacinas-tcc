import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { CampanhaProps } from '~/@types';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 0 30px 0;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 24px 0 24px;
`;

export const CampanhasList = styled(
  FlatList as new () => FlatList<CampanhaProps>,
)`
  flex: 1;
  padding: 22px 24px 16px;
`;

export const CampanhasListTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
`;

export const CampanhaContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  /* flex-direction: row; */
  /* align-items: center; */
`;

export const CampanhaInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const CampanhaName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #f4ede8;
  margin-bottom: 10px;
`;

export const CampanhaDataText = styled.Text`
  color: #999591;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  line-height: 28px;
`;

export const CampanhaListFooter = styled.View`
  height: 25px;
`;

export const CampanhaData1 = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #daa520;
`;

export const CampanhaData2 = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #f53646;
`;

export const Label = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: #999591;
  margin-left: 70px;
`;

export const CampanhaIdades = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  color: #999591;
  margin-top: 10px;
`;
