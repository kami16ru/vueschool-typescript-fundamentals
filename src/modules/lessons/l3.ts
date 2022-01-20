export default (() => {
    let myNumber: number = 2
    let myString: string = 'hello world'
    let myBoolean: boolean = true
    let canBeAnything: any = true

    myNumber = 3
    myString = 'new string'
    myBoolean = false
    canBeAnything = 'cabbage'

    console.log({
        myNumber,
        myString,
        myBoolean,
        canBeAnything
    })

    return true
})()


