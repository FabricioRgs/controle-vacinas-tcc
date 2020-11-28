import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  VacinasList,
  VacinasListTitle,
  BtToggle,
  VacinaContainer,
  VacinaName,
  VacinaDataText,
  VacinaStatusContainer,
  VacinaStatusText,
  VacinaDependente,
  VacinaListFooter,
} from './styles';

import { VacinaProps } from '~/@types';

const Dashboard: React.FC = () => {
  const [vacinasArray, setVacinasArray] = useState<VacinaProps[]>([
    ...api.vacinas,
  ]);
  const navigation = useNavigation();

  // const [vacinas, setVacinas] = useState<VacinaProps[]>([]);

  const { user } = useAuth();
  // const { navigate } = useNavigation();

  // const navigateToProfile = useCallback(() => {
  //   navigate('Profile');
  // }, [navigate]);

  const handleSetVacinado = useCallback(
    (item: VacinaProps) => {
      const newArray = vacinasArray.map((i) => {
        if (i.id === item.id) {
          // eslint-disable-next-line no-param-reassign
          i.status = 'Vacinado';
        }
        return i;
      });

      setVacinasArray(newArray);
    },
    [vacinasArray],
  );

  const handleRemoveVacinado = useCallback(
    (item: VacinaProps) => {
      const newArray = vacinasArray.map((i) => {
        if (i.id === item.id) {
          // eslint-disable-next-line no-param-reassign
          i.status = 'Pendente';
        }
        return i;
      });

      setVacinasArray(newArray);
    },
    [vacinasArray],
  );

  const handleVacina = useCallback(
    (item: VacinaProps) => {
      if (item.status !== 'Vacinado') {
        Alert.alert(
          'Atenção',
          `O ${item.dependente} foi realmente recebeu a vacina de ${item.descricao}?`,
          [
            {
              text: 'Não',
              style: 'cancel',
            },
            { text: 'Sim', onPress: () => handleSetVacinado(item) },
          ],
          { cancelable: false },
        );
      } else {
        Alert.alert(
          'Atenção',
          `Deseja realmente remover a vacina de ${item.descricao} do ${item.dependente}?`,
          [
            {
              text: 'Não',
              style: 'cancel',
            },
            { text: 'Sim', onPress: () => handleRemoveVacinado(item) },
          ],
          { cancelable: false },
        );
      }
    },
    [handleSetVacinado, handleRemoveVacinado],
  );

  return (
    <Container>
      <Header>
        <BtToggle onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" style={{ color: '#F5F5F5', fontSize: 28 }} />
        </BtToggle>

        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>

      <VacinasList
        data={vacinasArray}
        keyExtractor={(vacinas) => String(vacinas.id)}
        ListHeaderComponent={
          <VacinasListTitle>Próximas Vacinas</VacinasListTitle>
        }
        ListFooterComponent={<VacinaListFooter />}
        renderItem={(vacinas) => (
          <VacinaContainer onPress={() => handleVacina(vacinas.item)}>
            <VacinaName>{vacinas.item.dependente}</VacinaName>
            <VacinaDependente>{vacinas.item.data}</VacinaDependente>
            <VacinaDataText>{vacinas.item.descricao}</VacinaDataText>
            <VacinaStatusContainer status={vacinas.item.status}>
              <VacinaStatusText>{vacinas.item.status}</VacinaStatusText>
            </VacinaStatusContainer>
          </VacinaContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
