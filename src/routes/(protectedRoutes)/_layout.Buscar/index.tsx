import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSessionStore } from '../../../utils/useSessionStore';
import { useShallow } from 'zustand/shallow';
import { BackgroundImage } from '../-layout.styled';
import { AlumnDetails } from '../../../components/AlumnDetails/AlumnDetails';
import { Stripe } from '../../../components/Stripe/Stripe';
import { IoLogoWhatsapp } from 'react-icons/io';
import { colors } from '../../../utils/colors';
import pesas from '../../../images/assets/pesas.jpeg';
import { BuscarWrapper } from './-Buscar.styled';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Buscar/')({
  component: Buscar,
});

function Buscar() {
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
    <BuscarWrapper>
      <BackgroundImage src={pesas} />
      <AlumnDetails isOwner={false} alumn={alumn} />
      <Stripe
        onClick={onWhatsapp}
        text='CONSULTAR POR WHATSAPP'
        icon={<IoLogoWhatsapp fill={colors.black} />}
        backgroundColor={colors.green}
        textColor={colors.black}
      />
    </BuscarWrapper>
  );
}
