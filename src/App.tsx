import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenereList from './Components/GenereList'
import { useState } from 'react'
import { Genere } from './Components/Hooks/useGenere'
import PlatformsSelector from './Components/PlatformsSelector'
import { Platform } from './Components/Hooks/useGames'


function App() {
  const [selectedGenre, setSelectedGenere] = useState<Genere | null>(null);
  const [seletedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
        <GenereList selectedGenre={selectedGenre} onSelectGenere={(genere) => setSelectedGenere(genere)} />
      </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformsSelector selectedPlatform= {seletedPlatform} onSelectPlatform={(platform)=> setSelectedPlatform(platform)} />
        <GameGrid seletedPlatform={seletedPlatform} selectedGenre={selectedGenre} />
      </GridItem>

  
    </Grid>
  )
}

export default App
