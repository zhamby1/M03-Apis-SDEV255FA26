//steps to using fetch request...when should it run?
//on loading a webpage or after a button click - the most common
//on loading a webpage...there are a bunch of ways you can do this, but the newer onload function is probably easiest
//window.onload allows us to load something when the browser window begins to load
window.onload = () =>{
    get_one_post()
}



async function get_all_posts(){



    //fetch request = used to grab data from an api or server
    //default request is a get request - grab data
    //syntax - let variable = await fetch(url)
    //grab all the posts from the resource/endpoint
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    //take our response and turn it into json
    let data = await response.json()
    console.log(data)



}

async function get_one_post(){

    //we can use urls based on the api to find a single post
    //REST uses ids after the resource to grab single resources and not a list of them
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await response.json()
    console.log(data.title)
 
}

async function get_one_post_query(){
    //we can use urls based on the api to find a single post
    //REST uses ids after the resource to grab single resources and not a list of them
    search_term = 2
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?id=" + search_term)
    let data = await response.json()
    console.log(data)
}

//adding data uses a post request and some additional information
async function add_data(){
    //go ahead and make a fetch request, but we are going to add some additional parameters
    //remember by default a GET request is used, and we will need a POST request
    let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        //tell what method we are going to use if it isn't GET
        method: 'POST',
        //send the data to the backend.  Data sent in a post method in contained in something known as the body.  Kind of like a body of data or the main entry point to data
        //if you remember, when sending data to the backend we can make an object, and then JSON stringify it
        body: JSON.stringify({
            title : 'My First Post',
            body: 'Welcome to my blog',
            userID: 1,
        }),
        headers: {
            //tell them we are sending json stringified data
            'Content-type' : 'application/json',
        },
    })
    let data = await response.json()
    console.log(data)
}

//updating / editing data
//this is almost a combination of a get and post request
//get the thing you need to update
//change the properties/variables/fields

async function updateData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'PUT',
        //we always have to grab data of the thing we are editing with out a put request..otherwise it looks much like a post request
        body: JSON.stringify({
            title: 'Changed Post',
            body: 'Look mom I changed this post text',
            userID: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
    let data = response.json()
    console.log(data)
}

//delete - fetch the resouce you need to delete and use delete method

async function deleteData(){
    //this one we are just performing an action so you could just delete if you wanted, but its good to have a response
    //like update, we need a specific resource we want to delete
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: 'DELETE',
    })
    let data = response.json()
    console.log(data)
}