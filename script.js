const jokes = document.querySelector('.joke-card')
const btn = document.querySelector('.joke-btn')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

async function genJokes(url) {
    const response = await fetch(`${url}`).then(data => data.json())
    jokes.innerHTML = `${response.joke}`
}

btn.addEventListener('click', () => {
    genJokes(url)
})