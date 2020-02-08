document.addEventListener("DOMContentLoaded", () => {
    let profilePic = document.querySelector("#profilePic")
    let userInfo = document.querySelector("#userInfo")
    let name = document.querySelector("#name")
    let email = document.querySelector("#email")
    let birthday = document.querySelector("#birthday")
    let gender = document.querySelector("#gender")
    let memberSince = document.querySelector("#memberSince")
    let existingPosts = document.querySelector("#existingPosts")
    let postForm = document.querySelector("#postForm")

    const getProfilePic = async () => {
        let res = await axios.get("http://localhost:3000/users/1")
        let user = res.data.body
        let img = document.createElement("img")
        img.src = user.profile_pic
        profilePic.appendChild(img)
    }
    const getProfileInfo = async () => {
        let res = await axios.get("http://localhost:3000/users/1")
        let user = res.data.body
        name.innerText = `Name: ${user.full_name}`
        email.innerText = `Email: ${user.email}`
        birthday.innerText = `Birthday: ${user.date_of_birth.slice(0,10)}`
        gender.innerText = `Gender: ${user.gender}`
        memberSince.innerText = `Member Since: ${user.join_date.slice(0,10)}`
    }
    const getPosts = async () => {
        let res = await axios.get("http://localhost:3000/posts/users/1")
        let posts = res.data.body
        posts.forEach((el) => {
            let userName = el.full_name
            let body = el.body
            let newPost = document.createElement("div")
            newPost.className = "posts"
            let posterName = document.createElement("h4")
            posterName.className = "posterName"
            posterName.innerText = userName
            newPost.appendChild(posterName)
            let time = document.createElement("h5")
            time.className = "time"
            time.innerText = el.time_stamp.slice(0,10)
            newPost.appendChild(time)
            let p = document.createElement("p")
            p.innerText = body
            newPost.appendChild(p)
            existingPosts.appendChild(newPost)
            
        })

    }
    const makePost = async (post) => {
        let res = await axios.post("http://localhost:3000/posts",post)
        let res2 = await axios.get(`http://localhost:3000/users/${post.user_id}`)
        let postContent = res.data.body
        let userName = res2.data.body.full_name
        let newPost = document.createElement("div")
        newPost.className = "posts"
        let posterName = document.createElement("h4")
        posterName.className = "posterName"
        posterName.innerText = userName
        newPost.appendChild(posterName)
        let time_stamp = document.createElement("h5")
        time_stamp.className = "time"
        time_stamp.innerText = postContent.time_stamp.slice(0,10)
        newPost.appendChild(time_stamp)
        let p = document.createElement("p")
        p.innerText = postContent.body
        newPost.appendChild(p)
        existingPosts.prepend(newPost)
        

    }
    
    getProfilePic()
    getProfileInfo()
    getPosts()
    postForm.addEventListener ("submit", async (e) => {
        e.preventDefault()
        debugger
        let body = document.querySelector("#newPostBody").value
         await makePost({user_id: 1, body})
        postForm.reset()
    })
})
