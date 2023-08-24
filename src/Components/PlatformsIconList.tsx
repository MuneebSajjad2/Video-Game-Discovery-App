import { Platform } from "./Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaWindows , FaPlaystation , FaXbox , FaApple, FaLinux , FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from "react-icons";


interface Props {
    platforms: Platform[]
}



const PlatformsIconList = ({platforms} : Props) => {
    const IconMap : {[key : string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        android : FaAndroid,
        mac : FaApple,
        linux : FaLinux,
        ios : MdPhoneIphone,
        web : BsGlobe
    }
  return (
    <HStack marginY={1}> 
     {platforms.map((platform) => <Icon key={platform.id} as={IconMap[platform.slug]} color='gray.500' />)}

    </HStack>
 
  )
}

export default PlatformsIconList