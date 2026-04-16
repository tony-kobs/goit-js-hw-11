import{S as n}from"./assets/vendor-CgTBfC_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),a=images.map(({preview:l,original:t,description:o})=>`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${l}"
      alt="${o}"
    />
  </a>
</li>
`).join("");c.insertAdjacentHTML("beforeend",a);new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
