import React from 'react'
import image from '../assets/glub.png'
import Card from './Card'

const testing = {
    image: image,
    bio: "Bio",
    captionone: "One",
    captiontwo: "Two"
  }

function Container() {
    return (
        <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo}/>
    );
}

export default Container;