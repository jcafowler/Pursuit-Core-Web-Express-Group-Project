document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("#albumForm")
form.addEventListener("submit",async(e)=>{
    e.preventDefault
    debugger
let createAlbum = document.querySelector("#createAlbum")
try{
    let h3 = document.querySelector("h3")
    let res = await axios.post("http://localhost:3000/albums/:owner_id",{
        album_name: createAlbum.value,
        user_id:"",
        thumnbnail: "",
        time_stamp: "",
    })
    h3.innerText= createAlbum

  
}catch(err){
    console.log(err)
}

})


})