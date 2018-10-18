import React from 'react'
import { Input, Container } from 'semantic-ui-react'

const LocationForm = (props) => {
    return (
        <Container>
        <form className="search-bar" onSubmit={props.onSubmit}>
            <Input icon="search" fluid value={props.location} name="location" onChange={props.onChange} type="text" placeholder="where are you?"/>
        </form>
        </Container>
    )
}

export default LocationForm