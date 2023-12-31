import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenereList from './Components/GenereList'
import { useState } from 'react'
import { Genere } from './Components/Hooks/useGenere'
import PlatformsSelector from './Components/PlatformsSelector'
import { Platform } from './Components/Hooks/useGames'
import SortSelector from './Components/sortSelector'
import GameHeading from './Components/GameHeading'



export interface GameQuery {
  genre : Genere;
  platform : Platform;
  order : string,
  searchText : string
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
      <Navbar onSearch = {(searchText) => setGameQuery({...gameQuery, searchText})} />
      </GridItem>
      <Show above='lg'>
      <GridItem area='aside' paddingX={5}>
        <GenereList selectedGenre={gameQuery.genre} onSelectGenere={(genre) => setGameQuery({...gameQuery, genre})} />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={8}>
        <GameHeading gameQuery={gameQuery}/>
        <HStack spacing={5}  marginBottom={5}>
        <PlatformsSelector selectedPlatform= {gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})} />
        <SortSelector sortOrder={gameQuery.order} onSelectSortOrder={(order) => setGameQuery({...gameQuery, order})} />
        </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>

  
    </Grid>
  )
}

export default App
