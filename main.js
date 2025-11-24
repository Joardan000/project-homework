import {allData} from "./data.js";

let headerWrapper = document.getElementById("headerWrapper");
let heroSection = document.getElementById("heroSection");
let heroSearch = document.getElementById("heroSearch");
let topCourses = document.getElementById("topCourses");
let topTabs = document.getElementById("topTabs");
let topCourse = document.getElementById("topCourse");
let sectionPromo = document.getElementById("sectionPromo");
let trendingTitle = document.getElementById("trendingTitle");
let trendingFeatured = document.getElementById("trendingFeatured");
let trendingCards = document.getElementById("trendingCards");
let webinarTitle = document.getElementById("webinarTitle");
let upcomingCourses = document.getElementById("upcomingCourses");
let sectionCta = document.getElementById("sectionCta");

function courseCard(){
    allData.topCourses.forEach((item) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="max-w-[285px] w-full relative">
            <img class="absolute top-[131px] right-[12px]" src="${allData.icons.person}" alt="person-icon">
            <img class="absolute top-[8px] left-[10.5px]" src="${item.badge1}" alt="badge1-icon">
            <img class="absolute top-[8px] left-[66px]" src="${item.badge2}" alt="badge2-icon">
            <img class="mb-[4px]" src="${item.image}" alt="card-image">
            <p class="mb-[4px] font-[700] text-[16px] leading-[21px]">${item.title}</p>
            <div class="mb-[4px] flex gap-[4px] items-center">
                <img src="${allData.icons.person}" alt="person-icon">
                <p class="text-[14px] leading-[18px] text-[#3DCBB1]">${item.instructor}</p>
            </div> 
            <div class="mb-[4px] flex items-center gap-[3px]">
                <div class="flex items-center gap-[2px]">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.halfStar}" alt="half-star-icon">
                </div>
                <p class="text-[14px] leading-[18px] text-[#1B1B1B99]">${item.reviews}</p>
            </div>
            <div class="flex items-center gap-[4px]">
                <p class="font-[700] text-[20px] leading-[26px] text-[#1B1B1BE5]">${item.price}</p>
                <p class="text-[16px] leading-[24px] line-through text-[#1B1B1B99]">${item.oldPrice}</p>
            </div>
        </div> 
        `
        topCourse.appendChild(div)
    })
}

function renderTrending(){
    allData.trending.courses.forEach((card) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="max-w-[285px] w-full relative">
            <img class="absolute top-[131px] right-[12px]" src="${allData.icons.person}" alt="person-icon">
            <img class="absolute top-[8px] left-[10.5px]" src="${card.badge1}" alt="badge1-icon">
            <img class="absolute top-[8px] left-[66px]" src="${card.badge2}" alt="badge2-icon">
            <img class="mb-[4px]" src="${card.image}" alt="card-image">
            <p class="mb-[4px] font-[700] text-[16px] leading-[21px]">${card.title}</p>
            <div class="mb-[4px] flex gap-[4px] items-center">
                <img src="${allData.icons.person}" alt="person-icon">
                <p class="text-[14px] leading-[18px] text-[#3DCBB1]">${card.instructor}</p>
            </div> 
            <p class="text-[12px] leading-[18px] text-[#1B1B1BE5] max-w-[275px] w-full mb-[4px]">${card.description}</p>
            <div class="mb-[4px] flex items-center gap-[3px]">
                <div class="flex items-center gap-[2px]">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.star}" alt="star-icon">
                    <img src="${allData.icons.halfStar}" alt="half-star-icon">
                </div>
                <p class="text-[14px] leading-[18px] text-[#1B1B1B99]">${card.reviews}</p>
            </div>
            <div class="flex items-center gap-[4px]">
                <p class="font-[700] text-[20px] leading-[26px] text-[#1B1B1BE5]">${card.price}</p>
                <p class="text-[16px] leading-[24px] line-through text-[#1B1B1B99]">${card.oldPrice}</p>
            </div>
        </div> 
        `
        trendingCards.appendChild(div)
    })
}

function renderUpcoming(){
    allData.webinar.courses.forEach((course) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="max-w-[285px] w-full relative">
            <img class="absolute top-[131px] right-[12px]" src="${allData.icons.person}" alt="person-icon">
            <img class="absolute top-[8px] left-[10.5px]" src="${course.badge1}" alt="badge1-icon">
            <img class="absolute top-[8px] left-[66px]" src="${course.badge2}" alt="badge2-icon">
            <img class="mb-[4px]" src="${course.image}" alt="card-image">
            <p class="mb-[4px] font-[700] text-[16px] leading-[21px]">${course.title}</p>
            <div class="mb-[4px] flex gap-[4px] items-center">
                <img src="${allData.icons.person}" alt="person-icon">
                <p class="text-[14px] leading-[18px] text-[#3DCBB1]">${course.instructor}</p>
            </div> 
            <p class="text-[12px] leading-[18px] text-[#1B1B1BE5] max-w-[275px] w-full mb-[4px]">${course.description}</p>
            <div class="flex items-center gap-[4px]">
                <p class="font-[700] text-[20px] leading-[26px] text-[#1B1B1BE5]">${course.price}</p>
                <p class="text-[16px] leading-[24px] line-through text-[#1B1B1B99]">${course.oldPrice}</p>
            </div>
        </div> 
        `
        upcomingCourses.appendChild(div)
    })
}

function render() {
    headerWrapper.innerHTML = `
    <div class="flex items-center gap-[8px]">
        <img src="${allData.icons.logo}" alt="logo-icon">
        <p class="font-[800] text-[17.79px] leading-[23.34px]">${allData.headers.logoText}</p>
    </div>
    <div class="flex items-center max-w-[400px] w-full justify-between bg-[#F9F9F9E5] rounded-[3px] px-3 py-2 gap-1">
        <input type="text" class="bg-inherit outline-none border-none text-base leading-[21px] text-[rgba(27, 27, 27, 0.6)] max-w-full" placeholder="${allData.headers.input}">
        <img src="${allData.icons.search}" alt="search-icon">
    </div>
    <div class="h-[32px] flex gap-[19.5px] items-center">
        <div class="flex gap-[17.5px] items-center">
            <img src="${allData.icons.shopping}" alt="shopping-icon">
            <button class="py-[8px] px-[12px] border rounded-[12px] border-black"><p class="font-[700] text-[12px] leading-[16px]">${allData.headers.login}</p></button>
        </div>
        <button class="h-[32px] bg-[#3DCBB1] py-[8px] px-[12px] rounded-[12px] flex gap-[8px]">
            <img src="${allData.icons.signUp}" alt="sign-up-icon">
            <p class="text-white font-[700] text-[12px] leading-[16px]">${allData.headers.signUp}</p>
        </button>
    </div>
    `;
    heroSection.innerHTML = `
    <div>
        <p class="font-[700] text-[48px] leading-[62px] text-white text-center pt-[206px] mb-[16px]">${allData.hero.title}</p>
        <p class="text-[24px] text-[#F9F9F9E5] text-center pb-[280px] leading-[36px]">${allData.hero.subtitle}</p>
    </div>
    `
    heroSearch.innerHTML = `
    <div class="w-full px-[32px] pt-[32px] pb-[40px] rounded-[23px] bg-white shadow-xl shadow-gray-300/20  mt-[-90px]">
        <p class="font-[700] text-[20px] leading-[30px] mb-[18px]">${allData.search.mainLabel}</p>
        <form class="flex justify-center gap-[24px] items-center flex-wrap">
            <input class="max-w-[389px] outline-none border-none px-[16px] py-[13px] w-full rounded-[3px] bg-[#F9F9F9E5] text-[16px] leading-[24px] text-[#1B1B1B99]" type="text" placeholder="${allData.search.inputs.search}">
            <input class="max-w-[248px] outline-none border-none px-[16px] py-[13px] w-full rounded-[3px] bg-[#F9F9F9E5] text-[16px] leading-[24px] text-[#1B1B1B99]" type="text" placeholder="${allData.search.inputs.categories}">
            <input class="max-w-[248px] outline-none border-none px-[16px] py-[13px] w-full rounded-[3px] bg-[#F9F9F9E5] text-[16px] leading-[24px] text-[#1B1B1B99]" type="text" placeholder="${allData.search.inputs.topic}">
            <button class="max-w-[179px] w-full py-[12px] font-[700] text-[20px] leading-[26px] text-center text-white bg-[#3DCBB1] rounded-[18px]" type="submit">${allData.search.buttonText}</button>
        </form>
    </div>
    `
    topCourses.innerHTML = `
    <p class="font-[700] text-[24px] leading-[31px] mb-[16px] text-center">${allData.browse.title}</p>   
    `
    allData.browse.tabs.forEach((item) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="group relative text-[16px] leading-[24px] hover:cursor-pointer">
            <p>${item}</p>
            <div class="rounded-[12px] absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#3DCBB1] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
        </div>
        `;
        topTabs.appendChild(div)
    })
    courseCard()
    sectionPromo.innerHTML = `
    <img class="absolute bottom-0 right-0 z-1" src="${allData.icons.flowers}" alt="flower-img">
    <div class="z-50">
        <p class="font-[700] text-[32px] leading-[42px] text-white mb-2">${allData.promo.title}</p>
        <p class="max-w-[830px] w-full text-[24px] leading-[36px] text-[#FFFFFF99] mb-6">${allData.promo.description}</p>
        <button class="border-none outline-none py-[10px] max-w-[109px] w-full rounded-[3px] bg-[#3DCBB1] text-white">${allData.promo.buttonText}</button>
    </div>
    `
    trendingTitle.innerHTML = `
    <p class="text-[24px] leading-[31px] text-center font-[700]">${allData.trending.title}</p>
    `
    trendingFeatured.innerHTML = `
    <div class="relative">
        <img src="${allData.trending.featured.image}" alt="featured-image">
        <div class="rounded-[36px] absolute inset-0 bg-gradient-to-b from-[#C93B3B00] to-[#000000E0]"></div>
        <div class="absolute bottom-0 left-0 right-0 pb-8 z-10">
            <div class="max-w-[551px] justify-center px-[10px] w-full mx-auto">
                <p class="mb-2 text-[20px] leading-[30px] text-[#F9F9F9E5]">${allData.trending.featured.instructor}</p>
                <p class="max-w-[531px] w-full font-[700] text-[32px] leading-[42px] text-white">${allData.trending.featured.title}</p>
            </div>
        </div>
    </div>
    `
    renderTrending()
    webinarTitle.innerHTML = `
    <p class="font-[700] text-[24px] leading-[31px] text-center">${allData.webinar.title}</p>
    `
    renderUpcoming()
    sectionCta.innerHTML = `
    <p class="font-[700] text-[20px] leading-[26px] mb-[24px]">${allData.cta.text}</p>
    <button class="outline-none max-w-[124px] w-full py-[10px] border text-center rounded-[14px] text-[#1B1B1B99] font-[700] text-[16px] leading-[21px] border-[#1B1B1B99]">${allData.cta.buttonText}</button>
    `
}
render()