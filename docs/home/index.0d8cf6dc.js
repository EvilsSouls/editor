const e=localStorage.user?JSON.parse(localStorage.user):void 0;function t(){var e=document.createElement("div");if(!sessionStorage.user){var t=document.createElement("p");t.innerText="On diamondfire, type /join 44357.\n        Go to slot 9 and click it, find My DFOnline code and click it.\n        In chat it should give you a link. Open it and copy the given code.\n        Come back here and paste it in. You should be logged in.",e.appendChild(t);var n=document.createElement("input");n.type="text",n.placeholder="Code",n.id="codeslot",n.onkeyup=e=>{"Enter"==e.key&&document.getElementById("login").click()},e.appendChild(n);var o=document.createElement("button");o.innerText="Login",o.id="login",o.onclick=()=>login(document.getElementById("codeslot").value),e.appendChild(o),menu("Login",e)}}window.onload=()=>{var n=document.getElementById("user");e?(n.innerHTML=e.name,n.onclick=()=>{var t=document.createElement("div"),n=document.createElement("button");n.innerText="Relog",n.onclick=()=>login(e.auth),t.appendChild(n);var o=document.createElement("button");o.innerText="Logout",o.onclick=()=>{delete localStorage.user,location.reload()},t.appendChild(o),menu(e.name,t)}):n.onclick=t},codeutilities.onmessage=e=>{var t=JSON.parse(e.data);if("template"===t.type){var n=document.getElementById("importfield");try{n.value=JSON.parse(t.received).code}catch{!function(){var e=document.createElement("div"),t=document.createElement("p");t.innerText="If you have your code template data, just paste it in. Press the import button, and start editing.",e.appendChild(t);var n=document.createElement("div"),o=document.createElement("input");o.type="text",o.placeholder="Template Data",o.onkeyup=()=>{document.getElementById("activateimport").click()},o.id="importfield",n.appendChild(o);var i=document.createElement("button");if(i.innerText="Go!",i.style.marginLeft="5px",i.id="activateimport",i.onclick=()=>{sessionStorage.import=document.getElementById("importfield").value,location.href="/edit/"},n.appendChild(i),e.appendChild(n),cuopen){var a=document.createElement("p");a.innerText="Or, because you have codeutilities you can go into minecraft, hold your template and type /sendtemplate!",e.appendChild(a)}menu("Import",e)}(),n.value=JSON.parse(t.received).code}}};
//# sourceMappingURL=index.0d8cf6dc.js.map