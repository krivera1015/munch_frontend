import React from 'react'
import {Link} from 'react-router-dom'
import { Header, Image, Button, Reveal } from 'semantic-ui-react'

const HomePage = () => (
    <Link to='/location'>
    <div>
        <Reveal animated='small fade'>
            <Reveal.Content visible >
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqvo8sceTqPRKBciFaibhsdcZH-46unwOvMsd8GjIgxPKo9-z' />
        <Header as='h2' icon textAlign='center'>
        <Header.Content>Munch</Header.Content>
        </Header>
            </Reveal.Content>
            <Reveal.Content hidden>
                <Button basic color='yellow'>Whats to Eat?</Button>
            </Reveal.Content>
        </Reveal>
    </div>
    </Link>
)

export default HomePage