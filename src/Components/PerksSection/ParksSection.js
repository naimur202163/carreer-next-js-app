import { Center, Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';

const ParksSection = () => {
  return (
    <div mt={5}>
      <Container maxWidth="980px">
        <Container>
          <Center>
            <Heading style={{ marginTop: '3rem' }}>Perks and benifits</Heading>
          </Center>
          <Center>
            <p>
              {' '}
              <p>specially crafted for engineers by enginners</p>
            </p>
          </Center>
        </Container>
        {/* Grid Part */}
        <Box style={{ marginTop: '5rem' }} bg="##EAFBF7">
          <SimpleGrid columns={[2, null, 3]} spacing={10}>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
            <Box>
              <Box className="shape" height="9.5rem"></Box>
              <Center>Perk 1</Center>
              <Center>
                Ex Exercitation reprehend elit ullamco dolore labore occaecat id
                quin quindad
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  );
};

export default ParksSection;
