import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenereList from './Components/GenereList'
import { useState } from 'react'
import { Genere } from './Components/Hooks/useGenere'
import PlatformsSelector from './Components/PlatformsSelector'
import { Platform } from './Components/Hooks/useGames'
import SortSelector from './Components/sortSelector'



export interface GameQuery {
  genre : Genere;
  platform : Platform
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg   : `"nav nav" "aside main"`
    }}
    templateColumns={{
      base : '1fr',
      lg : '200px 1fr'
    }}
    
    >
      <GridItem area='nav' >
        <Navbar />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenereList selectedGenre={gameQuery.genre} onSelectGenere={(genre) => setGameQuery({...gameQuery, genre})} />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={8} marginBottom={5}>
        <PlatformsSelector selectedPlatform= {gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})} />
        <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>

  
    </Grid>
  )
}

export default App
