import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'Olá! Eu me chamo Enzo Rocha!!!',
        3500,
        'Tenho 19 anos',
        3500,
        'Sou um estudante de Engenharia de Software',
        3500,
        'Seja bem-vindo(a)!!! :)',
        3500,
      ]}
      wrapper="span"
      speed={35}
      repeat={Infinity}
    />
  );
};

export default Typewriter