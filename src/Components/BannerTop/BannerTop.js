import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import banner from '../../../assets/Group 1182.png';

function BannerTop() {
  return (
    <div style={{ backgroundColor: '#F0F5FA ' }}>
      <Container maxWidth="975px">
        {/*  */}
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box my={5}>
            <div>
              <Heading>Leave your mark</Heading>
              <div>
                <p style={{ marginTop: '2rem' }} fontSize="xs">
                  At Engineer’s Cradle, we build products and services which
                  allow students to Engage with industrial mentors, jack st.
                  agur blue cheese melted cheese. Mascarpone cheesecake everyone
                  loves feta stilton caerphilly cheese and wine monterey jack.
                  Mozzarella ricotta monterey jack say cheese danish fontina
                  manchego cow. Chalk and cheese dolcelatte parmesan. Danish
                  fontina edam bavarian bergkase goat rubber cheese pepper jack
                  st. agur blue cheese melted cheese. Mascarpone cheesecake
                  everyone loves feta stilton caerphilly cheese and wine
                  monterey jack. Mozzarella ricotta monterey jack say cheese
                  danish fontina manchego cow.
                </p>
              </div>

              <div>
                <Button mt={5} colorScheme="blue">
                  See Open Roles
                </Button>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              <Center>
                <Image src={banner} alt="" />
              </Center>
            </div>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default BannerTop;
