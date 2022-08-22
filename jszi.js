function Validator() {

      ernom=document.getElementById('ftnom');  
      erpre=document.getElementById('ftpre');
      erem=document.getElementById('erem');
      erdn=document.getElementById('erdn');
      ertele=document.getElementById('ertele'); 
      erpw=document.getElementById('erpw'); 
      ervpw=document.getElementById('ervpw'); 
      ercp=document.getElementById('ercp'); 
      vg=document.getElementById('vg'); 
      erp=document.getElementById('erp'); 

    nom =document.getElementById("nom").value;
     prenom =document.getElementById("prenom").value;
     cp =document.getElementById("cp").value;
     dtn=document.getElementById('dn').value;
     email=document.getElementById("email").value;
     tele=document.getElementById("tele").value;
     pw=document.getElementById("pw").value;
     vpw=document.getElementById("vpw").value;
     p=document.getElementById("pay").value;
     RegExp('^[0-9]{10}$/','i');
     var regEmail = new RegExp('^[0-9a-z._-]*[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
     testemail = regEmail.test(email);
     if(nom.length<=2 ||!isNaN(nom)){
          ernom.innerText=" nom pas valid ";
       }else{
          ernom.innerText="⁎";
         
       }

       if(prenom.length<=2 ||!isNaN(prenom)){
          erpre.innerText=" prenom non valide ressayer plus tard ";
          
       }else{
          erpre.innerText="⁎";

       }
       var regEmail = new RegExp('^[0-9a-z._-]*[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
       testemail = regEmail.test(email);
 
      if(!testemail){
          erem.innerText=" erreur veillez ressayez "; 

       }else{
          erem.innerText="⁎";

       }
       var regtele = new RegExp('^[0-9]{10}$','i');
       regtele  = regtele.test(tele);
 
       if(!regtele){
          ertele.innerText=" telephon non valide ressayez";          
       }else{
          ertele.innerText="⁎"; 

       }
       dif =new Date().getFullYear()-new Date(dtn).getFullYear();
       if(dtn==""){
          erdn.innerText=" obligatoire";

       }
       else if(dif<13){
          erdn.innerText=" age pas valid";

       }else{
          erdn.innerText="⁎";

       }
       
       var regEmail = new RegExp('^[0-9a-z._-]*[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
       testemail = regEmail.test(email);
 
      if(!testemail){
          erem.innerText=" email pas valide "; 
        
       }else{
          erem.innerText="email valide";
        
       }
 
       var regcp = new RegExp('^[0-9]{5}$','i');
       regcp  = regcp.test(cp);
       if(!regcp){
          ercp.innerText=" code postal no valide veillez ressayee";
       
       }else{
          ercp.innerText="⁎"; 

       }
       g = document.querySelector('input[name = "g"]:checked');
       if(g ==null){  
          vg.innerText=" champ obligatoire";
       } else {
          vg.innerText="⁎"; 
       }
 
       if( p == "" ) {
          erp.innerText="choisissez votre pays";
       }else{
          erp.innerText="⁎";
       }
 

     
        var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
            
        if(!regularExpression.test(pw)) {
           erpw.innerText=" Pw pas valid"; 

        }else{
           erpw.innerText="⁎";
  
        }

      if(pw!=vpw || !regularExpression.test(pw)) {
         ervpw.innerText=" PW different"; 

      }else{
         ervpw.innerText="⁎";

      }


    }      
 