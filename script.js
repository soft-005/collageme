
      function mid1(){
    pic = 4 * 4;
       u = 2;
    row = 1;
    spacin = 1;
       while(row <= pic){u += 1;spacin += 1;
                  m = document.getElementById("p" + u).classList;
                       m.add('image1');  m.add('img-4-' + row);
                         
               row += 1;
                         if(spacin == 5){u += 4;spacin -= 4;}
                             
                        }}
    
    function mid(){
    pic = 4 * 4;
       u = 2;
    row = 1;
    spacin = 1;
       while(row <= pic){u += 1;spacin += 1;
                  m = document.getElementById("p" + u).classList;
                       m.add('image2');  m.add('img-4-' + row);
               row += 1;
                         if(spacin == 5){u += 4;spacin -= 4;}
    }}
        function tex(){
   
                  document.getElementById("p1").innerHTML = 'N';
            document.getElementById("p9").innerHTML = 'e';
            document.getElementById("p17").innerHTML = 'w';
            
                     
              
    }
    function clos(){
          pic = 40;
         u = 0;
        while(row <= pic){u += 1;
                           document.getElementById("p" + u).innerHTML = '';
                  document.getElementById("p" + u).classList = '';}
    }
                      
           setTimeout(function(){mid1();}, 2000);
    setTimeout(function(){mid();}, 5000);
        setTimeout(function(){tex();}, 6000);   

            
    
    setInterval(function(){gt = 40;
        usbm = 0;
    
       while(usbm <= gt){usbm += 1;
                          g = document.getElementById("p" + usbm);
                         
                        
                       if(g.innerHTML != '' || g.classList != ''){  g.style.boxShadow = '4px 4px 5px black';}else{g.style.boxShadow = '0px 0px 0px black';}}}, 1000)
    
    
    
    
gtk = 40;usbmk = 0;
 while(usbmk <= gtk){usbmk += 1;
gfk = document.getElementById("p" + usbmk);
gfk.draggable = 'true';
gfk.style.cursor = 'pointer';
gfk.addEventListener('dragstart', drag);
gfk.addEventListener('drop', drop);
gfk.addEventListener('dragover', allowDrop);}
    
    
    
       function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
  //ev.target.appendChild(document.getElementById(data));
    //      drag          drop
    //alert(data+ ', ' + ev.target.id);
    const ct = ev.target.id;
    iam = document.getElementById(ct);
    tytt = document.getElementById(data);
    const dt = tytt.innerHTML;
     const hu = iam.innerHTML;
    
    const hu2 =  iam.classList;
    const dt2 = tytt.classList;
    
       // alert(dt + ' , ' + hu + ', ' + dt2 + ' , ' + hu2 + ', ' + ct + ', ' + data + ' , ' + dt.length + ' , ' + dt2.length);        
//text to text,  text to img, img to text, img to img 
   

        //text to notin
 if(dt != ''  && (hu == '' && hu2 == '')){
        tytt.innerHTML = hu;
     iam.innerHTML = dt;                             
            }
    //text to text
 if((dt && hu != '')){
      tytt.classList = '';
     iam.classList = '';
     tytt.innerHTML = hu;
     iam.innerHTML = dt;}
    
    //text to img
if((dt.length >= 1) && (dt && hu2 != '')){
    iam.innerHTML = dt;
    tytt.innerHTML = hu2;
    tytt.classList = dt;
    tytt.innerHTML = '';
    //iam.classList = '';
    }
    
 //img to text
     if((dt2.length == 3 && hu.length >= 1) && (dt.length <= 0)){ 
  tytt.innerHTML = hu;
         iam.innerHTML = dt2;
          tytt.classList = hu2;
         iam.classList = iam.innerHTML;
    // iam.innerHTML = '';
         iam.innerHTML = '';
         //tytt.classList = '';

      }
    
    
       //img to text2
   //  if((dt != '') && (hu2 && dt2 == '')){ 
   //      iam.innerHTML = dt;
  //  tytt.innerHTML = hu2;
  //  tytt.classList = dt;
  //  tytt.innerHTML = '';}
    
    
    //img to img
     if((hu2 && dt2 != '')){
    tytt.innerHTML = dt2;
    tytt.classList = hu2;
    iam.classList = tytt.innerHTML;
      tytt.innerHTML = '';}
    
    
    
    
    
    /*tytt.innerHTML = dt2;
    tytt.classList = hu2;
    iam.classList = tytt.innerHTML;
      tytt.innerHTML = '';*/
    
}
    