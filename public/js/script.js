//side-nav
const hamburgerIcon = document.querySelector("#hamburgerIcon");
const sideNavButton = document.querySelector("#sideNavButton");
const userProfileIcon = document.querySelector("#userProfileIcon");

[hamburgerIcon, sideNavButton].forEach((btn) =>
  btn.addEventListener("click", toggleSideNav)
);

//user-profile-dropdown
userProfileIcon.addEventListener("click", () =>
  document.querySelector("#profileDropdown").classList.toggle("hidden")
);

function toggleSideNav() {
  const sideNav = document.querySelector("#sideNav");
  const main = document.querySelector("main");
  const sideNavLogo = document.querySelector("#sideNavLogo");
  const headerLogo = document.querySelector("#headerLogo");

  ["max-sm:-left-full", "max-lg:-left-[18rem]", "lg:-left-[18rem]"].forEach(
    (cls) => sideNav.classList.toggle(cls)
  );
  main.classList.toggle("lg:ml-[18rem]");
  sideNavLogo.classList.toggle("max-lg:invisible");
  headerLogo.classList.toggle("lg:hidden");
}

// Close dropdowns and side-nav when clicked outside
window.addEventListener("click", (event) => {
  const profileDropdown = document.querySelector("#profileDropdown");
  if (
    !userProfileIcon.contains(event.target) &&
    !profileDropdown.contains(event.target)
  ) {
    profileDropdown.classList.add("hidden");
  }

  const sideNav = document.querySelector("#sideNav");
  if (
    ![hamburgerIcon, sideNavButton, sideNav].some((el) =>
      el.contains(event.target)
    ) &&
    window.innerWidth >= 640 &&
    window.innerWidth <= 1024 &&
    !sideNav.classList.contains("max-sm:-left-full")
  ) {
    toggleSideNav();
  }
});

// Function to get a Gen Z slang message according to the time
function getMessage() {
  const hour = new Date().getHours();

  if (hour < 6) return "Late night vibes!";
  if (hour < 12) return "Morning, Sunshine!";
  if (hour < 14) return "Afternoon, Homie!";
  if (hour < 17) return "Wassup?";
  if (hour < 20) return "Evening, Pal!";
  return "Night, Squad!";
}

let greetingMsg = document.querySelectorAll(".greeting-msg");

greetingMsg.forEach((msg) => {
  msg.textContent = getMessage();
});

//toggle order summary in mobile view
let orderSummary = document.querySelector("#orderSummary");
let orderSummaryHeader = document.querySelector("#orderSummaryHeader");
let caretUpOrderSummary = document.querySelector("#caretUpOrderSummary");

orderSummaryHeader?.addEventListener("click", () => {
  orderSummary.classList.toggle("max-xl:top-[91dvh]");
  orderSummary.classList.toggle("max-xl:top-[45.50dvh]");
  caretUpOrderSummary.classList.toggle("rotate-180");
});

//checkboxes in cart
let selectAllLabel = document.querySelector(
  "label[for='select-all-cart-items-checkbox'] span"
);
let selectAllCartItems = document.querySelector(
  "#select-all-cart-items-checkbox"
);
let cartItems = document.querySelectorAll(".cart-item-checkbox");
let checkedCartItems = document.querySelector("#checked-items-in-cart");

if (checkedCartItems) {
  checkedCartItems.textContent =
    Array.from(cartItems).filter((item) => item.checked).length + " items";
}

function handleCheckboxChange() {
  selectAllCartItems.checked = Array.from(cartItems).every(
    (item) => item.checked
  );
  selectAllLabel.textContent = selectAllCartItems.checked
    ? "Selected All"
    : "Select All";
  checkedCartItems.textContent =
    Array.from(cartItems).filter((item) => item.checked).length + " items";
}

cartItems?.forEach((item) =>
  item.addEventListener("change", handleCheckboxChange)
);

selectAllCartItems?.addEventListener("change", () => {
  cartItems?.forEach((item) => (item.checked = selectAllCartItems.checked));
  handleCheckboxChange();
});

//toggle left and right indicators in carousel accordingt to overflow
{
  /* <div class="relative">
              <div class="flex items-center gap-4 overflow-x-scroll snap-x *:snap-center">
                <!-- img-1  -->
                <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
                <!-- img-2  -->
                 <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
                <!-- img-1  -->
                 <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
                <!-- img-2  -->
                 <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
                <!-- img-1  -->
                 <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
                <!-- img-2  -->
                 <div class="size-20 flex-shrink-0 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img src="https://hexclad.com/cdn/shop/products/13D-12_HYBRIDWOKWITHLID_0248_2048x.jpg?v=1663679276"
                    alt="" class="h-full w-full object-cover object-center">
                </div>
              </div>
                <!-- left-image indecatior  -->
                <div class="absolute top-0 bottom-0 left-0 z-10 w-10 grid place-content-center bg-gradient-to-r from-white via-white/50 to-transparent">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 18l-6-6l6-6" />
                  </svg>
                </div>
                <!-- right-image indecatior  -->
                <div class="absolute top-0 bottom-0 right-0 z-10 w-10 grid place-content-center bg-gradient-to-l from-white via-white/50 to-transparent">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 18l6-6l-6-6" />
                  </svg>
              </div>
                     
            </div> */
}

const productViewCarousel = document.getElementById("product-view-carousel");
    const carouselImages = productViewCarousel.querySelector("#carousel-images");
    const leftIndicator = productViewCarousel.querySelector("#left-indicator");
    const rightIndicator = productViewCarousel.querySelector("#right-indicator");
    const imagePreviewer = document.getElementById("image-previewer");
    const previewImage = imagePreviewer.querySelector("img");

    function updateIndicators() {
      const scrollLeft = carouselImages.scrollLeft;
      const scrollWidth = carouselImages.scrollWidth;

      // both indicators are hidden by default
      // if there is overflow to the left, show left indicator
      if (scrollLeft > 0) {
        leftIndicator.classList.remove("hidden");
      } else {
        leftIndicator.classList.add("hidden");
      }

      // if there is overflow to the right, show right indicator
      if (scrollLeft + carouselImages.clientWidth < scrollWidth) {
        rightIndicator.classList.remove("hidden");
      } else {
        rightIndicator.classList.add("hidden");
      }
    }

    // Event listener for image click
    carouselImages.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        previewImage.src = event.target.src;
      }
    });

// Event listener for left indicator click
leftIndicator.addEventListener('click', function() {
  carouselImages.scrollBy({ left: -carouselImages.clientWidth, behavior: 'smooth' });
  const images = carouselImages.querySelectorAll('img');
  const currentImageIndex = Array.from(images).findIndex(img => img.src === previewImage.src);
  if (currentImageIndex > 0) {
    const nextImage = images[currentImageIndex - 1];
    previewImage.src = nextImage.src;
  }
});

// Event listener for right indicator click
rightIndicator.addEventListener('click', function() {
  carouselImages.scrollBy({ left: carouselImages.clientWidth, behavior: 'smooth' });
  const images = carouselImages.querySelectorAll('img');
  const currentImageIndex = Array.from(images).findIndex(img => img.src === previewImage.src);
  if (currentImageIndex < images.length - 1) {
    const nextImage = images[currentImageIndex + 1];
    previewImage.src = nextImage.src;
  }
});

    // Event listener for scroll
    carouselImages.addEventListener("scroll", updateIndicators);

    // Initial check
    updateIndicators();


