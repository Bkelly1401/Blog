class mmmnavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
    <div class="header__content">
      <a href="index.html" class="logo">
        <img src="images/logo3.svg" alt="Website logo." class="logo__img">
      </a>
      <nav class="nav">
         <ul class="nav__list">
           <li class="nav__item">
              <a href="mousepads.html" class="nav__link">Mousepads</a>
           </li>
           <li class="nav__item">
              <a href="mice.html" class="nav__link">Mice</a>
           </li>
           <li class="nav__item">
              <a href="keyboards.html" class="nav__link">Keyboards</a>
           </li>
            <li class="nav__item">
              <a href="headphones.html" class="nav__link">Headphones</a>
           </li>
           <li class="nav__item">
              <a href="about.html" class="nav__link">About</a>
           </li>
       </ul>
      </nav>
    </div>
  </header>
      `
    }
}
 class mmmfooter extends HTMLElement {
    connectedCallback() {
    this.innerHTML= `
<footer class="footer__container">
    <div class="footer__logo__slogan">
        <img src="images/aboutlogo4.svg" width="200"></img>
        <h3>MinMaxMagic is a one man blog dedicated to gaming peripherals. With data driven conclusions and enthusiast understanding we aim to give you the information you need to make a choice you won't regret.</h1>
    </div>
    <div class="footer__contact">
        <a href="https://x.com/MinMaxMagic" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg></a>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-reddit" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
        <path d="M12 8l1 -5l6 1" />
        <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <circle cx="9" cy="13" r=".5" fill="currentColor" />
        <circle cx="15" cy="13" r=".5" fill="currentColor" />
        <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
        </svg>
        <a href="https://www.tiktok.com/@minmaxmagic" target="_blank" rel="noopener noreferrer"><I>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
        </svg></a>
    </div>
</footer>`
    }
  }

customElements.define('mmm-navbar', mmmnavbar)
customElements.define('mmm-footer', mmmfooter)


