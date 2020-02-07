document.addEventListener("DOMContentLoaded", () => {
let newAlbums = document.querySelector("#new")
let retrieve = document.querySelector("#getAlbum")
let albumForm = document.querySelector("#newAlbum")
albumForm.addEventListener("submit",async(e)=>{

    e.preventDefault()
let createAlbum = document.querySelector("#createAlbum")
try{
    let res = await axios.post("http://localhost:3000/albums/:owner_id",{
        user_id: 1,
        album_name: createAlbum.value,
        thumbnail: "",
        time_stamp: "",
    })
    
}catch(err){
    console.log(err)
}

})

let user_id = 1
let button = document.querySelector("#getAlbum")
button.addEventListener("click",async()=>{
let ul  = document.querySelector("ul")
ul.innerHTML= ""
    try{
        let res = await axios.get(`http://localhost:3000/albums/${user_id}`)
        list = res.data.body
        list.forEach(album =>{

            let li = document.createElement("li")
            li.innerText = album.album_name
            
            ul.appendChild(li)
        })
        
    }catch(err){
        console.log(err)
    }
})

})