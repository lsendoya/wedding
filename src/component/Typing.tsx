import { useState, useEffect } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const phrases: string[] = [
  'El amor florece en cada paso, desde la primera palabra hasta el compromiso ante Dios.',
  'Como dos ramas en una vid, crecemos juntos en la gracia de Dios, fortaleciéndonos mutuamente en el amor.',
  'El matrimonio es el comienzo de un viaje donde dos corazones se unen en un camino de fe, esperanza y amor.',
  'Bendecidos en la unión sagrada, reflejamos el amor paciente, bondadoso y perseverante descrito en 1 Corintios 13.',
  'En el sagrado sacramento del matrimonio, encontramos la fuerza para perdonar, la alegría para celebrar y la paz de estar en presencia de Dios.',
  'Cada día en la vida matrimonial es una oportunidad para amarse más profundamente, servirse mutuamente y honrar el voto divino.',
];

const TypingAnimation: React.FC = () => {
  const [phrase, setPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (letterIndex < phrases[phraseIndex].length) {
      timeoutId = setTimeout(() => {
        setPhrase((prev) => prev + phrases[phraseIndex][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100); // Velocidad de la animación de escritura
    } else if (phraseIndex < phrases.length - 1) {
      timeoutId = setTimeout(() => {
        setPhrase('');
        setLetterIndex(0);
        setPhraseIndex(phraseIndex + 1);
      }, 2000); // Tiempo antes de iniciar la siguiente frase
    } else {
      timeoutId = setTimeout(() => {
        setPhrase('');
        setLetterIndex(0);
        setPhraseIndex(0);
      }, 4000); // Tiempo antes de reiniciar el ciclo
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [phraseIndex, letterIndex]);

  return (
    <Flex
      w={{ base: '70%', md: 'lg', lg: 'xl' }}
      h={{ base: '10rem' }}
      maxH={{ base: '14rem' }}
      pl={{ base: '1.5rem' }}
      mt={{ base: '3rem' }}
    >
      <Text
        fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
        fontWeight="bold"
        fontStyle="italic"
        color="var(--text-secondary)"
        as="cite"
      >
        {phrase}
        <Box
          as="span"
          w="2px"
          h="1em"
          bg={'var(--text-secondary)'}
          display={
            letterIndex < phrases[phraseIndex].length ? 'inline-block' : 'none'
          }
        />
      </Text>
    </Flex>
  );
};

export default TypingAnimation;
