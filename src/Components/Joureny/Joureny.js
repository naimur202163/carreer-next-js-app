import {
  Container,
  Heading,
  Center,
  Text,
  Box,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import Uix from '../../../assets/Other 20.png';
import Research from '../../../assets/Other 13.png';
import Marketing from '../../../assets/Other 15.png';
import Resources from '../../../assets/Badrun 1.png';
import Analysis from '../../../assets/Other 01.png';
import Sales from '../../../assets/Other 16.png';
const Joureny = () => {
  return (
    <div>
      <Container mt={5} maxWidth="975px">
        <Heading>
          {' '}
          <Center> Want to be a part of our journey?</Center>
        </Heading>
        <Center>
          <Text>
            Send over your portfolio to hr@engineerscradle.com or apply below.
          </Text>
        </Center>
        <Box>
          <SimpleGrid mt={5} columns={[1, null, 3]} spacing={10}>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Uix} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>UI/UX</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Research} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>Research</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Marketing} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>Marketing</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Resources} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>Human Resource</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Analysis} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>Internal Analysis</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
            <Box>
              <Box height="250px">
                <Center>
                  {' '}
                  <Image src={Sales} alt="" />
                </Center>
              </Box>
              <Box mt={4}>
                <Heading>
                  <Center>Sales</Center>
                </Heading>
                <Center>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Placerat tell us ultricies orci gravida purus orci
                    suspendisse. In
                  </Text>
                </Center>
              </Box>
            </Box>
          </SimpleGrid>
          <Box mt={5}>
            <Center>
              <Text>What are you waiting for???</Text>
            </Center>
            <Center mt={3}>
              <Button colorScheme="blue"> See Open Roles</Button>
            </Center>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Joureny;
