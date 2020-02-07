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
    debugger
}catch(err){
    console.log(err)
}

})


})