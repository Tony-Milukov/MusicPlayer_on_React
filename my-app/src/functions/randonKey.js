let keys = []

 const randomKey = () => {

    let key = Math.floor(Math.random() * (90000000 - 10) + 10)

    if (keys.length == 0 || keys.map(element => key !== element)) {
        keys = [...keys, key]
        return key

    } else {
        randomKey()
    }
}
export default randomKey