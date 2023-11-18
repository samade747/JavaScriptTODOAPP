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

    savingtoLocalStorage(li.innerText.trim());


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

    loadAndDisplayItems();

}

function savingtoLocalStorage(itemText){
    // Retriving Existing items in our local storage
    var items = JSON.parse(localStorage.getItem('items')) || [] ;
    // Now we add new items into array, ab ham new item array mai add krengai
    items.push(itemText);
    // save the updated array back to local storage
    localStorage.setItem('items', JSON.stringify(items));
    
}

function loadAndDisplayItems() {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    var ul = document.getElementById('ul');

    // Clear existing items in the ul
    ul.innerHTML = '';

    // Loop through the items and create li elements
    items.forEach(function (itemText) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(itemText));

        var deletebtn = document.createElement('button');
        deletebtn.appendChild(document.createTextNode('del'));
        deletebtn.setAttribute('onclick', 'del(this.parentNode)');
        deletebtn.setAttribute('class', 'btn btn-danger aaa');
        li.appendChild(deletebtn);

        var editbtn = document.createElement('button');
        editbtn.appendChild(document.createTextNode('Edit'));
        editbtn.setAttribute('onclick', 'editfun(this)');
        editbtn.setAttribute('class', 'btn btn-info aaa');
        li.appendChild(editbtn);

        li.style.listStyleType = 'none';
        ul.appendChild(li);
    });
}


function deleteall(){
    getul.innerHTML = '' 
    localStorage.clear()

}


function del(e){
    e.parentNode.remove()
}


function editfun(e){
    var userEdit = prompt('Enter Edit value' ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit;
}

loadAndDisplayItems();