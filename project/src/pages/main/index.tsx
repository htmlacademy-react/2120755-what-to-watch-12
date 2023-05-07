function Main(): JSX.Element {
  return (

      <body>
        <section class="film-card">
          <div class="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 class="visually-hidden">WTW</h1>

          <header class="page-header film-card__head">
            <div class="logo">
              <a class="logo__link">
                <span class="logo__letter logo__letter--1">W</span>
                <span class="logo__letter logo__letter--2">T</span>
                <span class="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul class="user-block">
              <li class="user-block__item">
                <div class="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li class="user-block__item">
                <a class="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div class="film-card__wrap">
            <div class="film-card__info">
              <div class="film-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div class="film-card__desc">
                <h2 class="film-card__title">The Grand Budapest Hotel</h2>
                <p class="film-card__meta">
                  <span class="film-card__genre">Drama</span>
                  <span class="film-card__year">2014</span>
                </p>

                <div class="film-card__buttons">
                 <button class="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlink:href="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button class="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlink:href="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span class="film-card__count">9</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="page-content">
          <section class="catalog">
            <h2 class="catalog__title visually-hidden">Catalog</h2>

            <ul class="catalog__genres-list">
              <li class="catalog__genres-item catalog__genres-item--active">
                <a href="#" class="catalog__genres-link">All genres</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Comedies</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Crime</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Documentary</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Dramas</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Horror</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Kids & Family</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Romance</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Sci-Fi</a>
              </li>
              <li class="catalog__genres-item">
                <a href="#" class="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <div class="catalog__films-list">
              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Macbeth</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Aviator</a>
                </h3>
              </article>


              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">We need to talk about Kevin</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">What We Do in the Shadows</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/revenant.jpg" alt="Revenant" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Revenant</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Johnny English</a>
                </h3>
              </article>


              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Shutter Island</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/pulp-fiction.jpg" alt="Pulp Fiction" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Pulp Fiction</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">No Country for Old Men</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/snatch.jpg" alt="Snatch" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Snatch</a>
                </h3>
              </article>


              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" width="280" height="175" />

                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Moonrise Kingdom</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Seven Years in Tibet</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Midnight Special</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">War of the Worlds</a>
                </h3>
              </article>


              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Dardjeeling Limited</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/orlando.jpg" alt="Orlando" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Orlando</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/mindhunter.jpg" alt="Mindhunter" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Mindhunter</a>
                </h3>
              </article>

              <article class="small-film-card catalog__films-card">
                <div class="small-film-card__image">
                  <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
                </div>
                <h3 class="small-film-card__title">
                  <a class="small-film-card__link" href="film-page.html">Midnight Special</a>
                </h3>
              </article>
            </div>

            <div class="catalog__more">
              <button class="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <footer class="page-footer">
            <div class="logo">
              <a class="logo__link logo__link--light">
                <span class="logo__letter logo__letter--1">W</span>
                <span class="logo__letter logo__letter--2">T</span>
                <span class="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div class="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>

  )
}

export default Main
