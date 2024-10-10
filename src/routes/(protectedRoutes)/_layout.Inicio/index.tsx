import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { BackgroundImage, ScreenWrapper } from '../-layout.styled';
import weaver from '../../../images/assets/weaver.png';
import avatar from '../../../images/assets/avatar.jpg';
import { AlumnDetails } from '../../../components/AlumnDetails/AlumnDetails';
import { InicioWrapper } from './-Inicio.styled';
import { Stripe } from '../../../components/Stripe/Stripe';
import { IoLogoWhatsapp } from 'react-icons/io';
import { colors } from '../../../utils/colors';

export const Route = createFileRoute('/(protectedRoutes)/_layout/Inicio/')({
  component: Inicio,
});

const alumn = {
  firstName: 'Tomás',
  lastName: 'Gomez',
  plan: 'MUSCULACIÓN 5 DIAS',
  payment: 'AL DIA',
  owes: '-',
  due: '29/10/2024',
  accountState: 'ASISTE',
  profileImg: avatar,
  phone: '5493624132561',
};

function Inicio() {
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
      <BackgroundImage src={weaver} />
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
        textColor={colors.white}
      />
    </InicioWrapper>
  );
}
