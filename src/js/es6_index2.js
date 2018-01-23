{
    function hello(...arg) {
        console.log(arg[0])
        console.log(arg[1])
        console.log(arg[2])
        console.log(arg[3])
    }

//    hello(1,2,3,4,5)
  //  hello(...[12,34,56,78])
    let a = ["a","b","c"]
    // let b = a
    let b = [...a]
    b.push("d")
    console.log(a)
    console.log(b)
}
