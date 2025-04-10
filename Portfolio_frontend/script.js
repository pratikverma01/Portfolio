document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".glow-circle");
    
    // Animate Skill Circles
    circles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        circle.style.background = `conic-gradient(#ffcc00 ${percent}%, #222 ${percent}% 100%)`;
    });

    // Timeline Scroll Animation
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealTimelineItems() {
        timelineItems.forEach(item => {
            let rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealTimelineItems);
    revealTimelineItems(); // Trigger on page load
});


document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    // Smooth Floating Animation on Hover
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.3s ease-out, box-shadow 0.3s ease-out";
            card.style.transform = "translateY(-10px) scale(1.05)";
            card.style.boxShadow = "0 15px 30px rgba(255, 204, 0, 0.6)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            card.style.transform = "translateY(0px) scale(1)";
            card.style.boxShadow = "0 5px 15px rgba(255, 204, 0, 0.3)";
        });
    });

    // Continuous Floating Effect for a Premium Look
    function addFloatingEffect() {
        projectCards.forEach((card, index) => {
            let delay = index * 100; // Staggered start
            setTimeout(() => {
                card.style.animation = "floatAnimation 3s ease-in-out infinite";
            }, delay);
        });
    }
    
    addFloatingEffect();
});


document.addEventListener("DOMContentLoaded", function() {
    const achievementCards = document.querySelectorAll(".achievement-card");

    achievementCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.background = "rgba(255, 255, 255, 0.1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });

    // Floating Particles Effect
    const createParticle = () => {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;

        setTimeout(() => {
            particle.remove();
        }, 5000);
    };

    setInterval(createParticle, 200);
});


document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");

    function revealProjects() {
        projects.forEach((project) => {
            const projectTop = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (projectTop < windowHeight - 100) {
                project.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects();
});


function openModal(imageSrc, title, issuer) {
    document.getElementById("certImage").src = imageSrc;
    document.getElementById("certDetails").innerHTML = `<h3>${title}</h3><p>${issuer}</p>`;
    document.getElementById("certModal").style.display = "block";
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}


// document.addEventListener("DOMContentLoaded", function () {
//     const photoContainer = document.querySelector(".hero-photo-container");
//     const photo = document.querySelector(".hero-photo");

//     photoContainer.addEventListener("mousemove", (e) => {
//         let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//         let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//         photo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//     });

//     photoContainer.addEventListener("mouseleave", () => {
//         photo.style.transform = "rotateY(0deg) rotateX(0deg)";
//     });
// });




// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".carousel-track");
//     const images = document.querySelectorAll(".carousel-image");
//     const prevBtn = document.querySelector(".carousel-btn.prev");
//     const nextBtn = document.querySelector(".carousel-btn.next");

//     let currentIndex = 0;

//     function updateCarousel() {
//         const slideWidth = images[0].clientWidth;
//         track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }

//     nextBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateCarousel();
//     });

//     prevBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         updateCarousel();
//     });

//     window.addEventListener("resize", updateCarousel);

//     // Optional Auto-slide
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateCarousel();
//     }, 5000); // Change every 5 seconds
// });



document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");

            if (index === currentIndex) {
                slide.classList.add("active");
            }
        });

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    // Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }, 5000);

    updateSlides(); // initial state
});





// document.addEventListener("DOMContentLoaded", () => {
//     const slides = document.querySelectorAll(".carousel-slide");
//     const track = document.querySelector(".carousel-track");
//     const prevBtn = document.querySelector(".carousel-btn.prev");
//     const nextBtn = document.querySelector(".carousel-btn.next");
  
//     let currentIndex = 0;
  
//     function updateSlides() {
//       slides.forEach((slide, index) => {
//         slide.classList.remove("active");
  
//         if (
//           index === currentIndex ||
//           index === (currentIndex - 1 + slides.length) % slides.length ||
//           index === (currentIndex + 1) % slides.length
//         ) {
//           slide.style.display = "block";
//         } else {
//           slide.style.display = "none";
//         }
//       });
  
//       slides[currentIndex].classList.add("active");
  
//       // Shift track to center the active slide
//       const slideWidth = slides[0].offsetWidth + 20; // includes gap
//       const offset = (slideWidth * currentIndex) - slideWidth;
//       track.style.transform = `translateX(-${offset}px)`;
//     }
  
//     nextBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateSlides();
//     });
  
//     prevBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//       updateSlides();
//     });
  
//     // Auto-slide (optional)
//     setInterval(() => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateSlides();
//     }, 5000);
  
//     updateSlides();
//   });
  