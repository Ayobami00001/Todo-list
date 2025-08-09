function showToast(txt,grav, posi,bgcolo,colo) {
    Toastify({
        text: txt,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: grav, // `top` or `bottom`
        position: posi, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgcolo,
          color: colo
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
    var allitems = []
    var allitem = []
    var allite = []
    var allit = []
var editindex;

    function listing() {
        if (items.value != '') {
            allitems.push(items.value)
            console.log(allitems); 
            showToast(`${items.value} added successfully`,'bottom','center','green', 'black')
            document.getElementById('items').value =''
            console.log(allitems);
            displayItems()
        }else{
            showToast('input cannot be empty','top','center','red','black')
            
        }
    }
    function listner() {
        if (item.value != '') {
            allitem.push(item.value)
            console.log(allitem); 
            showToast(`${item.value} added successfully`,'bottom','center','green', 'black')
            document.getElementById('item').value =''
            console.log(allitem);
            displayItem()
        }else{
            showToast('input cannot be empty','top','center','red','black')
            
        }
    }function listor() {
        if (ite.value != '') {
            allite.push(ite.value)
            console.log(allite); 
            showToast(`${ite.value} added successfully`,'bottom','center','green', 'black')
            document.getElementById('ite').value =''
            console.log(allite);
            displayIte()
        }else{
            showToast('input cannot be empty','top','center','red','black')
            
        }
    }function lister() {
        if (it.value != '') {
            allit.push(it.value)
            console.log(allit); 
            showToast(`${it.value} added successfully`,'bottom','center','green', 'black')
            document.getElementById('it').value =''
            console.log(allit);
            displayIt()
        }else{
            showToast('input cannot be empty','top','center','red','black')
            
        }
    }
    function editItems(i) {
        editindex = i
    }
    function editItem(i) {
    editindex = i
}
    function editIte(i) {
    editindex = i
}
    function editIt(i) {
    editindex = i           
}
function editgangan() {
    allitems.splice(editindex,1,newItems.value)
    displayItems()
    showToast('Item edited successfully','top','center','green','black')
}
function editganga() {
   allitem.splice(editindex,1,newItem.value)
    displayItem()
    showToast('Item edited successfully','top','center','green','black')
}
function editgang() {
    allite.splice(editindex,1,newIte.value)
    displayIte()
    showToast('Item edited successfully','top','center','green','black')
}
function editgan() {
    allit.splice(editindex,1,newIt.value)
    displayIt()
    showToast('Item edited successfully','top','center','green','black')
}
 




    function displayItems() {
        showitems.innerHTML = ''
          allitems.map((data,index)=>{
              showitems.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                <button onclick="deleteItems(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="editItems(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning btn-sm">Edit</button>
                `
            })
    }
    function displayItem() {
        showitem.innerHTML = ''
          allitem.map((data,index)=>{
              showitem.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                <button onclick="deleteItem(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="editItem(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal2" class="btn btn-warning btn-sm">Edit</button>
                `
            })
    }function displayIte() {
        showite.innerHTML = ''
          allite.map((data,index)=>{
              showite.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                <button onclick="deleteIte(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="editIte(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal3" class="btn btn-warning btn-sm">Edit</button>
                `
            })
    }function displayIt() {
        showit.innerHTML = ''
          allit.map((data,index)=>{
              showit.innerHTML += 
              `
              <h5 class="text-dark mt-2 ms-3 " style="overflow-wrap: break-word;" >${index+1}.${data}</h5>
              <button onclick="deleteIt(${index})" class="btn btn-danger btn-sm">Delete</button>
            <button onclick="editIt(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal4" class="btn btn-warning btn-sm">Edit</button>
              `
          })
        }
        function deleteItems(index) {
    var sure = confirm("Are you sure you want to delete this!");
    if (sure) {
        allitems.splice(index, 1);
        showToast('Item deleted successfully', 'top', 'center', 'red', 'black');
        displayItems();
    }
    else {
        showToast('Deletion cancelled', 'top', 'center', 'blue', 'black');
    }
}
    function deleteItem(index) {
        var sure = confirm("Are you sure you want to delete this!")
        if (sure) {
        allitem.splice(index,1);
        showToast('Item deleted successfully','top','center','red','black');
        displayItem();
        }else {
            showToast('Deletion cancelled','top','center','blue','black');
        }
        
    }
    function deleteIte(index) {
        var sure = confirm("Are you sure you want to delete this!")
        if (sure) { 
        allite.splice(index,1)
        showToast('Item deleted successfully','top','center','red','black');
        displayIte();
        }else {
            showToast('Deletion cancelled','top','center','blue','black');
        }
        
    }
    function deleteIt(index) {
        var sure = confirm("Are you sure you want to delete this!")
    if (sure) {
        allit.splice(index,1)
        showToast('Item deleted successfully','top','center','red','black');
        displayIt();
        }else {
            showToast('Deletion cancelled','top','center','blue','black');
        }
        
    }


        
