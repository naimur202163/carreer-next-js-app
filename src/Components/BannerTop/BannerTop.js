import { Button, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

function BannerTop() {
  return (
    <div className="">
      <Container maxWidth="975px">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
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
                <Button>See Open Roles</Button>
              </div>
            </div>
          </GridItem>
          <GridItem w="100%"></GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default BannerTop;
