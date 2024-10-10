import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { BackgroundImage } from '../-layout.styled';
import pesas from '../../../images/assets/pesas.jpeg';

import { AlumnDetails } from '../../../components/AlumnDetails/AlumnDetails';
import { InicioWrapper } from './-Inicio.styled';
import { Stripe } from '../../../components/Stripe/Stripe';
import { IoLogoWhatsapp } from 'react-icons/io';
import { colors } from '../../../utils/colors';
import { useSessionStore } from '../../../utils/useSessionStore';
import { useShallow } from 'zustand/shallow';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Inicio/')({
  component: Inicio,
});

function Inicio() {
  const alumn = useSessionStore(useShallow((state) => state.alumn));
  const navigate = useNavigate();
  const onRutina = () => {
    navigate({ to: '/Rutina' });
  };
  const onWhatsapp = () => {
    console.log('wapp');
    window.open(
      `https://api.whatsapp.com/send?phone=${alumn.phone}&text=Hola%2C%20te%20hablo%20de%20gym-app`,
      '_blank'
    );
  };
  return (
    <InicioWrapper>
      <BackgroundImage src={pesas} />
      <AlumnDetails isOwner alumn={alumn} />
      <Stripe
        onClick={onWhatsapp}
        text='CONSULTAR POR WHATSAPP'
        icon={<IoLogoWhatsapp fill={colors.black} />}
        backgroundColor={colors.green}
        textColor={colors.black}
      />
      <Stripe
        onClick={onRutina}
        text='ACCEDÉ A TU RUTINA'
        backgroundColor={colors.black}
        textColor={colors.fullWhite}
      />
    </InicioWrapper>
  );
}
