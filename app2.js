
const codigos = {
   opentech:"5033",
   cisco:"5034",
   skyworth:"5035",
   coshipsagem:"5036",
   kaon1003:"5060",
   kaon4193:"5060",
}

console.log(codigos["cisco"]);
const infoand = document.querySelector('#infoand');

infoand.addEventListener('click', () => {
   window.open('https://ayuda.tigo.com.co/hc/es/articles/360000125228--C%C3%B3mo-configurar-mi-control-Universal-Tigo-Hogar');
})




const div = document.querySelector("#tipo");

div.addEventListener('click', (e) => {

   const marcass = document.getElementById("marcas").value;
   const value = e.target;
   const tipo = value.closest(".btns").value;


    //validar campos diferentes// 


   if (marcass === "select") {
      toString(swal.fire({
         width: "300px",
         icon: "error",
         title: "seleccione primero MARCA DEL DECO",
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
         background: "white",
      }))
      return false
   }

  


  // condicion OPENTECH //  

   if (marcass === 'skyworth' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: 'success',
         title: 'DECO SKYWORTH',
         text: `${codigos["skyworth"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   // condicion kaon //  

   else if (marcass === 'skyworth' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO SKYWORTH',
         text: `${codigos["skyworth"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'kaon1003' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO KAON 1003',
         text: `${codigos["kaon1003"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'kaon1003' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO KAON 1003',
         text: `${codigos["kaon4193"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'kaon4193' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO KAON 4193',
         text: `${codigos["kaon4193"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'kaon4193' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO KAON 4193',
         text: `${codigos["kaon4193"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'cisco' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO CISCO',
         text: `${codigos["cisco"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'cisco' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO CISCO',
         text: `${codigos["cisco"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'opentech' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO OPENTECH',
         text: `${codigos["opentech"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'opentech' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO OPENTECH',
         text: `${codigos["opentech"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'coship' && tipo === 'universal1') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO COSHIP/SAGEM',
         text: `${codigos["coshipsagem"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }

   else if (marcass === 'coship' && tipo === 'universal2') {
      toString(Swal.fire({
         width: '300px',
         icon: "success",
         title: 'DECO COSHIP/SAGEM',
         text: `${codigos["coshipsagem"]}`,
         timer: 60000,
         allowOutsideClick: false,
         color: "black",
      }));

      return false;
   }


   
  



});

 // let nuevaMarca = document.querySelector('#busqueda').value;

                                                   // if (nuevaMarca !== '') {
                                                   //   MARCAS.push(nuevaMarca.toLocaleLowerCase().trim())
                                                   // }






