import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import {
  Container,
  BackButton,
  CampanhasList,
  CampanhasListTitle,
  CampanhaListFooter,
  CampanhaContainer,
  CampanhaName,
  CampanhaData1,
  CampanhaData2,
  Label,
  CampanhaIdades,
} from './styles';

const Campanhas: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} color="#999591" />
      </BackButton>

      <CampanhasList
        data={api.campanhas}
        keyExtractor={(campanha) => String(campanha.id)}
        ListHeaderComponent={<CampanhasListTitle>Campanhas</CampanhasListTitle>}
        ListFooterComponent={<CampanhaListFooter />}
        renderItem={(campanha) => (
          <CampanhaContainer>
            <CampanhaName>{campanha.item.descricao}</CampanhaName>
            <CampanhaData1>{campanha.item.data1}</CampanhaData1>
            <Label>à</Label>
            <CampanhaData2>{campanha.item.data2}</CampanhaData2>
            <CampanhaIdades>* {campanha.item.idades}</CampanhaIdades>
          </CampanhaContainer>
        )}
      />
    </Container>
  );
};

export default Campanhas;
