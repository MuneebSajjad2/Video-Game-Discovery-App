





import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const sortSelector = () => {

    
  return(
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          Order by : Relevance
        </MenuButton>
        <MenuList>
         <MenuItem>Relevance</MenuItem>
         <MenuItem>Date Added</MenuItem>
         <MenuItem>Name</MenuItem>
         <MenuItem>Relese Date</MenuItem>
         <MenuItem>Popularity</MenuItem>
         <MenuItem>Average Rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default sortSelector