const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const reserve_btn = document.querySelector(".reserve_btn");


tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active_content"));
    const active_content = document.getElementById(tab.innerHTML.toLowerCase());
    active_content.classList.add("active_content");
    
  });
});


reserve_btn.addEventListener("click",()=>{
  window.location.href = "contact.html";
});
