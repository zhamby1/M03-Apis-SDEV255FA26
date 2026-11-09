//steps to using fetch request...when should it run?
//on loading a webpage or after a button click - the most common
//on loading a webpage...there are a bunch of ways you can do this, but the newer onload function is probably easiest
//window.onload allows us to load something when the browser window begins to load
window.onload = () =>{
    get_all_posts()
}

async function get_one_post(){

    let mytitle = document.querySelector("#title")
    let mybody = document.querySelector("#body")
    //we can use urls based on the api to find a single post
    //REST uses ids after the resource to grab single resources and not a list of them
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await response.json()
    console.log(data.title)
    mytitle.innerHTML = `<p>${data.title}</p>`
    mybody.textContent = data.body
}

async function get_all_posts(){

    let my_posts = document.querySelector("#all-posts")
    //we can use urls based on the api to find a single post
    //REST uses ids after the resource to grab single resources and not a list of them
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    console.log(data)

    //pay attention to the way data comes in...sometimes its an empty array with an array objects
    //sometimes the array has name

    for(let item of data){
        my_posts.innerHTML += `<p>${item.title}</p><p>${item.body}</p>`
    }

  

}