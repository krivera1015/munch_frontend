import React from 'react'

const LocationForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input value={props.location} name="location" onChange={props.onChange} type="text" placeholder="where are you?"></input>
        </form>
    )
}

export default LocationForm