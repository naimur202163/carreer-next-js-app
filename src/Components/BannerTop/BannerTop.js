import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import banner from '../../../assets/Group 1182.png';

function BannerTop() {
  return (
    <div style={{ backgroundColor: '#F0F5FA ' }}>
      <Container maxWidth="975px">
        {/*  */}
        <Stack
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
          spacing="40px"
          alignItems="center"
        >
          <VStack alignItems="flex-start" width="100%">
            <Heading>Leave your mark</Heading>
            <Text fontSize="xs">
              At Engineer’s Cradle, we build products and services which allow
              students to Engage with industrial mentors, jack st. agur blue
              cheese melted cheese. Mascarpone cheesecake everyone loves feta
              stilton caerphilly cheese and wine monterey jack. Mozzarella
              ricotta monterey jack say cheese danish fontina manchego cow.
              Chalk and cheese dolcelatte parmesan. Danish fontina edam bavarian
              bergkase goat rubber cheese pepper jack st. agur blue cheese
              melted cheese. Mascarpone cheesecake everyone loves feta stilton
              caerphilly cheese and wine monterey jack. Mozzarella ricotta
              monterey jack say cheese danish fontina manchego cow.
            </Text>
            <Button mt={5} colorScheme="blue">
              See Open Roles
            </Button>
          </VStack>
          <Center width="100%" padding={[5, 5, 10, 10]}>
            <Image src={banner} alt="EC_Image" />
          </Center>
        </Stack>
      </Container>
    </div>
  );
}

export default BannerTop;
