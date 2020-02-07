console.log("hello World")
document.addEventListener("DOMContentLoaded", async()=>{
    let h1 = document.querySelector("#userName");
    let img = document.querySelector("#profilePic");
    let p2 = document.querySelector("#email");
    let p3 = document.querySelector("#birthday");
    let p4 = document.querySelector("#gender");
    let p5 = document.querySelector("#memberSince")
    
    const id = 1;

    try{
        let res = await axios.get(`http://localhost:3000/users/${id}`);
        h1.innerText = res.data.body.full_name;
        img.src = res.data.body.profile_pic;
        p2.innerText = res.data.body.email;
        p3.innerText = res.data.body.date_of_birth;
        p4.innerText = res.data.body.gender;
        p5.innerText = res.data.body.join_date;
        debugger
    }catch(err){
        
    }

    let ownerId = 1;
    
    let div = document.querySelector("#albums");

    try{
        let res = await axios.get(`http://localhost:3000/albums/${ownerId}`);

        debugger
    }catch(err){
        next(err)
    }
})