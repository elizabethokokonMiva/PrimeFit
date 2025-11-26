
      // HAMBURGER MENU
      const hamburger = document.getElementById("hamburger");
      const mobileNav = document.getElementById("mobileNav");

      hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
      });

      // MODAL LOGIC
      const helpBtn = document.getElementById("helpBtn");
      const helpBtnMobile = document.getElementById("helpBtnMobile");
      const popupModal = document.getElementById("popupModal");
      const closeModal = document.getElementById("closeModal");

      helpBtn.onclick = () => (popupModal.style.display = "block");
      helpBtnMobile.onclick = () => (popupModal.style.display = "block");
      closeModal.onclick = () => (popupModal.style.display = "none");
      window.onclick = (e) => {
        if (e.target === popupModal) popupModal.style.display = "none";
      };

      // COUNTDOWN TIMER FIX
      const eventDate = new Date("Nov 25, 2025 00:00:00").getTime();

      setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
      }, 1000);
    