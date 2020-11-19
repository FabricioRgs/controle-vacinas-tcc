import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const LabelApp = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 44px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #00ffff;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;

export const ImageSignIn = styled.Image`
  height: 125px;
  width: 125px;
  margin-top: 60px;
`;
