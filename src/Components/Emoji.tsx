import bullEye from '../assets/bullsEye.png'
import Meh from '../assets/Meh.webp'
import thumbUp from '../assets/thumbsUp.webp'
import {Image, ImageProps} from "@chakra-ui/react"




interface Props {
    rating : number;
}

const Emoji = ({rating} : Props) => {

    if (rating < 3 ) return null;

    const emojiMap : {[key : number] : ImageProps } = {
        3 : {src : Meh , alt : 'meh'},
        4 : {src : thumbUp , alt : 'thumbsUp'},
        5 : {src : bullEye , alt : 'exeptional'},
    }

  return (
    <Image {...emojiMap[rating]} boxSize='25px' objectFit='cover' marginTop={1} />
  )
}

export default Emoji