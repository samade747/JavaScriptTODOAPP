// // checking getAttribute, 
// function foo(){
//     var a = document.getElementById('inp').value
//     var b = a.getAttribute('name')
//     console.log(b)
// }


// // has Attribute its return true false if Attribute is available

// function foo(){
//     var a = document.getElementById('inp').value
//     var b = a.hasAttribute('name')
//     console.log(b)
// }


// //set Attribute
// // agar attribute nai hai toh lga do
// // 1 parameter for class 
// // 2 parameter is for class name
// function foo(){
//     var a = document.getElementById('inp').value
//     var b = a.setAttribute('class', 'aaa')
//     console.log(b)
// }


var getul = document.getElementById('ul');

function foo1(){
    var ca = document.getElementById('inp2')
    var li = document.createElement('li')
    var litext = document.createTextNode(ca.value);
    li.appendChild(litext)
    getul.appendChild(li)
    ca.value = ''
    // button banayah
    var deletebtn = document.createElement('button');
    // button ke liye text likha
    var deletebtntext = document.createTextNode('Delete');
    // deletebtn par text charahyah
    deletebtn.appendChild(deletebtntext);
    // append the 'delete' button to the list item
    li.appendChild(deletebtn);
    // onclick by setattribute for the 'delete' button
    deletebtn.setAttribute('onclick', 'del(this.parentNode)');
    //create ka button banayah
    var editbtn = document.createElement('button');
    // create ke button ke liye text likha
    var editbtnText = document.createTextNode('Edit');
    // AppendChild krwaiya text node ko & edit button ko
    editbtn.appendChild(editbtnText);
    // onclick set kya edit button par
    editbtn.setAttribute('onclick', 'editfun(this)')    
        // edit button lagyah list item ke sath
    li.appendChild(editbtn)
        // bootstrap lgai delete button par
    deletebtn.setAttribute( 'class', 'btn btn-danger aaa')
    deletebtn.setAttribute('onclick', 'del(this)');
    // bootstrap lgai edit button par
    editbtn.setAttribute('class', 'btn btn-info aaa')

}


function deleteall(){
    getul.innerHTML = '' 

}


function del(e){
    e.parentNode.remove()
}


function editfun(e){
    var userEdit = prompt('Enter Edit value' ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit;
}