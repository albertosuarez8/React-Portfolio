import React from 'react'
import image from '../assets/glub.png'
import Card from './Card'

const testing = {
    image: image,
    bio: "Testing",
    captionone: "One",
    captiontwo: "Two"
}

function Container() {
    return (
        <>
            <main>
                <div className="p-16 sm:p-14">
                    <h1 className="text-[6rem] 2xl:text-9xl text-zinc-300">Alberto Suarez</h1>
                    <h2 className="text-2xl sm:text-lg text-zinc-300 sm:p-3">Business Analyst & Full Stack Student Developer.
                    </h2>
                </div>
            </main>
            <div>
                <div className='w-full flex justify-center text-zinc-300 text-[2.5rem]'> 
                My Projects
                </div>
                <div id='container' className='flex items-center flex-col overflow-y-scroll w-[50vw] h-[50vh]'>
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                    <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                </div>
            </div>
        </>
    );
}

export default Container;