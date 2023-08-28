import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from './Hooks/usePlatforms'
import { Platform } from './Hooks/useGames'


interface Props {
  onSelectPlatform : (platform : Platform) => void;
  selectedPlatform : Platform | null;
}

const PlatformsSelector = ({onSelectPlatform, selectedPlatform} : Props) => {

const {Data, Error} = usePlatform();

if (Error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {Data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformsSelector