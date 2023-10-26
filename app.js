// checking getAttribute, 
function foo(){
    var a = document.getElementById('inp').value
    var b = a.getAttribute('name')
    console.log(b)
}


// has Attribute its return true false if Attribute is available

function foo(){
    var a = document.getElementById('inp').value
    var b = a.hasAttribute('name')
    console.log(b)
}


//set Attribute
// agar attribute nai hai toh lga do
// 1 parameter for class 
// 2 parameter is for class name
function foo(){
    var a = document.getElementById('inp').value
    var b = a.setAttribute('class', 'aaa')
    console.log(b)
}
