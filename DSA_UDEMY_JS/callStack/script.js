function takeShower()
{
    console.log("showering")
}

function eatingBreakfast()
{
    let meal = eatingFood()
    console.log(`eating ${meal}`)
}

function eatingFood()
{
    let items = ["banana","juice","bread"]
    return items[Math.floor((Math.random() * items.length))]
}

function wakeUp()
{
    takeShower()
    eatingBreakfast()
    console.log("lets get to work")
}

wakeUp()

//stop on line no 25 and click on step to the next function in source tab of chrometo see what happening behind the seen