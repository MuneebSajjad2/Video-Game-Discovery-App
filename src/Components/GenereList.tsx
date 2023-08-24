
import React from 'react'
import useGenere, { Genere } from './Hooks/useGenere'
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../Services/image-url'
import useData from './Hooks/useData'

const GenereList = () => {

    const {Data , isLoading, Error} = useGenere();

    if (Error) return null;
    
    if (isLoading) return <Spinner />

  return (
    <List>
        {Data.map(genere => <ListItem key={genere.id} paddingY = "5px">
             <HStack>
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genere.image_background)} />
                <Button variant='link' fontSize='lg' onClick={() => console.log(genere)
                }>{genere.name}</Button>
            </HStack>

             </ListItem>)}
    </List>
  )
}

export default GenereList