import { createFileRoute } from '@tanstack/react-router';
import {
  Alumno,
  AlumnosList,
  AlumnosWrapper,
  Logo,
  LogoWrapper,
} from './-Alumnos.styled';
import bigLogo from '../../../images/assets/bigLogo.svg';
import { BackgroundImage } from '../-layout.styled';
import weaver from '../../../images/assets/weaver.png';
import { Stripe } from '../../../components/Stripe/Stripe';
import { colors } from '../../../utils/colors';
import { Typography } from '../../../components/Typography/Typography';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Alumnos/')({
  component: Alumnos,
});

const alumnos = [
  { firstName: 'Ana María', lastName: 'Pérez' },
  { firstName: 'Carlos Alberto', lastName: 'Gómez' },
  { firstName: 'Lucía Fernanda', lastName: 'Martínez' },
  { firstName: 'Javier Andrés', lastName: 'Rodríguez' },
  { firstName: 'Natalia Isabel', lastName: 'Morales' },
  { firstName: 'Manuel Esteban', lastName: 'Torres' },
  { firstName: 'Valeria Sofía', lastName: 'Díaz' },
  { firstName: 'Felipe Andrés', lastName: 'Fernández' },
  { firstName: 'Mariana Gómez', lastName: 'Sánchez' },
  { firstName: 'Tomás Alejandro', lastName: 'Vargas' },
  { firstName: 'Sebastián José', lastName: 'Ríos' },
];

function Alumnos() {
  return (
    <AlumnosWrapper>
      <BackgroundImage src={weaver} />
      <LogoWrapper>
        <Logo src={bigLogo} alt='gym logo' />
      </LogoWrapper>
      <Stripe
        backgroundColor={colors.green}
        text='LISTA DE ALUMNOS'
        textColor={colors.black}
        textSize='17px'
      />
      <AlumnosList>
        {alumnos.map((alumno) => (
          <Alumno to={'/Buscar'} key={alumno.firstName + alumno.lastName}>
            <Typography
              color={colors.fullWhite}
              fontFamily='Lexend Tera'
              fontSize='12px'
              fontWeight={700}
            >
              {alumno.lastName},{' '}
              <Typography
                fontWeight={400}
                color={colors.fullWhite}
                fontFamily='Lexend Tera'
                fontSize='12px'
              >
                {alumno.firstName}
              </Typography>
            </Typography>
          </Alumno>
        ))}
      </AlumnosList>
    </AlumnosWrapper>
  );
}
