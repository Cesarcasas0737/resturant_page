(()=>{"use strict";const t=function(t){const e=document.createElement("p");return e.textContent=t,e},e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="media/images/korean_bbq.png",n.alt="korean_bbq",e.appendChild(t("All-You-Can-Eat Korean BBQ!")),e.appendChild(t("Established and made with passion since 2005")),e.appendChild(n),e.appendChild(t("Order pickup today through our website,you'll get all the neccessities to a meal just like you would at the resturant")),e}())};function n(){const n=document.createElement("header");n.classList.add("header");const c=document.createElement("h1");return c.classList.add("restaurant-name"),c.textContent="Mogbang",n.appendChild(c),n.appendChild(function(){const n=document.createElement("nav"),c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(c),e())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(d),loadMenu())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("contact"),e.appendChild(t("✆1(800)123-4567")),e.appendChild(t("🍽 1768 E Hastings St,Vancouver,Los Angeles, USA")),e}())}())})),n.appendChild(c),n.appendChild(d),n.appendChild(o),n}()),n}function a(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(n()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");return t.classList.add("footer"),t}()),a(document.querySelector(".button-nav")),e()}()})();