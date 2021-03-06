import styled from 'styled-components/native';
import { Platform } from 'react-native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
  background-color: #312e38;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 24px 0 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const UserAvatar = styled.Image`
  width: 130px;
  height: 136px;
  border-radius: 98px;
  align-self: center;
  margin-top: 5px;
`;
