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
    function displayItems() {
        showitems.innerHTML = ''
          allitems.map((data,index)=>{
              showitems.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                
                `
            })
    }
    function displayItem() {
        showitem.innerHTML = ''
          allitem.map((data,index)=>{
              showitem.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                
                `
            })
    }function displayIte() {
        showite.innerHTML = ''
          allite.map((data,index)=>{
              showite.innerHTML += 
                `<h5 class="text-dark mt-2 ms-3" >${index+1}.${data}</h5>
                
                `
            })
    }function displayIt() {
        showit.innerHTML = ''
          allit.map((data,index)=>{
              showit.innerHTML += 
              `
              <h5 class="text-dark mt-2 ms-3 " style="overflow-wrap: break-word;" >${index+1}.${data}</h5>`
          })
        }
