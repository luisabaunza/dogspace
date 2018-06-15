function json1(){
	
var contenido ="";


for (var i=0; i<veterinariosObj.length; i++){
  // console.log(veterinariosObj[i].name);

  // var type = pokemonesJ[i].type;
  // console.log(type);
	contenido += "<div class='col-lg-5 veterinarios'>";
  contenido += "<div class='mv'>";
  contenido += "<div class='nombre'>";
  contenido += "<h3 class='h3mv'>mv</h3><h3>"+"."+veterinariosObj[i].name+"</h3>";
  contenido += "</div>";
  contenido += "<div class='datos'>";
  contenido += "<div class='valores'><a class='num'>"+veterinariosObj[i].consultas+ "</a><a>consultas</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+veterinariosObj[i].cirugias+"</a><a> cirugías</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+veterinariosObj[i].inyecciones+"</a><a> inyecciones</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+veterinariosObj[i].banos+  "</a><a>baños</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+veterinariosObj[i].desparacitaciones+"</a><a>desparacitaciones</a><br></div>"
  contenido += "</div>"
  contenido += "</div>"
  contenido += "<div class='fotoDiv container2'>"
  contenido += "<img src='./img/photoVet/"+veterinariosObj[i].foto+"' class='image foto'>"
  contenido += "<div class='overlay'>"
  contenido += "<div class='text'><a id='mailto' href='mailto:"+veterinariosObj[i].mail+"?Subject=Comentario%20de%20DogSpace'>"+veterinariosObj[i].mail+"</a><br>"+veterinariosObj[i].tel+"</div>"
  contenido += "</div>"
  contenido += "</div>"  
  contenido += "<div class='mvfooter'>"
  contenido += "<img class='ranking' src='./img/rkn2.jpg'>"
    if(veterinariosObj[i].rank==5){
      contenido += "<img class='huesos' src='./img/h5.png'>"
    }else if(veterinariosObj[i].rank==4){
      contenido += "<img class='huesos' src='./img/h4.png'>"
    }else if(veterinariosObj[i].rank==3){
      contenido += "<img class='huesos' src='./img/h3.png'>"
    }else if(veterinariosObj[i].rank==2){
      contenido += "<img class='huesos' src='./img/h2.png'>"  
    }else{
      contenido += "<img class='huesos' src='./img/h1.png'>"
    } 
  contenido += "</div>"            
  contenido += "<div class='mvf2'>"             
  contenido += "<a href='citas.html'><img class='cita' src='./img/cita.png'></a>"         
    if (veterinariosObj[i].zona=="poniente") {
        contenido += "<img id='zona' src='./img/poniente.png'>"
    }else if (veterinariosObj[i].zona=="norte") {
        contenido += "<img id='zona' src='./img/norte.png'>"
    }else if (veterinariosObj[i].zona=="oriente") {
        contenido += "<img id='zona' src='./img/oriente.png'>"
    }else if (veterinariosObj[i].zona=="centro") {
        contenido += "<img id='zona' src='./img/centro.png'>"
    }else if (veterinariosObj[i].zona=="sur") {
        contenido += "<img id='zona' src='./img/sur.png'>"
    } else{
        contenido += "<img id='zona' src='./img/sur.png'>"
    } 
  contenido += "</div>"
  contenido += "</div>"       
  }
  document.getElementById("vet").innerHTML=contenido;
}
            
function buscar() {
  var contenido = "";
  var search = document.getElementById("search").value;     
  console.log(search); 
            
            
    
var filtered = veterinariosObj.filter(veterinario => (veterinario.name.includes(search))||(veterinario.zona.includes(search)))

// var filtered = pokemones.filter(pokemon => (pokemon.name.toLowerCase().includes(search))|| (pokemon.id.includes(search)) || (pokemon.type.includes(search)) )

// console.log(filtered)\\
for (var i=0; i<filtered.length; i++){
    
  contenido += "<div class='col-lg-5 veterinarios'>";
  contenido += "<div class='mv'>";
  contenido += "<div class='nombre'>";
  contenido += "<h3 class='h3mv'>mv</h3><h3>"+"."+filtered[i].name+"</h3>";
  contenido += "</div>";
  contenido += "<div class='datos'>";
  contenido += "<div class='valores'><a class='num'>"+filtered[i].consultas+ "</a><a>consultas</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+filtered[i].cirugias+"</a><a> cirugías</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+filtered[i].inyecciones+"</a><a> inyecciones</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+filtered[i].banos+  "</a><a>baños</a><br></div>";
  contenido += "<div class='valores'><a class='num'>"+filtered[i].desparacitaciones+"</a><a>desparacitaciones</a><br></div>"
  contenido += "</div>"
  contenido += "</div>"
  contenido += "<div class='fotoDiv container2'>"
  contenido += "<img src='./img/photoVet/"+filtered[i].foto+"' class='image foto'>"
  contenido += "<div class='overlay'>"
  contenido += "<div class='text'><a id='mailto' href='mailto:"+filtered[i].mail+"?Subject=Comentario%20de%20DogSpace'>"+filtered[i].mail+"</a><br>"+filtered[i].tel+"</div>"
  contenido += "</div>"
  contenido += "</div>"  
  contenido += "<div class='mvfooter'>"
  contenido += "<img class='ranking' src='./img/rkn2.jpg'>"
  if(filtered[i].rank==5){
      contenido += "<img class='huesos' src='./img/h5.png'>"
    }else if(filtered[i].rank==4){
      contenido += "<img class='huesos' src='./img/h4.png'>"
    }else if(filtered[i].rank==3){
      contenido += "<img class='huesos' src='./img/h3.png'>"
    }else if(filtered[i].rank==2){
      contenido += "<img class='huesos' src='./img/h2.png'>"  
    }else{
      contenido += "<img class='huesos' src='./img/h1.png'>"
    } 
  contenido += "</div>"            
  contenido += "<div class='mvf2'>"             
  contenido += "<a href='citas.html'><img class='cita' src='./img/cita.png'></a>"         
    if (filtered[i].zona=="poniente") {
        contenido += "<img id='zona' src='./img/poniente.png'>"
    }else if (filtered[i].zona=="norte") {
        contenido += "<img id='zona' src='./img/norte.png'>"
    }else if (filtered[i].zona=="oriente") {
        contenido += "<img id='zona' src='./img/oriente.png'>"
    }else if (filtered[i].zona=="centro") {
        contenido += "<img id='zona' src='./img/centro.png'>"
    }else if (filtered[i].zona=="sur") {
        contenido += "<img id='zona' src='./img/sur.png'>"
    } else{
        contenido += "<img id='zona' src='./img/sur.png'>"
    } 
  contenido += "</div>"
  contenido += "</div>"       
  }
    document.getElementById("vet").innerHTML=contenido;
}



  



//   contenido += "<div class='pokemones'>";
//   contenido += "<img id='pok' src='img/"+ filtered[i].photo +"'>"
//   contenido += "<h2 id='name'>" + filtered[i].name + "</h2>"
//   contenido += "<h1 id='id'>" + filtered[i].id + "</h1>"
//   contenido += "<img id='type'src='type/"+ filtered[i].type +"'>"
//   contenido += "</div>";
// }
// document.getElementById("result").innerHTML=contenido;
// }       
            
           
          

  

