function sort(names) {
    let result = [...names].sort((Fname, Sname) => Fname.localeCompare(Sname))

    console.log(result.map((value, index) => `${index + 1}.${value}`).join("\n"))
}


sort(["John", "Bob", "Christina", "Ema", "alpha"])

// sort([3, 4, 5, 6, 2, 4, 5])