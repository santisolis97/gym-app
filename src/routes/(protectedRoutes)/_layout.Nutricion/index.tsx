import { createFileRoute } from '@tanstack/react-router';
import { Typography } from '../../../components/Typography/Typography';
import { colors } from '../../../utils/colors';
import { NutricionWrapper } from './-Nutricion.styled';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Nutricion/')({
  component: Nutricion,
});

function Nutricion() {
  return (
    <NutricionWrapper>
      <Typography
        fontWeight={700}
        fontSize='20px'
        fontFamily='Lexend Tera'
        color={colors.fullWhite}
      >
        Nutricion
      </Typography>
      <Typography
        fontWeight={700}
        fontSize='20px'
        fontFamily='Lexend Tera'
        color={colors.green}
      >
        Coming Soon!
      </Typography>
    </NutricionWrapper>
  );
}
