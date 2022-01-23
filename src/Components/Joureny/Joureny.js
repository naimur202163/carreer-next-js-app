import {
  Container,
  Heading,
  Center,
  Text,
  Box,
  SimpleGrid,
  Button,
  VStack,
  Stack,
  HStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Uix from '../../../assets/Other 20.png';
import Research from '../../../assets/Other 13.png';
import Marketing from '../../../assets/Other 15.png';
import Resources from '../../../assets/Badrun 1.png';
import Analysis from '../../../assets/Other 01.png';
import Sales from '../../../assets/Other 16.png';
const Joureny = () => {
  const data = [
    {
      Image: Uix,
      Title: 'UI/UX',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
    {
      Image: Research,
      Title: 'Research',
      Description:
        'Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
    {
      Image: Marketing,
      Title: 'Marketing',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
    {
      Image: Resources,
      Title: 'Resources',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
    {
      Image: Analysis,
      Title: 'Analysis',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
    {
      Image: Sales,
      Title: 'Sales',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tell us ultricies orci gravida purus orcisuspendisse. In',
    },
  ];

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
          <SimpleGrid columns={[1, 2, 3, 3]} gap={5}>
            {data?.map((item, i) => (
              <VStack key={i} spacing="3">
                <Center boxSize="250px">
                  <Image src={item?.Image} alt="" />
                </Center>
                <VStack alignItems={`center`}>
                  <Text fontWeight="bold" fontSize="2xl">
                    {item?.Title}
                  </Text>
                  <Text>{item?.Description}</Text>
                </VStack>
              </VStack>
            ))}
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
