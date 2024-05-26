const hamburgerIcon = document.querySelector("#hamburgerIcon");
const sideNavButton = document.querySelector("#sideNavButton");
const userProfileIcon = document.querySelector("#userProfileIcon");

[hamburgerIcon, sideNavButton].forEach((btn) =>
  btn.addEventListener("click", toggleSideNav)
);

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

let orderSummary = document.querySelector("#orderSummary");
let orderSummaryHeader = document.querySelector("#orderSummaryHeader");
let caretUpOrderSummary = document.querySelector("#caretUpOrderSummary");

orderSummaryHeader?.addEventListener("click", () => {
  orderSummary.classList.toggle("max-xl:top-[91dvh]");
  orderSummary.classList.toggle("max-xl:top-[45.50dvh]");
  caretUpOrderSummary.classList.toggle("rotate-180");
});
