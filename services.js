function ToRedirect(){
  window.location.href= "contact.html";
}


 //Buttons in Services when clicked
 function Redirect(btnID){
  const form = document.getElementById('form');
  const btnhaircut = document.getElementById('btnhaircut');
  const btnhairblower = document.getElementById('btnhairblower');
  const btnhairiron = document.getElementById('btnhairiron');
  
  const form2 = document.getElementById('form2');
  const btnhaircolor = document.getElementById('btnhaircolor');
  const btnrebond = document.getElementById('btnrebond');
  const btnbrazillian = document.getElementById('btnbrazillian');

  const form3 = document.getElementById('form3');
  const btnmanicure = document.getElementById('btnmanicure');
  const btnpedicure = document.getElementById('btnpedicure');

  const form4 = document.getElementById('form4');
  const btnregularmassage = document.getElementById('btnregularmassage');
  const btnfootspa = document.getElementById('btnfootspa');


  const form5 = document.getElementById('form5');
  const btnhandm = document.getElementById('btnhandm');
  const btneyebrow = document.getElementById('btneyebrow');
  const btneyelash = document.getElementById('btneyelash');

  const form6 = document.getElementById('form6');
  const btngelmanicure = document.getElementById('btngelmanicure');
  const btngelpedicure = document.getElementById('btngelpedicure');

//******************************************************************** */
  if (btnID === 'btnhaircut'){
    form.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnhaircut.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }

  else if (btnID === 'btnhairblower'){
    form.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnhairblower.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }

  else if (btnID === 'btnhairiron'){
    form.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnhairiron.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }
    
//********************************************************** */

  else if (btnID === 'btnhaircolor'){
    form2.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnhaircolor.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }


  else if (btnID === 'btnrebond'){
    form2.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnrebond.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }

  else if (btnID === 'btnbrazillian'){
    form2.addEventListener('submit', function(e){
      e.preventDefault();
   
      const btnServiceValue = btnbrazillian.value;
  
      window.localStorage.setItem('specificservice',btnServiceValue);
  
      window.location.href= "contact.html";
  
    })
  }

//************************************************************** */

else if (btnID === 'btnmanicure'){
  form3.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnmanicure.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btnpedicure'){
  form3.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnpedicure.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}


//*********************************************** */
else if (btnID === 'btnregularmassage'){
  form4.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnregularmassage.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}


else if (btnID === 'btnfootspa'){
  form4.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnfootspa.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

 
//************************************************* */

else if (btnID === 'btnhandm'){
  form5.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnhandm.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btneyebrow'){
  form5.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btneyebrow.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btneyelash'){
  form5.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btneyelash.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

/************************************************** */
else if (btnID === 'btngelmanicure'){
  form6.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btngelmanicure.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btngelpedicure'){
  form6.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btngelpedicure.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

}
