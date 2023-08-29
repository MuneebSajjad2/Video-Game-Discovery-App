import { SimpleGrid } from "@chakra-ui/react";
import useData, { Platform } from "./Hooks/useGames"
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "./Hooks/useGames";
import { Genere } from "./Hooks/useGenere";
import { GameQuery } from "../App";


interface Props {
  gameQuery : GameQuery
}

function GameGrid ({gameQuery} : Props) {
const { Data ,Error , isLoading} = useGames(gameQuery)
const Skeletons = [1,2,3,5,6]

  return (
  <>
    {Error && <p>{Error}</p>}
    <SimpleGrid columns={{sm : 1, md : 2, lg : 3, xl : 4}} padding={10} spacing={6}>
      {isLoading && Skeletons.map(skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton  /> </GameCardContainer>)}
      {Data.map(game => <GameCardContainer key={game.id}>
        <GameCard  game={game} />
      </GameCardContainer>)}
    </SimpleGrid>
</>
  )
}
export default GameGrid