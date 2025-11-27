
      (function(){
        console.log('event.js loaded');

        document.addEventListener('DOMContentLoaded', () => {
          try {
            // HAMBURGER MENU
            const hamburger = document.getElementById("hamburger");
            const mobileNav = document.getElementById("mobileNav");
            if (hamburger && mobileNav) {
              hamburger.addEventListener("click", () => {
                mobileNav.classList.toggle("open");
              });
            }

            // MODAL LOGIC (guarded) - only attach handlers if elements exist
            const helpBtn = document.getElementById("helpBtn");
            const helpBtnMobile = document.getElementById("helpBtnMobile");
            const popupModal = document.getElementById("popupModal");
            const closeModal = document.getElementById("closeModal");

            if (helpBtn && popupModal) {
              helpBtn.addEventListener('click', () => { popupModal.style.display = 'block'; });
            }

            if (helpBtnMobile && popupModal) {
              helpBtnMobile.addEventListener('click', () => { popupModal.style.display = 'block'; });
            }

            if (closeModal && popupModal) {
              closeModal.addEventListener('click', () => { popupModal.style.display = 'none'; });
              window.addEventListener('click', (e) => {
                if (e.target === popupModal) popupModal.style.display = 'none';
              });
            }

            // COUNTDOWN TIMER FIX
            // Set to a future date for the event (closing ceremony in HTML is Nov 30, 2025 8:00 PM)
            const eventDate = new Date("Nov 30, 2025 20:00:00").getTime();

            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");

            function pad(n) { return String(n).padStart(2, '0'); }

            console.log('countdown elements:', { daysEl: !!daysEl, hoursEl: !!hoursEl, minutesEl: !!minutesEl, secondsEl: !!secondsEl });

            if (daysEl && hoursEl && minutesEl && secondsEl) {
              // Immediately update once so user doesn't see stale values until 1s
              const updateOnce = () => {
                const now = Date.now();
                const diff = eventDate - now;
                if (diff <= 0) {
                  daysEl.innerText = '00';
                  hoursEl.innerText = '00';
                  minutesEl.innerText = '00';
                  secondsEl.innerText = '00';
                  return;
                }
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((diff % (1000 * 60)) / 1000);
                daysEl.innerText = pad(d);
                hoursEl.innerText = pad(h);
                minutesEl.innerText = pad(m);
                secondsEl.innerText = pad(s);
              };

              updateOnce();

              const countdownInterval = setInterval(() => {
                const now = Date.now();
                const diff = eventDate - now;

                if (diff <= 0) {
                  // Event has started or date is in the past
                  daysEl.innerText = '00';
                  hoursEl.innerText = '00';
                  minutesEl.innerText = '00';
                  secondsEl.innerText = '00';
                  clearInterval(countdownInterval);
                  return;
                }

                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((diff % (1000 * 60)) / 1000);

                daysEl.innerText = pad(d);
                hoursEl.innerText = pad(h);
                minutesEl.innerText = pad(m);
                secondsEl.innerText = pad(s);
              }, 1000);
            }

          } catch (err) {
            console.error('event.js error', err);
          }
        });
      })();
    