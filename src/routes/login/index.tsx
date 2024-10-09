import React, { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import {
  BackgroundImage,
  Button,
  ButtonsWrapper,
  ContentWrapper,
  GhostDiv,
  InputsWrapper,
  Logo,
  Ribbon,
  RibbonWrapper,
  Slide,
  SwipableContent,
  Wrapper,
} from './-login.styled';
import bigLogo from '../../images/assets/bigLogo.svg';
import weaver from '../../images/assets/weaver.png';
import { Typography } from '../../components/Typography/Typography';
import Carousel from '../../components/Carousel/Carousel';
import { Input } from '../../components/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import {
  defaultLoginValues,
  emailValidation,
  LoginData,
  passwordValidation,
} from './-login.types';
import { login } from '../../utils/supabase';
import { toast } from 'react-toastify';

export const Route = createFileRoute('/login/')({
  component: FreeRoutes,
});

function FreeRoutes() {
  const [hideButtons, setHideButtons] = useState(false);
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm<LoginData>({
    defaultValues: defaultLoginValues,
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setHideButtons(true);
  };

  const onSubmit = async (data: LoginData) => {
    const loginRes = await login(data);
    const { error } = loginRes;
    if (error) {
      toast(error.message, {
        type: 'error',
      });
    } else {
      navigate({ to: '/Inicio' });
    }
  };

  return (
    <Wrapper>
      <GhostDiv />
      <BackgroundImage src={weaver} />
      <ContentWrapper>
        <Logo src={bigLogo} alt='gym logo' />
        <Carousel
          currentIndex={hideButtons ? 1 : 0}
          slides={[
            <ButtonsWrapper>
              <Button variant='Secondary'>REGISTRARME</Button>
              <Button variant='Primary' onClick={handleLoginClick}>
                INICIAR SESIÓN
              </Button>
            </ButtonsWrapper>,
            <InputsWrapper onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name='email'
                rules={emailValidation}
                render={({ field }) => {
                  const { ref, ...rest } = field;
                  return (
                    <Input
                      placeholder='INGRESAR CORREO ELECTRONICO'
                      {...rest}
                    />
                  );
                }}
              />
              <Controller
                control={control}
                name='password'
                rules={passwordValidation}
                render={({ field }) => {
                  const { ref, ...rest } = field;
                  return (
                    <Input
                      type='password'
                      placeholder='INGRESAR CONTRASEÑA'
                      {...rest}
                    />
                  );
                }}
              />
              <Button
                type='submit'
                variant='Primary'
                onClick={isValid ? handleLoginClick : undefined}
                disabled={!isValid}
              >
                INICIAR SESIÓN
              </Button>
            </InputsWrapper>,
          ]}
        ></Carousel>
      </ContentWrapper>
      <RibbonWrapper>
        <Ribbon>
          <Typography fontFamily='Lexend Tera' fontSize='13px' fontWeight={800}>
            TU GIMNASIO AL ALCANCE DE TUS MANOS.
          </Typography>
        </Ribbon>
      </RibbonWrapper>
    </Wrapper>
  );
}
