import { SimpleGrid } from "@chakra-ui/react";
import useGames from "./Hooks/useGames"
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";




function GameGrid () {
const {games, Error , isLoading} = useGames();
const Skeletons = [1,2,3,5,6]

  return (
  <>
    {Error && <p>{Error}</p>}
    <SimpleGrid columns={{sm : 1, md : 2, lg : 3, xl : 5}} padding={10} spacing={3}>
      {isLoading && Skeletons.map(skeleton => <GameCardContainer> <GameCardSkeleton key={skeleton} /> </GameCardContainer>)}
      {games.map(game => <GameCardContainer>
        <GameCard key={game.id} game={game} />
      </GameCardContainer>)}
    </SimpleGrid>
</>
  )
}
export default GameGrid