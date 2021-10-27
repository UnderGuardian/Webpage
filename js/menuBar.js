const menuBarDiv = document.createElement("div");
menuBarDiv.id = "MenuBar_menubar";

menuBarDiv.innerHTML = `
    <div id="MenuBar_flexcontainer">
        <a href="./index.html" id="MenuBar_frostboltLink">
          <img src="img/Frostbolt Imagotipo.png" alt="Company Logo" id="MenuBar_frostboltLogo">
        </a>
        <a href="./about.html">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Quiénes somos</span>
          </div>
        </a>
        <a href="./projects.html">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Proyectos</span>
          </div>
        </a>
        <a href="./blog.html">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Blog</span>
          </div>
        </a>
        <a href="./incomes.html">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Ingresos</span>
          </div>
        </a>
        <a href="https://forms.gle/kCDtHY3p8zLtVx7k8">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Evaluanos!</span>
          </div>
        </a>
        <a href="./founder.html">
          <div class="MenuBar_menuItem">
            <span class="hover hover-1">Fundador</span>
          </div>
        </a>
      </div>
      <div class="socialContainer">
        <div class="circle" onclick="swal('Email', 'contacto@frostbolt.com', 'info')">
          <div id="logoContainer">
            <svg id="emailLogo" viewBox="0 0 22 18">
              <g fill="none" fill-rule="evenodd" stroke="var(--primary-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)">
                <path d="M2 0h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"/>
                <path d="M20 2L10 9 0 2"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="socialContainer">
        <div class="circle" onclick="window.open('https://www.facebook.com/VideojuegosFrostBolt/');">
          <div id="logoContainer">
              <svg id="facebookLogo" viewBox="0 0 6084 11449">
                <path
                  d="M 5685,6390 6000,4334 H 4028 V 3000 c 0,-562 275,-1111 1159,-1111 h 897 V 139 C 6084,139 5270,0 4492,0 2868,0 1806,984 1806,2767 V 4334 H 0 v 2056 h 1806 v 4969 c 362,57 733,86 1111,86 378,0 749,-30 1111,-86 V 6390 Z"
                  style="fill: var(--primary-color)"/>
              </svg>
          </div>
        </div>
      </div>
      <div class="socialContainer" style="margin-right: 14px;">
        <div class="circle" onclick="window.open('https://www.instagram.com/frostbolt_/')">
          <div id="logoContainer">
              <div id="outerCage"></div>
              <div id="dot"></div>
              <div id="innerCircle"></div>
          </div>
        </div>
      </div>
    </div>`;

document.body.insertBefore(menuBarDiv, document.body.firstChild);
