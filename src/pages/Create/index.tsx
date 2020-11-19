import React, { useRef, useCallback } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
// import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, BackButton, Title } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface ProfileFormData {
  name: string;
  datanascimento: string;
  genero: string;
}

const Create: React.FC = () => {
  const dataNascInputRef = useRef<TextInput>(null);
  const generoInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // const { name } = data;

        Alert.alert('Cadastro realizado com sucesso!');
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro!',
          'Ocorreu um erro ao atualizar seu dependente, tente novamente',
        );
      }
    },
    [navigation],
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>
            <View>
              <Title>Cadastrar dependente</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  dataNascInputRef.current?.focus();
                }}
              />
              <Input
                ref={dataNascInputRef}
                returnKeyType="next"
                autoCorrect={false}
                autoCapitalize="none"
                name="datanascimento"
                icon="anchor"
                placeholder="01/01/2000"
                onSubmitEditing={() => {
                  generoInputRef.current?.focus();
                }}
              />
              <Input
                ref={generoInputRef}
                name="genero"
                icon="umbrella"
                placeholder="Masculino ou Feminino"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>

            <Button>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Create;
