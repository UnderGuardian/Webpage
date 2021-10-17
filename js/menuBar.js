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
      </div>
      <div class="socialContainer">
        <div class="circle">
          <div id="facebookLogo"></div>
          <div id="facebookMiddle"></div>
        </div>
      </div>
      <div class="socialContainer">
        <!-- <div class="circle"></div> -->
      </div>
    </div>`;

document.body.insertBefore(menuBarDiv, document.body.firstChild);
