// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector("#myModal");
const closeModalSpan = document.querySelector(".close");
  
const modalPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve();
        modal.style.display = "none";
      }, 60);
});

modalPromise.then(() => {
    modal.style.display="block"
 });

closeModalSpan.addEventListener("click",()=>{
    modal.style.display ="none"
});
