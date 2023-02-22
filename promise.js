console.log(1)
console.log(2)
// calculation()
// .then(res => console.log(res))
// getUser(1)
//     .then(user => {
//         console.log(user)
//         return getRepos(user)
//     })
//     .then(repos => {
//         console.log(repos)
//         return getRepoCommits(repos[0])
//     })
//     .then(commits => console.log(commits))
//     .catch(err => console.log("error", err))

let data = Promise.allSettled([getUser(1), getRepos(), getRepoCommits()])
.then(res => {
    console.log(res)
    res.forEach(ele => {
        if (ele.status === "fulfilled") {
            console.log(ele)

        }else{
            
        }
    })
    })

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
            
            // reject({ success: false, error: new Error("something went wrong") })
            reject({ success: true})
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