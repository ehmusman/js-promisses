console.log(1)
console.log(2)
// callback hell
const user = getUser(1 , user => {
    console.log(user)
    getRepos(user.userName , repos => {
        console.log(repos)
        getRepoCommits(repos[0] , commit => {
            console.log(commit)

        })
    })
})

// console.log(user?.id)

function getUser(id , callback) {
    setTimeout(() => {
        callback({id: id, userName: "ehmusman"}) 
    }, 2000)
}
function getRepos(userName, callback) {
    setTimeout(() => {
        
        callback(["Repo1", "Repo2", "Repo3"])
    }, 2000)
}

function getRepoCommits(repo, callback) {
    setTimeout(() => {

        callback(["commit1", "commit2", "commit3"])
    }, 2000)
}
console.log(4)