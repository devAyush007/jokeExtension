fetch("https://icanhazdadjoke.com/slack")
.then(data=>data.json())
.then(joke =>{
    console.log(joke)
    const jokeText = joke.attachments[0].text;
    const pTag = document.getElementById("joke");
    pTag.innerHTML = jokeText;
})