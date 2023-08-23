


import React from 'react'
import useGenere from './Hooks/useGenere'
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../Services/image-url'

const GenereList = () => {

    const {Genre} = useGenere()

  return (
    <List>
        {Genre.map(genere => <ListItem key={genere.id} paddingY = "5px">
             <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genere.image_background)} />
                <Text fontSize='lg'>{genere.name}</Text>
            </HStack>

             </ListItem>)}
    </List>
  )
}

export default GenereList