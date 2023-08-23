
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenereList from './Components/GenereList'


function App() {
  

  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg   : `"nav nav" "aside main"`
    }}>
      <GridItem area='nav' >
        <Navbar />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside'>
        <GenereList />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>


    </Grid>
  )
}

export default App
