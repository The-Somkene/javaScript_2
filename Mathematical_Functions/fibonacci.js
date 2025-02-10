// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibb(n){
    if(n==0) return 0
    if(n==1) return 1
    let all = [0,1]
    for(let i=2;i<=n;i++){
        all[i] = all[i-1] + all[i-2]
    }
    return all
}

console.log(fibb(8))