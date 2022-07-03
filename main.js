const JokeBtn = document.querySelector(".JokeBtn")
const WholeList = document.querySelector(".jokesContainer")
const JokeDltBtn = document.querySelector(".JokeDltBtn")
// add jokes buttons
JokeBtn.addEventListener("click", async () => {
  try {
    const config = { headers: { Accept: "application/json" } }
    const NewJoke = await axios.get("https://icanhazdadjoke.com/", config)
    const NewJokeData = NewJoke.data.joke
    const listItem = document.createElement("LI")
    listItem.innerText = NewJokeData
    WholeList.append(listItem)
  } catch (error) {
    alert("Please on your data")
    console.log("sorry an error occured ", error)
  }
})
// delete button
JokeDltBtn.addEventListener("click", (event) => {
  const AllJokes = WholeList.childNodes.length
  for (var i = AllJokes; i > 0; i--) {
    WholeList.firstChild.remove()
  }
})
// delete list item
WholeList.addEventListener("click", (event) => {
  console.log(event)
  console.log(event.target)
  if (event.target.className == "jokesContainer") {
    return
  } else {
    event.target.remove()
  }
})
