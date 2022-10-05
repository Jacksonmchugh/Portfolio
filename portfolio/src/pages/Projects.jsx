import React from "react"

 const Projects = () => {
    return (
        <section className="page">
        <div className="projects">
            <h1>My Projects!</h1>
         <div className="project_list">
            <h2>Stat tracker!</h2>
            <img className="pics" src="https://i.imgur.com/iWCeNKx.png" alt='pics'/>
            <p>This was my final project of my bootcamp. I made a full stack M.E.R.N. app. It is deployed with Heroku. Take a look at it!</p>
             <a target='blank' rel='noreferrer' href="https://peaceful-caverns-91683.herokuapp.com/">Deployed site here </a>
             <p></p>
             <a target='blank' rel='noreferrer' href="https://github.com/Jacksonmchugh/StatTracker">or check out the Github repo.</a>
             </div>
             <div className="project_list">
                <h2>Top Cities</h2>
                <img className="pics" src="https://i.imgur.com/x6sguBp.png"alt='pics' />
                <p></p>
             <a target='blank' rel='noreferrer' href="https://github.com/Jacksonmchugh/topcities">to Github repo</a>
             </div>
             <div className="project_list">
                <h2>BlackJack!</h2>
                <img className="pics" src="https://i.imgur.com/aHsvWEo.png" alt='pics'/>
                <p>This was the first project of my dev career. I had to create a game using an API. I went with a simple game of BlackJack. Feel free to try my game out.</p>
             <a target='blank' rel='noreferrer' href="https://jacksonmchugh.github.io/Blackjack/">Wanna play a game of BlackJack?</a>
             <p></p>
             <a target='blank' rel='noreferrer' href="https://jacksonmchugh.github.io/Blackjack/"> If not just go check out the Github repo</a>
             </div>
             <div className="project_list">
                <h2>Likes!</h2>
                <img className="pics" src="https://i.imgur.com/8Eox84R.mp4" alt='pics'/>
                <p>This was the first project of my dev career. I had to create a game using an API. I went with a simple game of BlackJack. Feel free to try my game out.</p>
             <a target='blank' rel='noreferrer' href="https://jacksonmchugh.github.io/Blackjack/">Wanna play a game of BlackJack?</a>
             <p></p>
             <a target='blank' rel='noreferrer' href="https://jacksonmchugh.github.io/Blackjack/"> If not just go check out the Github repo</a>
             </div>
         
    </div>
    </section>
    )
 }
 export default Projects