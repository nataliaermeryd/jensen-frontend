const storageType = localStorage; 
const consentPropertyName = 'jdc_consent'; 

const shouldShowPopup = () => !storageType.getItem(consentPropertyName); 
const saveToStorage = () => storageType.setItem(consentPropertyName, true); 

window.onload = () => {
    if (shouldShowPopup()) {
        const consent = confirm('Agree to the terms and conditions of the site?'); 
        if (consent) {
            saveToStorage(); 
        }
    }
}; 


/*
    <div id="consent-popup" class="hidden">
        <p>By using this site you agree to our <a href="#">Terms and conditions</a>.
        Please <a href="#" id="accept">ACCEPT</a> these before using our site.
        </p>
    </div>
    */

    /*#consent-popup {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background-color: #fff;
    opacity: 1;
    transition: opacity .8s ease;

}*/