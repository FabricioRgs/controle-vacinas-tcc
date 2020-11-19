import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { VacinaProps } from '~/@types';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;
export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'Roboto-Regular';
  line-height: 28px;
`;
export const UserName = styled.Text`
  color: #00ffff;
  font-family: 'Roboto-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const VacinasList = styled(FlatList as new () => FlatList<VacinaProps>)`
  padding: 22px 24px 16px;
`;

export const VacinasListTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
`;

export const VacinaContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  /* flex-direction: row; */
  /* align-items: center; */
`;

export const VacinaInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const VacinaName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

interface StatusProps {
  status: string;
}

export const VacinaStatusContainer = styled.View<StatusProps>`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  background: ${(props) =>
    props.status === 'Pendente' ? '#f53646' : '#10c278'};
  border-radius: 5px;
  margin: 5px 0;
`;

export const VacinaDataText = styled.Text`
  color: #999591;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  line-height: 28px;
`;

export const VacinaStatusText = styled.Text`
  color: #f5f5f5;
  font-family: 'Roboto-Regular';
`;

export const BtToggle = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const VacinaDependente = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: #daa520;
`;

export const VacinaListFooter = styled.View`
  height: 25px;
  background: #28262e;
`;
