export default function Home() {
  return (
    <div id="top">

      <div id="page" className="s-pagewrap">

        <header className="s-header">
          <div className="row s-header__inner">

            <div className="s-header__block">
              <div className="s-header__logo">
                <a className="logo" href="index.html">
                  <img src="images/logo.svg" alt="Homepage" />
                </a>
              </div>

              <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
            </div>

            <nav className="s-header__nav">
              <ul className="s-header__menu-links">
                <li className="current"><a className="smoothscroll" href="#intro">Intro</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#works">Works</a></li>
                <li><a className="smoothscroll" href="#footer">Contact</a></li>
              </ul>
            </nav>

          </div>
        </header>

        <section id="intro" className="s-intro target-section">

          <div className="row s-intro__content width-sixteen-col">
            <div className="column lg-12 s-intro__content-inner grid-block grid-16">

              <div className="s-intro__content-text">

                <div className="s-intro__content-pretitle text-pretitle">Hello</div>
                <h1 className="s-intro__content-title">
                  a product designer <br />
                  base in Somewhere.
                </h1>

                <div className="s-intro__content-btns">
                  <a className="smoothscroll btn" href="#about">More About Me</a>
                  <a className="smoothscroll btn btn--stroke" href="#footer">Get In Touch</a>
                </div>

              </div>

            </div>
          </div>

          <ul className="s-intro__social social-list">
            <li>
              <a href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path></svg>
                <span className="u-screen-reader-text">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                <span className="u-screen-reader-text">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"></path></svg>
                <span className="u-screen-reader-text">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"></path></svg>
                <span className="u-screen-reader-text">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"></path></svg>
                <span className="u-screen-reader-text">Pinterest</span>
              </a>
            </li>
          </ul>

          <div className="s-intro__content-media">
            <img src="images/intro-bg.jpg" srcSet="images/intro-bg.jpg 1x, images/intro-bg.jpg 2x" alt="" />
          </div>

          <div className="s-intro__btn-download">
            <a className="btn btn--stroke" href="#0">Get My CV</a>
          </div>

          <div className="s-intro__scroll-down">
            <a href="#about" className="smoothscroll">
              <div className="scroll-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
              </div>
              <span className="scroll-text u-screen-reader-text">Scroll Down</span>
            </a>
          </div>

        </section>
        <section id="about" className="s-about target-section">

          <div className="row s-about__content">
            <div className="column xl-12">

              <div className="section-header" data-num="01">
                <h2 className="text-display-title">About Me.</h2>
              </div>

              <p className="attention-getter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo id debitis cupiditate cumque, error quia! Debitis cupiditate ipsa nihil labore, earum atque dolor quos saepe vero inventore, odit nam deleniti accusantium omnis mollitia consequatur harum incidunt! Ex modi aut repudiandae doloremque commodi recusandae labore sit. Perspiciatis omnis dolor dolores fuga iusto, recusandae animi nisi consequuntur exercitationem id maxime earum pariatur voluptas! Porro non quos quae tempora fuga quis sequi minus sed sint debitis reiciendis, nostrum natus suscipit iusto odio.
              </p>

              <p className="attention-getter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim
              </p>

              <div className="grid-list-items s-about__blocks">

                <div className="grid-list-items__item s-about__block">
                  <h4 className="s-about__block-title">Experience</h4>
                  <ul className="s-about__list">
                    <li>
                      Spotify
                      <span>Product Designer</span>
                    </li>
                    <li>
                      Dropbox
                      <span>Interface Developer</span>
                    </li>
                    <li>
                      Google
                      <span>Lead UI Designer</span>
                    </li>
                    <li>
                      Figma
                      <span>UI Designer</span>
                    </li>
                    <li>
                      Microsoft
                      <span>UI Designer</span>
                    </li>
                  </ul>
                </div>

                <div className="grid-list-items__item s-about__block">
                  <h4 className="s-about__block-title">Awards</h4>

                  <ul className="s-about__list">
                    <li>
                      <a href="#0">
                        Site Of The Month
                        <span>Awwwards — 2023</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        Site Of The Day
                        <span>Awwwards — 2023</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        Agency of The Year
                        <span>Awwwards — 2022</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        FWA of The Month
                        <span>FWA — 2022</span>
                      </a>
                    </li><li>
                      <a href="#0">
                        Site Of The Month
                        <span>Awwwards — 2022</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="grid-list-items__item s-about__block">
                  <h4 className="s-about__block-title">Skills</h4>

                  <ul className="s-about__list">
                    <li>
                      Product Design
                    </li>
                    <li>
                      UI/UX Design
                    </li>
                    <li>
                      Prototyping
                    </li>
                    <li>
                      Frontend Development
                    </li>
                    <li>
                      Illustration
                    </li>
                    <li>
                      Visual Design
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </section>



        <section id="works" className="s-works target-section">

          <div className="row">
            <div className="column xl-12">
              <div className="section-header" data-num="02">
                <h2 className="text-display-title">Selected Works.</h2>
              </div>
            </div>
          </div>

          <div className="row folio-entries">

            <div className="column entry">
              <a href="images/folio/gallery/g-turban.jpg" className="entry__link glightbox" data-glightbox="title: White Knit Cap; description: .entry__desc-01">
                <div className="entry__thumb">
                  <img src="images/folio/white_turban.jpg" srcSet="images/folio/white_turban.jpg 1x, images/folio/white_turban@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">White Knit Cap</h4>
                  <div className="entry__cat">Frontend Design</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-01">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

            <div className="column entry">
              <a href="images/folio/gallery/g-woodcraft.jpg" className="entry__link glightbox" data-glightbox="title: WoodCraft; description: .entry__desc-02">
                <div className="entry__thumb">
                  <img src="images/folio/woodcraft.jpg" srcSet="images/folio/woodcraft.jpg 1x, images/folio/woodcraft@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">WoodCraft</h4>
                  <div className="entry__cat">Product Design</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-02">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

            <div className="column entry">
              <a href="images/folio/gallery/g-tulips.jpg" className="entry__link glightbox" data-glightbox="title: Caffeine & Tulips; description: .entry__desc-03">
                <div className="entry__thumb">
                  <img src="images/folio/caffeine_and_tulips.jpg" srcSet="images/folio/caffeine_and_tulips.jpg 1x, images/folio/caffeine_and_tulips@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">Caffeine & Tulips</h4>
                  <div className="entry__cat">Brand Identity</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-03">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

            <div className="column entry">
              <a href="images/folio/gallery/g-grayscale.jpg" className="entry__link glightbox" data-glightbox="title: Grayscale; description: .entry__desc-04">
                <div className="entry__thumb">
                  <img src="images/folio/grayscale.jpg" srcSet="images/folio/grayscale.jpg 1x, images/folio/grayscale@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">Grayscale</h4>
                  <div className="entry__cat">Product Design</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-04">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

            <div className="column entry">
              <a href="images/folio/gallery/g-lamp.jpg" className="entry__link glightbox" data-glightbox="title: The Lamp; description: .entry__desc-05">
                <div className="entry__thumb">
                  <img src="images/folio/lamp.jpg" srcSet="images/folio/lamp.jpg 1x, images/folio/lamp@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">The Lamp</h4>
                  <div className="entry__cat">Brand Identity</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-05">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

            <div className="column entry">
              <a href="images/folio/gallery/g-tropical.jpg" className="entry__link glightbox" data-glightbox="title: Tropical; description: .entry__desc-06">
                <div className="entry__thumb">
                  <img src="images/folio/tropical.jpg" srcSet="images/folio/tropical.jpg 1x, images/folio/tropical@2x.jpg 2x" alt="" />
                </div>
                <div className="entry__info">
                  <h4 className="entry__title">Tropical</h4>
                  <div className="entry__cat">Frontend Design</div>
                </div>
              </a>

              <div className="glightbox-desc entry__desc-06">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore ipsum iste soluta fugiat, impedit illum ducimus
                  deleniti facilis ab, tempora non! Nisi, tempora provident.
                  <a href="https://www.behance.net/">Project Link</a>.
                </p>
              </div>
            </div>

          </div>


          <div className="row s-testimonials">
            <div className="column xl-12">

              <h3 className="s-testimonials__header">Hear it from My Happy Clients</h3>

              <div className="swiper-container s-testimonials__slider">

                <div className="swiper-wrapper">

                  <div className="s-testimonials__slide swiper-slide">
                    <div className="s-testimonials__author">
                      <img src="images/avatars/user-02.jpg" alt="Author image" className="s-testimonials__avatar" />
                      <cite className="s-testimonials__cite">
                        <strong>John Rockefeller</strong>
                        <span>Standard Oil Co.</span>
                      </cite>
                    </div>
                    <p>
                      Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                      Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.
                      Laudantium quia consequatur molestias.
                    </p>
                  </div>

                  <div className="s-testimonials__slide swiper-slide">
                    <div className="s-testimonials__author">
                      <img src="images/avatars/user-03.jpg" alt="Author image" className="s-testimonials__avatar" />
                      <cite className="s-testimonials__cite">
                        <strong>Andrew Carnegie</strong>
                        <span>Carnegie Steel Co.</span>
                      </cite>
                    </div>
                    <p>
                      Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                      Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                      Quasi voluptas eius distinctio. Atque eos maxime.
                    </p>
                  </div>

                  <div className="s-testimonials__slide swiper-slide">
                    <div className="s-testimonials__author">
                      <img src="images/avatars/user-01.jpg" alt="Author image" className="s-testimonials__avatar" />
                      <cite className="s-testimonials__cite">
                        <strong>John Morgan</strong>
                        <span>JP Morgan & Co.</span>
                      </cite>
                    </div>
                    <p>
                      Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                      Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                      Voluptatem dignissimos ut.
                    </p>
                  </div>

                  <div className="s-testimonials__slide swiper-slide">
                    <div className="s-testimonials__author">
                      <img src="images/avatars/user-06.jpg" alt="Author image" className="s-testimonials__avatar" />
                      <cite className="s-testimonials__cite">
                        <strong>Henry Ford</strong>
                        <span>Ford Motor Co.</span>
                      </cite>
                    </div>
                    <p>
                      Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis
                      quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit.
                      Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                    </p>
                  </div>

                </div>

                <div className="swiper-pagination"></div>

              </div>

            </div>
          </div>

        </section>
        <section id="numbers" className="s-numbers">

          <div className="row counter-items">

            <div className="column counter-items__item">
              <div className="num">
                80
                <span>+</span>
              </div>
              <h5>Happy Customers</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel harum magni quae voluptate error quo repellendus inventore
                laborum ex veniam.
              </p>
            </div>

            <div className="column counter-items__item">
              <div className="num">
                120
                <span>+</span>
              </div>
              <h5>Projects Completed</h5>
              <p>
                Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue.
                Fusce vel dui. In ac felis
                quis tortor malesuada pretium
              </p>
            </div>

            <div className="column counter-items__item">
              <div className="num">
                23k
                <span>+</span>
              </div>
              <h5>Lines of Code</h5>
              <p>
                Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                Nisi eaque consequatur. Voluptatem dignissimos ut ducimus
              </p>
            </div>

            <div className="column counter-items__item">
              <div className="num">
                85
                <span>+</span>
              </div>
              <h5>Positive Feedback</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum magni quae voluptate error
                quo repellendus inventore laborum ex veniam.
              </p>
            </div>
          </div>

        </section>

        <footer id="footer" className="s-footer target-section">

          <div className="row">
            <div className="column lg-12">
              <div className="section-header light-on-dark" data-num="03">
                <h2 className="text-display-title">Get In Touch.</h2>
              </div>
            </div>
          </div>

          <div className="row s-footer__content">

            <div className="column xl-6 md-12 s-footer__block s-footer__about">
              <p className="attention-getter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum quasi facere libero,
                fugiat laboriosam possimus amet consectetur adipisicing elit reprehenderit eveniet tempore quisquam ipsa id esse. Facere ratione dignissimos.
              </p>
            </div>

            <div className="column xl-6 md-12 s-footer__block s-footer__site-links">
              <div className="row">
                <div className="column xl-4 lg-5 md-6 tab-12">
                  <h5>Follow Me</h5>
                  <ul className="link-list">
                    <li><a href="#0">Facebook</a></li>
                    <li><a href="#0">Twitter</a></li>
                    <li><a href="#0">Instagram</a></li>
                    <li><a href="#0">Dribbble</a></li>
                    <li><a href="https://styleshout.com/go/hostinger/">Hostinger</a></li>
                  </ul>
                </div>
                <div className="column xl-6 md-6 tab-12">
                  <h5>Contact Me</h5>
                  <ul className="link-list">
                    <li><a href="mailto:#0">sayhello@hudson.com</a></li>
                    <li><a href="tel:+1975432345">+197 543 2345</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>


          <div className="row s-footer__buttons">

            <div className="column xl-6 tab-12">
              <a href="mailto:#0" className="btn btn--primary btn--large u-fullwidth">Message Me</a>
            </div>

            <div className="column xl-6 tab-12">
              <a href="#0" className="btn btn--stroke btn--large u-fullwidth">Get My CV</a>
            </div>

          </div>

          <div className="row s-footer__bottom">

            <div className="column xl-6 lg-12">
              <ul className="s-footer__social social-list">
                <li>
                  <a href="#0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path></svg>
                    <span className="u-screen-reader-text">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                    <span className="u-screen-reader-text">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"></path></svg>
                    <span className="u-screen-reader-text">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"></path></svg>
                    <span className="u-screen-reader-text">Dribbble</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="column xl-6 lg-12">
              <p className="ss-copyright">
                <span>© Copyright Hudson 2023</span>
                <span>Design by <a href="https://styleshout.com/">StyleShout</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a></span>
              </p>
            </div>

          </div>

          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>
            </a>
            <span>Back To Top</span>
          </div>

        </footer>

      </div>
    </div>
  )
}