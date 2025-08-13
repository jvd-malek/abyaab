const hamMenu = document.querySelector('#ham-menu')
const hamMenu1 = document.querySelector('#ham-menu1')
const hamMenu2 = document.querySelector('#ham-menu2')
const hamMenu3 = document.querySelector('#ham-menu3')
const navMenu = document.querySelector('#nav-menu')
const homeLink = document.querySelector('#home-link')
const waterLink = document.querySelector('#water-link')
const sodaLink = document.querySelector('#soda-link')
const juiceLink = document.querySelector('#juice-link')
const waterContainer = document.querySelector('#water-container')
const sodaContainer = document.querySelector('#soda-container')
const juiceContainer = document.querySelector('#juice-container')
const commentContainer = document.querySelector('#comment-container')
const commentLink = document.querySelector('#comment-link')
const benefitLink = document.querySelector('#benefit-link')
const contactLink = document.querySelector('#contact-link')
const header = document.querySelector('#header')
const board = document.querySelector('#board')
const navBox = document.querySelector('#nav-box')
const arrowMenu = document.querySelector('#arrow-menu')
const arrowContainer = document.querySelector('#arrow-container')
const arrowNav = document.querySelector('#arrow-nav')

const waters = [
  { id: 1, img1: "dasani-logo.jpg", img2: "dasani.jpg", name: "دسانی" },
  { id: 2, img1: "aquafina-logo.jpg", img2: "aquafina.jpg", name: "آکوافینا" },
  { id: 3, img1: "nestle-logo.jpg", img2: "nestle.jpg", name: "نستله" },
  { id: 4, img1: "damavand-logo.jpg", img2: "damavand.jpg", name: "دماوند" },
  { id: 5, img1: "vata-logo.jpg", img2: "vata.jpg", name: "واتا" },
  { id: 6, img1: "miva-logo.jpeg", img2: "miva.jpg", name: "میوا" },
  { id: 7, img1: "o-logo.jpg", img2: "o.jpg", name: "اُ" },
  { id: 8, img1: "oxab-logo.png", img2: "oxab.jpg", name: "اکساب" },
  { id: 9, img1: "luxab-logo.jpeg", img2: "luxab.jpg", name: "لوکساب" },
  { id: 10, img1: "suprise-logo.webp", img2: "suprise.jpg", name: "سوپرایز", cover: true },
  { id: 11, img1: "aiwater-logo.jpg", img2: "aiwater.jpg", name: "ای وی واتر" },
  { id: 12, img1: "bolbol-logo.jpg", img2: "bolbol.webp", name: "بلبل چشمه", cover: true },
  { id: 13, img1: "oxina-logo.jpg", img2: "oxina.jpg", name: "اکسینا" },
  { id: 14, img1: "govara-logo.jpeg", img2: "govara.jpg", name: "گوارا", cover: true },
]

const sodas = [
  { id: 1, img1: "cocacola-logo.jpg", img2: "cocacola.jpg", name: "کوکاکولا" },
  { id: 2, img1: "pepsi-logo.jpg", img2: "pepsi.jpg", name: "پپسی" },
  { id: 3, img1: "sprite-logo.jpg", img2: "sprite.jpg", name: "اسپرایت" },
  { id: 4, img1: "7up-logo.jpg", img2: "7up.jpg", name: "سون آپ" },
  { id: 5, img1: "zamzam-logo.jpg", img2: "zamzam.jpg", name: "زمزم" },
  { id: 6, img1: "fanta-logo.png", img2: "fanta.jpg", name: "فانتا" },
  { id: 7, img1: "miranda-logo.webp", img2: "miranda.jpg", name: "میراندا" },
  { id: 8, img1: "delster-logo.jpg", img2: "delster.jpg", name: "دلستر" },
  { id: 9, img1: "jojo-logo.jpg", img2: "jojo.jpg", name: "جوجو" },
  { id: 10, img1: "behnoosh-logo.jpg", img2: "behnoosh.jpg", name: "بهنوش" },
  { id: 11, img1: "heyday-logo.png", img2: "heyday.jpg", name: "هی دی" },
  { id: 12, img1: "huffenberg-logo.jpg", img2: "huffenberg.png", name: "هوفنبرگ" },
]

const juices = [
  { id: 1, img1: "rani-logo.jpg", img2: "rani.jpg", name: "رانی" },
  { id: 2, img1: "sanich-logo.jpeg", img2: "sanich.jpg", name: "سن‌ایچ" , cover: true },
  { id: 3, img1: "sunnyness-logo.webp", img2: "sunnyness.webp", name: "سانی‌نس" , cover: true },
  { id: 4, img1: "sunstar-logo.jpeg", img2: "sunstar.jpg", name: "سان‌استار" , cover: true },
  { id: 5, img1: "popup-logo.webp", img2: "popup.jpg", name: "پاپ", cover: true  },
  { id: 6, img1: "icymonkey-logo.jpg", img2: "icymonkey.webp", name: "آیس مانکی", cover: true  },
  { id: 7, img1: "mogo-logo.jpg", img2: "mogo.jpg", name: "موگو" },
]

const comments = [
  { id: 1, txt: "نمونه یک سازمان وظیفه شناس هستید! هم سفارشم بی دغدغه ثبت شد هم راحت به دستم رسید.ممنونم", name: "ز.امیری" },
  { id: 2, txt: "از تیم مسئولیت پذیر و توانای شما تشکر میکنم.", name: "ا.نادری" },
  { id: 3, txt: "خرید از شما با قیمت های خوبتون و تنوع محصولات نوشیدنی خیلی کار مارو راحت کرده، مرسی از حرفه ای بودنتون.", name: "ن.غفرانی" },
  { id: 4, txt: "تنوع محصول به همراه قیمت های بی نظیر عواملی هستن که شمارو از بقیه متمایز میکنند، برای شما موفقیت آرزومندم.", name: "ج.ملکیان" },
]



document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navBox.classList.add("navBox")
    arrowContainer.classList.add("md:bottom-10")
    arrowMenu.classList.remove("hidden")
  } else {
    navBox.classList.remove("navBox")
    arrowContainer.classList.remove("md:bottom-10")
    arrowMenu.classList.add("hidden")
  }
})


const closeHam = () => {
  hamMenu1.classList.remove("open-1")
  hamMenu2.classList.remove("open-2")
  hamMenu3.classList.remove("open-3")
  hamMenu1.classList.add("close1")
  hamMenu2.classList.add("close2")
  hamMenu3.classList.add("close3")
  navMenu.classList.remove("navOpen")
  navMenu.classList.add("navClose")
}
const opneHam = () => {
  hamMenu1.classList.remove("close1")
  hamMenu2.classList.remove("close2")
  hamMenu3.classList.remove("close3")
  hamMenu1.classList.add("open-1")
  hamMenu2.classList.add("open-2")
  hamMenu3.classList.add("open-3")
  navMenu.classList.remove("navClose")
  navMenu.classList.add("navOpen")
}
const hamHandler = () => {
  if (hamMenu1.classList.contains("close1")) {
    opneHam()
  } else {
    closeHam()
  }
}

hamMenu.addEventListener("click", hamHandler)
homeLink.addEventListener("click", () => location.href = "#home-section")
waterLink.addEventListener("click", () => location.href = "#water-section")
sodaLink.addEventListener("click", () => location.href = "#soda-section")
juiceLink.addEventListener("click", () => location.href = "#juice-section")
benefitLink.addEventListener("click", () => location.href = "#benefit-section")
contactLink.addEventListener("click", () => location.href = "#contact-section")
commentLink.addEventListener("click", () => location.href = "#comment-section")
arrowMenu.addEventListener("click", () => location.href = "#")
arrowNav.addEventListener("click", () => location.href = "#")
navMenu.addEventListener("click", closeHam)

const waterElm = waters.map(w => (
  `<div
    id={${w.id + 10}}
    class="w-fit flex flex-col md:gap-0 gap-4 justify-center items-center mt-8 shadow-[0px_0px_20px_rgba(0,0,0,0.20)] rounded-lg p-1 hover:[&_.img-1]:opacity-0 hover:[&_.img-2]:opacity-100 active:[&_.img-1]:opacity-0 active:[&_.img-2]:opacity-100 overflow-hidden img-container">
    <div class="relative w-60 h-60 *:transition-all *:duration-500 rounded-lg overflow-hidden">
      <img src="./public/img/water/${w.img1}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 img-1" />
      <img src="./public/img/water/${w.img2}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 opacity-0 img-2 absolute top-0 left-0" />
    </div>
    <p class="text-sm text-blue-700 flex gap-2 justify-center items-center mt-3 p-1">
      برند: <span class="text-slate-700 text-base font-bold">${w.name}</span>
    </p>
  </div>`
))

const sodaElm = sodas.map(w => (
  `<div
    id={${w.id + 50}}
    class="w-fit flex flex-col md:gap-0 gap-4 justify-center items-center mt-8 shadow-[0px_0px_20px_rgba(0,0,0,0.20)] rounded-lg p-1 hover:[&_.img-1]:opacity-0 hover:[&_.img-2]:opacity-100 active:[&_.img-1]:opacity-0 active:[&_.img-2]:opacity-100 overflow-hidden img-container">
    <div class="relative w-60 h-60 *:transition-all *:duration-500 rounded-lg overflow-hidden">
      <img src="./public/img/soda/${w.img1}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 img-1" />
      <img src="./public/img/soda/${w.img2}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 opacity-0 img-2 absolute top-0 left-0" />
    </div>
    <p class="text-sm text-blue-700 flex gap-2 justify-center items-center mt-3 p-1">
      برند: <span class="text-slate-700 text-base font-bold">${w.name}</span>
    </p>
  </div>`
))

const juiceElm = juices.map(w => (
  `<div
    id={${w.id + 100}}
    class="w-fit flex flex-col md:gap-0 gap-4 justify-center items-center mt-8 shadow-[0px_0px_20px_rgba(0,0,0,0.20)] rounded-lg p-1 hover:[&_.img-1]:opacity-0 hover:[&_.img-2]:opacity-100 active:[&_.img-1]:opacity-0 active:[&_.img-2]:opacity-100 overflow-hidden img-container">
    <div class="relative w-60 h-60 *:transition-all *:duration-500 rounded-lg overflow-hidden">
      <img src="./public/img/juice/${w.img1}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 img-1" />
      <img src="./public/img/juice/${w.img2}" alt=""
        class="w-full h-full ${w.cover ? "object-cover" : "object-contain"} rounded-lg border-b border-slate-600 opacity-0 img-2 absolute top-0 left-0" />
    </div>
    <p class="text-sm text-blue-700 flex gap-2 justify-center items-center mt-3 p-1">
      برند: <span class="text-slate-700 text-base font-bold">${w.name}</span>
    </p>
  </div>`
))

const commentElm = comments.map(w => (
  `<div
  id={${w.id + 150}}
          class="w-60 h-52 flex flex-col md:gap-0 gap-4 justify-start items-center mt-8 shadow-[0px_0px_20px_rgba(0,0,0,0.20)] rounded-lg p-1 hover:[&_.img-1]:opacity-0 hover:[&_.img-2]:opacity-100 active:[&_.img-1]:opacity-0 active:[&_.img-2]:opacity-100 overflow-hidden img-container bg-white">
          <div class="flex justify-start items-center gap-2 border-b-2 border-r-2 border-blue-600 rounded-br-4xl rounded-tr-4xl text-blue-700 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
              <path fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-lg font-bold p-1">${w.name}
            </p>
          </div>
          <p class="text-slate-700 text-base p-1 mt-2 text-justify">${w.txt}
          </p>
        </div>`
))

waterContainer.innerHTML = `${waterElm.join("")}`
sodaContainer.innerHTML = `${sodaElm.join("")}`
juiceContainer.innerHTML = `${juiceElm.join("")}`
commentContainer.innerHTML = `${commentElm.join("")}`

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const response = await fetch('contact-form.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('ایمیل با موفقیت ارسال شد.');
    } else {
      alert('خطایی در ارسال ایمیل رخ داده است.');
    }
  } catch (error) {
    console.error('خطا در ارسال فرم:', error);
    alert('خطایی در ارسال فرم رخ داده است.');
  }
});