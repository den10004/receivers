/* empty css              */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();window.addEventListener("vite:preloadError",t=>{window.reload()});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(r){r.preventDefault();const o=document.querySelector(this.getAttribute("href"));if(!o)return;const i=o.offsetTop;window.scrollTo({top:i,behavior:"smooth"})})});const m=document.querySelectorAll(".cons-open"),f=document.querySelectorAll(".compilationOpenModal"),g=document.querySelector(".openChoiceModal"),y=document.querySelectorAll(".closeAllModal"),h=document.querySelectorAll(".popup"),S=document.querySelector(".popup-choice"),v=document.querySelector(".popup-consultation"),E=document.querySelector(".popup-compilation");document.body.addEventListener("keydown",function(t){t.key=="Escape"&&d()});function d(){h.forEach(t=>t.style.display="none"),document.body.style.overflow=""}function b(){console.log(),v.style.display="block"}function M(){S.style.display="block"}function L(t){E.style.display="block";const r=document.querySelector(".modal-title"),o=document.getElementById("titleHiddenConmpilation");console.log(o.value),o.value=t,r.textContent=`Отправьте заявку и получите подборку акустики для ${t}`}y.forEach(t=>t.addEventListener("click",function(r){d()}));m.forEach(t=>t.addEventListener("click",function(r){const o=r.target.parentNode.parentNode.previousElementSibling.innerHTML,i=document.getElementById("titleHiddenConsultation");i.value=o,b()}));f.forEach(t=>t.addEventListener("click",function(r){const o=r.target.dataset.title;L(o)}));g.addEventListener("click",M);document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("consultForm");c(t)});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("compilationForm");c(t)});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("choiceForm");c(t)});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("helpForm");c(t)});function c(t){t.addEventListener("submit",async function(r){r.preventDefault();try{const o=new FormData(t);let i={};o.forEach((n,s)=>i[s]=n),console.log(i),localStorage.setItem("name",i.name);const e=await fetch("sendforms.php",{method:"POST",body:o});if(!e.ok)throw new Error(`Network response was not ok: ${e.status}`);d(),window.location.href="/thanks.html"}catch(o){console.error("Произошла ошибка при отправке формы.",o),alert("Произошла ошибка при отправке формы.",o)}})}var B=new Swiper(".mySwiper",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper2",{spaceBetween:10,thumbs:{swiper:B},pagination:{el:".swiper-pagination"}});var P=new Swiper(".mySwiper3",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper4",{spaceBetween:10,thumbs:{swiper:P},pagination:{el:".swiper-pagination"}});var C=new Swiper(".mySwiper5",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper6",{spaceBetween:10,thumbs:{swiper:C},pagination:{el:".swiper-pagination"}});var O=new Swiper(".mySwiper7",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper8",{spaceBetween:10,thumbs:{swiper:O},pagination:{el:".swiper-pagination"}});var q=new Swiper(".mySwiper9",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper10",{spaceBetween:10,thumbs:{swiper:q},pagination:{el:".swiper-pagination"}});var _=new Swiper(".mySwiper11",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper12",{spaceBetween:10,thumbs:{swiper:_},pagination:{el:".swiper-pagination"}});var A=new Swiper(".mySwiper13",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper14",{spaceBetween:10,thumbs:{swiper:A},pagination:{el:".swiper-pagination"}});var D=new Swiper(".mySwiper15",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper16",{spaceBetween:10,thumbs:{swiper:D},pagination:{el:".swiper-pagination"}});var k=new Swiper(".mySwiper17",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});new Swiper(".mySwiper18",{spaceBetween:10,thumbs:{swiper:k},pagination:{el:".swiper-pagination"}});document.addEventListener("DOMContentLoaded",function(){let t=!0,r=function(e){let n=e.target,s=n.dataset.phoneClear,p="+7 (___) ___-__-__",l=0,u=p.replace(/\D/g,""),a=e.target.value.replace(/\D/g,"");if(s!=="false"&&e.type==="blur"&&a.length<p.match(/([\_\d])/g).length){e.target.value="";return}u.length>=a.length&&(a=u),e.target.value=p.replace(/./g,function(w){return/[_\d]/.test(w)&&l<a.length?a.charAt(l++):l>=a.length?"":w}),t&&l==2&&e.target.value=="+7 (8"&&(e.target.value="+7 (",t=!1)};const o=async function(e){e.preventDefault();let n=await navigator.clipboard.readText();if(n[0]=="8"){e.target.value="7"+n.substring(1);return}e.target.value=n};let i=document.querySelectorAll("input[type=tel]");for(let e of i){e.addEventListener("paste",o);for(let n of["input","blur","focus"])e.addEventListener(n,r)}});