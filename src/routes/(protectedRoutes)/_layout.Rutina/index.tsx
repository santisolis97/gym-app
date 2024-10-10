import { createFileRoute } from '@tanstack/react-router';
import { ScreenWrapper } from '../-layout.styled';
import gymRutine from '../../../images/assets/gymRutine.svg';
import sentadilla from '../../../images/assets/sentadilla.png';
import {
  ImgDesc,
  Name,
  RutinaWrapper,
  RutineImg,
  RutineImgContainer,
  Steps,
} from './-Rutina.styled';
import { Typography } from '../../../components/Typography/Typography';
import { colors } from '../../../utils/colors';
import { useSessionStore } from '../../../utils/useSessionStore';
import { useShallow } from 'zustand/shallow';
import React from 'react';
import { RutineSteps } from '../../../components/RutineSteps/RutineSteps';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Rutina/')({
  component: Rutina,
});

const rutine = {
  name: 'SENTADILLAS\nCON BARRA.',
  duration: '4x15 | 15 Minutos',
  steps: [
    {
      title: 'Posición inicial.',
      description:
        'Coloca la barra sobre tus trapecios y ajusta el peso. Parate con los pies al ancho de los hombros, mantene la espalda recta y el pecho hacia arriba.',
    },
    {
      title: 'Agarre de la barra.',
      description:
        'Agarra la barra con las manos un poco más abiertas que el ancho de los hombros. Mantén los codos apuntando hacia abajo y ligeramente hacia adelante para estabilizar la barra.',
    },
    {
      title: 'Activación del core.',
      description:
        'Antes de empezar el movimiento, contrae los músculos del core (abdominales y lumbares) para estabilizar la columna y evitar lesiones.',
    },
    {
      title: 'Respiración.',
      description:
        'Inhala profundamente al iniciar el descenso, llenando tu abdomen de aire para aumentar la estabilidad en el core. Exhala al volver a la posición inicial.',
    },
    {
      title: 'Descenso controlado.',
      description:
        'Flexiona las rodillas lentamente, llevando las caderas hacia atrás como si te fueras a sentar. Mantén el peso en los talones y las rodillas alineadas con los pies.',
    },
    {
      title: 'Profundidad adecuada.',
      description:
        'Baja hasta que tus muslos estén paralelos al suelo o un poco más abajo, sin perder la postura. Mantén la espalda recta y el pecho hacia arriba.',
    },
    {
      title: 'Ascenso.',
      description:
        'Empuja con los talones, activando glúteos y cuádriceps, para regresar a la posición inicial. Mantén el control del movimiento durante todo el ascenso.',
    },
    {
      title: 'Finalización.',
      description:
        'Una vez de pie, asegúrate de no hiperextender las rodillas. Reajusta tu postura antes de realizar la siguiente repetición.',
    },
  ],
};

function Rutina() {
  const alumn = useSessionStore(useShallow((state) => state.alumn));
  return (
    <RutinaWrapper>
      <img width='75%' src={gymRutine} />
      <Name>
        <Typography
          color={colors.fullWhite}
          fontSize='14px'
          fontFamily='Lexend Tera'
          fontWeight={300}
        >
          {alumn.firstName}{' '}
          <Typography
            color={colors.fullWhite}
            fontSize='14px'
            fontFamily='Lexend Tera'
            fontWeight={100}
          >
            {alumn.lastName}
          </Typography>
        </Typography>
      </Name>
      <RutineImgContainer>
        <RutineImg src={sentadilla} alt='sentadilla' />
        <ImgDesc>
          <Typography
            color={colors.fullWhite}
            fontFamily='Lexend Tera'
            fontSize='14px'
            fontWeight={800}
          >
            {rutine.name.split('\n').map((text, index) => (
              <React.Fragment key={index}>
                {text}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          <Typography
            color={colors.fullWhite}
            fontFamily='Lexend Tera'
            fontSize='10px'
            fontWeight={300}
          >
            {rutine.duration}
          </Typography>
        </ImgDesc>
      </RutineImgContainer>
      <Steps>
        <Typography
          color={colors.green}
          fontFamily='Lexend Tera'
          fontSize='12px'
          fontWeight={400}
        >
          INDICACIONES.
        </Typography>
        <RutineSteps steps={rutine.steps} />
      </Steps>
    </RutinaWrapper>
  );
}
