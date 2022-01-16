import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import logo1 from '../../../assets/Screenshot 2022-01-07 at 12.55 1.png';
import logo2 from '../../../assets/Rectangle 7.png';
import logo3 from '../../../assets/Screenshot 2022-01-07 at 12.57 1.png';
import logo4 from '../../../assets/Rectangle 4.png';
import logo5 from '../../../assets/Screenshot 2022-01-07 at 1.05 1.png';
import logo6 from '../../../assets/Rectangle 2.png';
import logo7 from '../../../assets/Screenshot 2022-01-07 at 1.00 1.png';
import logo8 from '../../../assets/Rectangle 6.png';
import logo9 from '../../../assets/Screenshot 2022-01-07 at 12.59 1.png';
function BannerTop() {
  return (
    <div className="">
      <Container maxWidth="975px">
        {/*  */}
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            <div>
              <Heading>Leave your mark</Heading>
              <p>
                At Engineer’s Cradle, we build products and services which allow
                students to Engage with industrial mentors, jack st. agur blue
                cheese melted cheese. Mascarpone cheesecake everyone loves feta
                stilton caerphilly cheese and wine monterey jack. Mozzarella
                ricotta monterey jack say cheese danish fontina manchego cow.
                Chalk and cheese dolcelatte parmesan. Danish fontina edam
                bavarian bergkase goat rubber cheese pepper jack st. agur blue
                cheese melted cheese. Mascarpone cheesecake everyone loves feta
                stilton caerphilly cheese and wine monterey jack. Mozzarella
                ricotta monterey jack say cheese danish fontina manchego cow.
              </p>
              <div>
                <Button colorScheme="blue">See Open Roles</Button>
              </div>
            </div>
          </Box>
          <Box>
            <div>
              {' '}
              <Grid templateColumns="repeat(3,1fr)">
                <GridItem>
                  {/* 1 */}
                  <div>
                    <Image src={logo1} alt="" />
                  </div>
                </GridItem>
                {/* 2 */}
                <GridItem>
                  <div>
                    <Image src={logo2} alt="" />
                  </div>
                </GridItem>
                {/* 3 */}
                <GridItem>
                  <div>
                    <Image src={logo3} alt="" />
                  </div>
                </GridItem>
                {/* 4 */}
                <GridItem>
                  <div>
                    <Image src={logo4} alt="" />
                  </div>
                </GridItem>
                {/* 5 */}
                <GridItem>
                  <div>
                    <Image src={logo5} alt="" />
                  </div>
                </GridItem>
                {/* 6 */}
                <GridItem>
                  <div>
                    <Image src={logo6} alt="" />
                  </div>
                </GridItem>
                {/* 7 */}
                <GridItem>
                  <div>
                    <Image src={logo7} alt="" />
                  </div>
                </GridItem>
                {/* 8 */}
                <GridItem>
                  <div>
                    <Image src={logo8} alt="" />
                  </div>
                </GridItem>
                {/* 9 */}
                <GridItem>
                  <div>
                    <Image src={logo9} alt="" />
                  </div>
                </GridItem>
              </Grid>
            </div>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default BannerTop;
