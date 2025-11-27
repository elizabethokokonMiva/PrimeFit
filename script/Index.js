// MOBILE MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
});

// SIMPLE SEARCH FUNCTIONALITY
const searchBar = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");

// Dummy product list (replace with real data later)
const products = [
  { name: "Men Running Shoes" },
  { name: "Ladies Sportswear" },
  { name: "Kids Gym Set" },
  { name: "Yoga Mat" },
  { name: "Dumbbells Set" },
];

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.length > 0) {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query)
    );
    if (filtered.length === 0) {
      searchResults.innerHTML = "<p>No results found.</p>";
    } else {
      filtered.forEach((p) => {
        const div = document.createElement("div");
        div.textContent = p.name;
        div.className = "search-item";
        searchResults.appendChild(div);
      });
    }
  }
});

// --- DUMMY DATA FOR PRODUCT CARDS (matching HTML) ---
const productCards = Array.from(document.querySelectorAll(".product-card"));
const brandFilterContainer = document.getElementById("brandFilters");
const categoryFilterContainer = document.getElementById("categoryFilters");
const priceRangeInput = document.getElementById("priceRange");

let currentFilters = {
  brand: "all",
  category: "all",
  price: parseInt(priceRangeInput.value),
};

// --- CORE FILTERING LOGIC ---
function applyFilters() {
  productCards.forEach((card) => {
    const cardBrand = card.dataset.brand;
    const cardCategory = card.dataset.category;
    const cardPrice = parseInt(card.dataset.price);

    const matchBrand =
      currentFilters.brand === "all" || currentFilters.brand === cardBrand;
    const matchCategory =
      currentFilters.category === "all" ||
      currentFilters.category === cardCategory;
    const matchPrice = cardPrice <= currentFilters.price;

    if (matchBrand && matchCategory && matchPrice) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// --- FILTER OPTION CLICK HANDLER ---
function setupFilterOptions(container, filterKey) {
  let options = Array.from(container.querySelectorAll(".filter-option"));

  const allElem = document.createElement("label");
  allElem.className = "filter-option selected";
  allElem.dataset.value = "all";
  allElem.innerHTML = `All <span class="count">${options.length}</span>`;

  container.prepend(allElem);
  options.unshift(allElem);

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((o) => o.classList.remove("selected"));
      option.classList.add("selected");
      currentFilters[filterKey] = option.dataset.value;
      applyFilters();
    });
  });
}

// Initial setup for filters
setupFilterOptions(brandFilterContainer, "brand");
setupFilterOptions(categoryFilterContainer, "category");

// --- PRICE RANGE HANDLER ---
priceRangeInput.addEventListener("input", () => {
  currentFilters.price = parseInt(priceRangeInput.value);
  // You'd typically update a visual display of the current price here
  // For now, we'll just apply filters on change
  applyFilters();
});

// --- LIKE BUTTON FUNCTIONALITY (as per original JS) ---
// --- LIKE BUTTON FUNCTIONALITY (UNICON VERSION) ---
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");

        if (btn.classList.contains("liked")) {
            btn.classList.remove("uil-heart");
            btn.classList.add("uil-heart-alt");   // solid/filled version
        } else {
            btn.classList.remove("uil-heart-alt");
            btn.classList.add("uil-heart");
        }
    });
});

// --- CART BUTTON FUNCTIONALITY ---

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.icons i').forEach(i => {
    if (i.classList.contains('uil-heart') || i.classList.contains('uil-heart-alt')) {
      if (!i.classList.contains('like-btn')) i.classList.add('like-btn');
    }
  });

  // LIKE BUTTON HANDLER (Unicons)
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Toggle 'liked' visual class
      const isLiked = btn.classList.toggle('liked');
      if (isLiked) {
        // prefer uil-heart-alt for filled heart (if available)
        if (btn.classList.contains('uil-heart')) btn.classList.replace('uil-heart', 'uil-heart-alt');
        else if (!btn.classList.contains('uil-heart-alt')) btn.classList.add('uil-heart-alt');
      } else {
        // switch back to outline
        if (btn.classList.contains('uil-heart-alt')) btn.classList.replace('uil-heart-alt', 'uil-heart');
        else if (!btn.classList.contains('uil-heart')) btn.classList.add('uil-heart');
      }

      // small visual nudge (optional)
      btn.style.transition = 'transform .12s ease';
      btn.style.transform = 'scale(1.15)';
      setTimeout(() => { btn.style.transform = ''; }, 200);
    });
  });

  // CART BUTTON HANDLER (works for .uil-shopping-cart and .uil-shopping-cart-alt)
  const cartButtons = document.querySelectorAll('.uil-shopping-cart, .uil-shopping-cart-alt');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      if (!card) return;

      const item = {
        id: card.dataset.id || `${card.dataset.brand}-${card.dataset.category}-${card.dataset.price}`,
        title: (card.querySelector('.title') && card.querySelector('.title').textContent) || 'Product',
        price: parseInt(card.dataset.price) || 0,
        image: (card.querySelector('.product-image') && card.querySelector('.product-image').style.backgroundImage) || '',
        brand: card.dataset.brand || '',
        category: card.dataset.category || '',
        qty: 1
      };

      // If item exists, increment qty
      const existing = cart.find(x => x.id === item.id);
      if (existing) existing.qty += 1;
      else cart.push(item);

      // persist cart
      localStorage.setItem('cart', JSON.stringify(cart));

      // quick UI feedback
      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 600);

      // update cart count badge if you have one
      const cartCountEl = document.getElementById('cartCount');
      if (cartCountEl) {
        const totalQty = cart.reduce((s, it) => s + (it.qty || 0), 0);
        cartCountEl.textContent = totalQty;
      }

      // debug
      // console.log('Cart now:', cart);
    });
  });

  // Optional: on load update any cartCount element
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    const totalQty = cart.reduce((s, it) => s + (it.qty || 0), 0);
    cartCountEl.textContent = totalQty;
  }
});






  // const helpBtn = document.getElementById("helpBtn");
  // const helpBtnMobile = document.getElementById("helpBtnMobile");
  // const popupModal = document.getElementById("popupModal");
  // const closeModal = document.getElementById("closeModal");

  // function openModal(event) {
  //   event.preventDefault();  // Prevent <a> from refreshing page
  //   popupModal.style.display = "flex";
  // }

  // helpBtn?.addEventListener("click", openModal);
  // helpBtnMobile?.addEventListener("click", openModal);

  // closeModal.addEventListener("click", () => {
  //   popupModal.style.display = "none";
  // });

  // window.addEventListener("click", (event) => {
  //   if (event.target === popupModal) {
  //     popupModal.style.display = "none";
  //   }
  // });


  const helpBtn = document.getElementById("helpBtn");
const helpBtnMobile = document.getElementById("helpBtnMobile");
const popupModal = document.getElementById("popupModal");
const closeModal = document.getElementById("closeModal");

function openModal(event) {
  event.preventDefault();
  popupModal.style.display = "flex";
}

helpBtn?.addEventListener("click", openModal);
helpBtnMobile?.addEventListener("click", openModal);

closeModal.addEventListener("click", () => {
  popupModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupModal) {
    popupModal.style.display = "none";
  }
});











const countdownDate = new Date("Nov 25, 2025 17:00:00").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in elements with corresponding IDs
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

            // If the countdown is finished
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown-timer").innerHTML = "EVENT IS LIVE!";
            }
        }, 1000);