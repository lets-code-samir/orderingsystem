<<<<<<< HEAD
const form=document.querySelector("form")
    
setTimeout(() => {
    const welcome = document.getElementById("welcome");
    welcome.style.opacity = "0";

    setTimeout(() => {
        welcome.style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 1000);

}, 2000);


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobileNumber");
    const weight = document.getElementById('weight').value
    const item=document.getElementById('item').value
    const place=document.getElementById('location').value
    
    // we are putting a conditioning to verify if the number of that person is correct
    if ( !/^[0-9]{10}$/.test(mobile.value.trim())){
        alert('enter correct number')
        mobile.value=''
        mobile.focus()
        return
       }
    const message = `Hi, My name is ${name} from ${place}. I want ${weight} of ${item}. My number is ${mobile.value}`;
    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "919083133309"; // replace with real number

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Show confirmation popup
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.add("active")

    setTimeout(() => {
       window.open(whatsappURL, "_blank");
       confirmation.classList.remove("active");
       form.reset();
    }, 1500);
    
    
})


