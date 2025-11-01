function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_portfolio0171","template_putbd8b",parms).then(alert("Email sent!"))
}






const mainBody = document.querySelectorAll("header, main, form button");
const form = document.querySelector("form");



mainBody.forEach(main => {
    main.addEventListener("click", function () {
        form.classList.remove("viewed");
    })
})


function viewEmailForm() {
    form.classList.add("viewed");
}


function viewPopUp(parentId) {
    document.getElementById(parentId).classList.add("viewed");
}
function hidePopUp(parentId) {
    document.getElementById(parentId).classList.remove("viewed");
}

function switchMode() {
    const body = document.querySelector("body");
    const input = document.getElementById("switch");
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");

    if (!input.checked) {
        body.classList.add("light");
        light.classList.add("active-mode");
        dark.classList.remove("active-mode");
    } else {
        body.classList.remove("light");
        dark.classList.add("active-mode");
        light.classList.remove("active-mode");
    }
}




// const sections = document.querySelectorAll("section");
// const images = document.querySelectorAll(".services img");
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry  =>{
//         entry.isIntersecting ? entry.target.classList.add("active") : entry.target.classList.remove("active");
//     })
// },
// {
//     threshold : 0.6
// });

// observer.observe(images)



// const sectionObserver = new IntersectionObserver((section, anchor) => {
//     if (section.isIntersecting) {
//         anchor.classList.add("active");
//     } else {
//         anchor.classList.remove("active");
//     }
// }, {
//     threshold: 0.6
// });


// sectionObserver.observe("#home", "a1");
// sectionObserver.observe("#skills", "a2");
// sectionObserver.observe("#services", "a3");
// sectionObserver.observe("#contact", "a4");

// let section = ["#home", "#skills", "#services", "#contact"].forEach(id => {
//     const section = document.querySelector(id);
// });
// console.log(section)



// const section1 = document.getElementById("home");
// const section2 = document.getElementById("skills");
// const section3 = document.getElementById("services");
// const section4 = document.getElementById("contact");

// const anchor1 = document.getElementById("a1");
// const anchor2 = document.getElementById("a2");
// const anchor3 = document.getElementById("a3");
// const anchor4 = document.getElementById("a4");

// sectionObserver.observe(section1, anchor1);
// sectionObserver.observe(section2, anchor2);
// sectionObserver.observe(section3, anchor3);
// sectionObserver.observe(section4, anchor4);



const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;
        const anchor = document.querySelector(`a[href="#${section.id}"]`);

        if (anchor) {
            if (entry.isIntersecting) {
                anchor.classList.add("active");
            } else {
                anchor.classList.remove("active");
            }
        }
    })
}, {threshold: 0.3,
    rootMargin: "0px 0px -20% 0px"});

["#home", "#skills", "#services", "#contact"].forEach(id => {
    const section = document.querySelector(id);
    if (section) {
        sectionObserver.observe(section);
    }
})



function ViewAlert(id) {
    const alert = document.getElementById(id);
    alert.classList.add("alerted");
    setTimeout(() => {
        alert.classList.remove("alerted");
    }, 3000);
}