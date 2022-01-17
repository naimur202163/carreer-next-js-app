import { Box, Center, Container, Heading, SimpleGrid } from '@chakra-ui/react';

const OurValue = () => {
  return (
    <div>
      <Box>
        <Container maxWidth="975px">
          <Heading>
            {' '}
            <Center>Our values</Center>
          </Heading>

          <Center>
            <p fontSize="xs">specially crafted for engineers by enginners</p>
          </Center>
          <div>
            <SimpleGrid columns={[2, null, 3]} spacing={10}>
              <Box>
                <Box className="shape-2" height="9.5rem"></Box>
              </Box>

              <Box className="shape-1" height="9.5rem"></Box>
              <Box className="shape-3" height="9.5rem"></Box>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 2]} spacing={10}>
              <Box className="shape-1" height="9.5rem"></Box>
              <Box className="shape-1" height="9.5rem"></Box>
            </SimpleGrid>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default OurValue;
