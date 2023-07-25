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
  const btneyelash = document.getElementById('btneyelash');

  const form6 = document.getElementById('form6');
  const btngelmanicure = document.getElementById('btngelmanicure');
  const btngelpedicure = document.getElementById('btngelpedicure');

  const form7 = document.getElementById('form7');
  const btnbalayage = document.getElementById('btnbalayage');
  const btnhighlights = document.getElementById('btnhighlights');
  const btnperm = document.getElementById('btnperm');

  const form8 = document.getElementById('form8');
  const btnhotoil = document.getElementById('btnhotoil');
  const btnhairbotox = document.getElementById('btnhairbotox');
  const btncellophane = document.getElementById('btncellophane');

//********************************************************************  FORM1*/
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
    
//*********************************************************************** FORM2/

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

//************************************************************** FORM3*/

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


//******************************************************* FORM4*/
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

 
//*************************************************************** FORM5*/

else if (btnID === 'btnhandm'){
  form5.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnhandm.value;

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

/************************************************************* FORM6*/
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

/******************************************************** FORM7*/
else if (btnID === 'btnbalayage'){
  form7.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnbalayage.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}


else if (btnID === 'btnhighlights'){
  form7.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnhighlights.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btnperm'){
  form7.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnperm.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}
/********************************************************* FORM8*/
else if (btnID === 'btnhotoil'){
  form8.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnhotoil.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}


else if (btnID === 'btnhairbotox'){
  form8.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btnhairbotox.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

else if (btnID === 'btncellophane'){
  form8.addEventListener('submit', function(e){
    e.preventDefault();
 
    const btnServiceValue = btncellophane.value;

    window.localStorage.setItem('specificservice',btnServiceValue);

    window.location.href= "contact.html";

  })
}

}