
    //=============== START - DECLARATION DU FORMULAIRE ===============//    

    (function() {
        'use strict'

        let form = document.getElementById('lessonForm');

        form.addEventListener('submit', function(event) {
            
            Array.from(form.elements).forEach((input) => {
                if (input.type !== "submit") {
                    if (!validateFields(input)) {
                        
                        event.preventDefault();
                        event.stopPropagation();
                        
                        input.classList.remove("is-valid");
                        input.classList.add("is-invalid");
                        input.nextElementSibling.style.display = 'block';
                    } 
                    else {
                        input.nextElementSibling.style.display = 'none';
                        input.classList.remove("is-invalid");
                        input.classList.add("is-valid");
                    }
                }
            });
        }, false)
    })()

    //=============== END - DECLARATION DU FORMULAIRE ===============//

    
    // Validation d'un champ REQUIRED
    function validateRequired(input) {
        return !(input.value == null || input.value == "");
    }
    // validation du nombre de cracttéres :Min ET maX 
    function validateLength(input, minLength, maxLength) {
        return !(input.value.length < minLength || input.value.length > maxLength);
    }


    //validation des caractéres :LATIN & LETTRES
    function validateText(input){
        return input.value.match("^[A-Za-z]+$")
    }

    //Validation dun email :
    function validateEmail(input){
        let EMAIL = input.value;
        let POSAT = EMAIL.indexOf("@");
        let POSDOT = EMAIL.lastIndexOf(".");
        return  !(POSAT < 1 || (POSDOT - POSAT<2));
    }



    function validateFields(input) {

    let fieldName = input.name;

    // Validaton de l'input PRENOM
    if (fieldName == "firstName") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validateLength(input, 2, 20)){
            return false;
        }
        return (true);
    }
    if(fieldName == "email"){
        if (!validateEmail(input)){
            return false
        }
        return (true);
    }
}

