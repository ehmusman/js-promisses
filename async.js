const axios = require("axios")
console.log(1)
console.log(2)

async function callMe(){
    try {
        // const user = await getUser(1)
        // console.log(user)

        // const repos = await getRepos(user.userName)
        // console.log(repos)

        // const commits = await getRepoCommits(repos[0])
        // console.log(commits)
        let links = []
        for(let i=1;i<=200;i++){
            links.push(`https://jsonplaceholder.typicode.com/todos/${i}`)
        }
        for(let j =0;j<links.length;j++){
            const { data } = await axios.get(links[j+1])
            console.log(data)
        }
        // let resultInPromisses = links.map((link) => {
        //     return  axios.get(link)
        // })
        // console.log("resultInPromisses", resultInPromisses)
        // let result = Promise.allSettled(resultInPromisses)
        // .then(res => console.log(res))
        // result.map(ele => {
        //     if(ele.status === "fulfilled"){
        //         // console.log(ele.value.data)
        //     }else{

        //     }
        // })
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}
callMe()
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: id, userName: "ehmusman"}) 
        }, 2000)

    })
}
function getRepos(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(["R1", "R2", "R3"])
            // resolve({ success: true})
        }, 2000)
    
    })
}

function getRepoCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["commit1", "commit2", "commit3"])
        }, 2000)

    })
}
function calculation() {
    return new Promise((resolve, reject) => {
        for(let i =0; i<100000000; i++){

        }
            resolve("result")
        
    })
}
console.log(4)
// microtask queues, promisses
// macrotask queues , setTimeout, setinterval