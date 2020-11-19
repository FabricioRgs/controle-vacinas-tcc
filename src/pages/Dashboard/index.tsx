import React, { useCallback } from 'react';

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

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  // const [vacinas, setVacinas] = useState<VacinaProps[]>([]);

  const { user } = useAuth();
  // const { navigate } = useNavigation();

  // const navigateToProfile = useCallback(() => {
  //   navigate('Profile');
  // }, [navigate]);

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
        data={api.vacinas}
        keyExtractor={(vacinas) => String(vacinas.id)}
        ListHeaderComponent={
          <VacinasListTitle>Próximas Vacinas</VacinasListTitle>
        }
        ListFooterComponent={<VacinaListFooter />}
        renderItem={(vacinas) => (
          <VacinaContainer>
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
