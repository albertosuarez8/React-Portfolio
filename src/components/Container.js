import React from 'react'
import Card from './Card';
import Form from './Form';
import Bio from './Bio';
import alberto from '../assets/alberto.jpg'
import brewery from '../assets/brewery.jpg'
import nightin from '../assets/nightin.jpg'
import password from '../assets/password.jpg'
import team from '../assets/team.jpg'
import weather from '../assets/weather.jpg'
import quiz from '../assets/quiz.jpg'

const bio = {
    image: alberto,
    bio: "I am a senior business analyst and full stack developer with a proven track record of delivering innovative solutions to complex business problems. I have a deep expertise in gathering and analyzing business requirements, designing effective solutions, and developing web-based applications, software products, and APIs.",
    captionone: "",
    captiontwo: ""
}

const breweryData = {
    image: brewery,
    bio: "Brewery Reviews is a platform for users to review/rate breweries, and share their experiences with other beer enthusiasts. Users can search for breweries by location, beer style, and other criteria, and read reviews from other users. The website aims to foster a community of beer lovers and help users discover new breweries and beers to try.",
    captionone: "Technologies Used",
    captiontwo: "Handlebars.js, Node.js, Bulma, Express.js",
    site: "https://breweries-reviews.herokuapp.com/"
}

const nightinData = {
    image: nightin,
    bio: "A Night In allows users to input their preferred type of food and movie, generating a personalized recommendation for a recipe and a movie that match their preferences. The website curates a selection of recipes and movie recommendations based on the user's input, with a focus on diverse and unique options. The website aims to provide users with a fun and interactive way to discover new foods and movies that suit their tastes.",
    captionone: "Technologies Used",
    captiontwo: "Javascript, HTML, Materialize, CSS",
    site: "https://magmesser.github.io/a-night-in/"
}

const passwordData = {
    image: password,
    bio: "This website offers a password generator tool that allows users to create strong and secure passwords using a variety of parameters, such as length, complexity, and character types. The website aims to help users protect their online accounts from hacking and identity theft by generating and managing strong passwords.",
    captionone: "Technologies Used",
    captiontwo: "Javascript, HTML, CSS",
    site: "https://albertosuarez8.github.io/Password-Generator/"
}

const teamData = {
    image: team,
    bio: "This application allows users to create a custom HTML page that displays team profiles with user-specified data. Users can add and remove team members. The application aims to provide an easy and efficient way for users to create professional-looking team pages for personal or professional use.",
    captionone: "Technologies Used",
    captiontwo: "Node.js, HTML, CSS",
    site: "https://github.com/albertosuarez8/Team-Profile-Generator"
}

const quizData = {
    image: quiz,
    bio: "This website provides a quiz on fundamental concepts of JavaScript, such as variables and functions allowing users to test their knowledge and understanding of the language. The quiz consists of multiple-choice questions with varying levels of difficulty and provides immediate feedback to users after each question. The website aims to help users improve their understanding of JavaScript.",
    captionone: "Technologies Used",
    captiontwo: "Javascript, CSS, Bootstrap, HTML",
    site: "https://albertosuarez8.github.io/Javascript-Coding-Quiz/"
}

const weatherData = {
    image: weather,
    bio: "This website allows users to check the weather in their city, providing real-time updates on temperature, precipitation, wind speed, and other weather conditions. Users can also view hourly and daily forecasts, as well as radar and satellite maps. The website aims to provide users with accurate and up-to-date weather information to help them plan their day or week ahead.",
    captionone: "Technologies Used",
    captiontwo: "Javascript, CSS, Bootstrap, HTML",
    site: "https://albertosuarez8.github.io/City-Weather-Forecast-Application/"
}


function Container(props) {
    return (
        <>
            <div className='max-[639px]:hidden min-[640px]:contents'>
                <main>
                    <div className="p-16 sm:p-14">
                        <h1 className="md:max-[1798px]:text-[5rem] text-[5rem] min-[1799px]:text-[8rem] text-zinc-300 leading-none ">Alberto Suarez</h1>
                        <h2 className="text-2xl sm:text-lg text-zinc-300 sm:p-3">Senior Business Analyst & Full Stack Student Developer.
                        </h2>
                    </div>
                </main>
                <div>
                    <div className='w-full flex justify-center text-zinc-300 text-[2.5rem]'>
                        {props.title}
                    </div>
                    <div id='container' className={`flex items-center flex-col overflow-y-scroll w-[50vw] h-[50vh] ${props.title === 'About Me' ? 'justify-center' : ''} ${props.title === 'About Me' ? 'h-[fit-content]' : ''}`}>
                        <>
                            {(() => {
                                switch (props.title) {
                                    case 'About Me':
                                        return (<Bio image={bio.image} bio={bio.bio} captionone={bio.captionone} captiontwo={bio.captiontwo} />);
                                    case 'My Projects':
                                        return (
                                            <>
                                                <Card image={breweryData.image} bio={breweryData.bio} captionone={breweryData.captionone} captiontwo={breweryData.captiontwo} site={breweryData.site} />
                                                <Card image={nightinData.image} bio={nightinData.bio} captionone={nightinData.captionone} captiontwo={nightinData.captiontwo} site={nightinData.site} />
                                                <Card image={passwordData.image} bio={passwordData.bio} captionone={passwordData.captionone} captiontwo={passwordData.captiontwo} site={passwordData.site} />
                                                <Card image={weatherData.image} bio={weatherData.bio} captionone={weatherData.captionone} captiontwo={weatherData.captiontwo} site={weatherData.site} />
                                                <Card image={quizData.image} bio={quizData.bio} captionone={quizData.captionone} captiontwo={quizData.captiontwo} site={quizData.site} />
                                                <Card image={teamData.image} bio={teamData.bio} captionone={teamData.captionone} captiontwo={teamData.captiontwo} site={teamData.site} />
                                            </>
                                        );
                                    case 'Contact Me':
                                        return (
                                            <Form />
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </>
                    </div>
                </div>
            </div>
            <div className='min-[640px]:hidden '>
            <div className='w-full flex justify-center text-zinc-300 text-[2.5rem]'>
                        {props.title}
                    </div>
            <div id='container' className={`flex items-center flex-col overflow-y-scroll w-full h-[50vh] ${props.title === 'About Me' ? 'justify-center' : ''} ${props.title === 'About Me' ? 'h-[70vh]' : ''}`}>
                        <>
                            {(() => {
                                switch (props.title) {
                                    case 'About Me':
                                        return (<Bio image={bio.image} bio={bio.bio} captionone={bio.captionone} captiontwo={bio.captiontwo} />);
                                    case 'My Projects':
                                        return (
                                            <>
                                                <Card image={breweryData.image} bio={breweryData.bio} captionone={breweryData.captionone} captiontwo={breweryData.captiontwo} site={breweryData.site} />
                                                <Card image={nightinData.image} bio={nightinData.bio} captionone={nightinData.captionone} captiontwo={nightinData.captiontwo} site={nightinData.site} />
                                                <Card image={passwordData.image} bio={passwordData.bio} captionone={passwordData.captionone} captiontwo={passwordData.captiontwo} site={passwordData.site} />
                                                <Card image={weatherData.image} bio={weatherData.bio} captionone={weatherData.captionone} captiontwo={weatherData.captiontwo} site={weatherData.site} />
                                                <Card image={quizData.image} bio={quizData.bio} captionone={quizData.captionone} captiontwo={quizData.captiontwo} site={quizData.site} />
                                                <Card image={teamData.image} bio={teamData.bio} captionone={teamData.captionone} captiontwo={teamData.captiontwo} site={teamData.site} />
                                            </>
                                        );
                                    case 'Contact Me':
                                        return (
                                            <Form />
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </>
                    </div>
            </div>
        </>
    );
}

export default Container;