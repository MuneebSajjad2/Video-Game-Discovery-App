import useGames from "./Hooks/useGames"




function GameGrid () {
const {games, Error} = useGames();

  return (
  <>
    {Error && <p>{Error}</p>}
    <ul>
      {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  
</>
  )
}
export default GameGrid