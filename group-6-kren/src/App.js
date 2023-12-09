import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div>

  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="single-post.html">Artikel</a></li>
          <li class="dropdown"><a href="category.html"><span>Navigasi</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="search-result.html">Search Result</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="location.html">Lokasi</a></li>
          <li><a href="about.html">Tentang Kami</a></li>
          <li><a href="#" class="btn-report">Laporkan Sampah</a></li>
        </ul>
      </nav>

    </div>

  </header>

  <main id="main">

    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <div className="swiper sliderFeaturedPosts">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="single-post.html" className="img-bg d-flex align-items-end" style="background-image: url('assets/img/post-slide-1.jpg');">
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="single-post.html" className="img-bg d-flex align-items-end" style="background-image: url('assets/img/post-slide-2.jpg');">
                    <div className="img-bg-inner">
                      <h2>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="single-post.html" className="img-bg d-flex align-items-end" style="background-image: url('assets/img/post-slide-3.jpg');">
                    <div className="img-bg-inner">
                      <h2>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="single-post.html" className="img-bg d-flex align-items-end" style="background-image: url('assets/img/post-slide-4.jpg');">
                    <div className="img-bg-inner">
                      <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="custom-swiper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="post-entry-1 lg">
              <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid"/></a>
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
              <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos</p>

              <div className="d-flex align-items-center author">
                <div className="photo"><img src="assets/img/person-1.jpg" alt="" className="img-fluid"/></div>
                <div className="name">
                  <h3 className="m-0 p-0">Cameron Williamson</h3>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">Let’s Get Back to Work, New York</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Food</span> <span className="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                  <h2><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Design</span> <span className="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                  <h2><a href="single-post.html">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                </div>
              </div>
              <div className="col-lg-4 border-start custom-border">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-3.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">6 Easy Steps To Create Your Own Cute Merch For Instagram</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-6.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Tech</span> <span className="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                  <h2><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-8.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Travel</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                </div>
              </div>

              <div className="col-lg-4">

                <div className="trending">
                  <h3>Trending</h3>
                  <ul className="trending-post">
                    <li>
                      <a href="single-post.html">
                        <span className="number">1</span>
                        <h3>The Best Homemade Masks for Face (keep the Pimples Away)</h3>
                        <span className="author">Jane Cooper</span>
                      </a>
                    </li>
                    <li>
                      <a href="single-post.html">
                        <span className="number">2</span>
                        <h3>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h3>
                        <span className="author">Wade Warren</span>
                      </a>
                    </li>
                    <li>
                      <a href="single-post.html">
                        <span className="number">3</span>
                        <h3>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h3>
                        <span className="author">Esther Howard</span>
                      </a>
                    </li>
                    <li>
                      <a href="single-post.html">
                        <span className="number">4</span>
                        <h3>9 Half-up/half-down Hairstyles for Long and Medium Hair</h3>
                        <span className="author">Cameron Williamson</span>
                      </a>
                    </li>
                    <li>
                      <a href="single-post.html">
                        <span className="number">5</span>
                        <h3>Life Insurance And Pregnancy: A Working Mom’s Guide</h3>
                        <span className="author">Jenny Wilson</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="category-section">
      <div className="container" data-aos="fade-up">

        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Culture</h2>
          <div><a href="category.html" className="more">See All Culture</a></div>
        </div>

        <div className="row">
          <div className="col-md-9">

            <div className="d-lg-flex post-entry-2">
              <a href="single-post.html" className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
                <img src="assets/img/post-landscape-6.jpg" alt="" className="img-fluid"/>
              </a>
              <div>
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h3><a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                <div className="d-flex align-items-center author">
                  <div className="photo"><img src="assets/img/person-2.jpg" alt="" className="img-fluid"/></div>
                  <div className="name">
                    <h3 className="m-0 p-0">Wade Warren</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="post-entry-1 border-bottom">
                  <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                  <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>

                <div className="post-entry-1">
                  <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                  <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="category-section">
      <div className="container" data-aos="fade-up">

        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Business</h2>
          <div><a href="category.html" className="more">See All Business</a></div>
        </div>

        <div className="row">
          <div className="col-md-9 order-md-2">

            <div className="d-lg-flex post-entry-2">
              <a href="single-post.html" className="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                <img src="assets/img/post-landscape-3.jpg" alt="" className="img-fluid"/>
              </a>
              <div>
                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h3><a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                <div className="d-flex align-items-center author">
                  <div className="photo"><img src="assets/img/person-4.jpg" alt="" className="img-fluid"/></div>
                  <div className="name">
                    <h3 className="m-0 p-0">Wade Warren</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="post-entry-1 border-bottom">
                  <a href="single-post.html"><img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                  <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>

                <div className="post-entry-1">
                  <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-7.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                  <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="category-section">
      <div className="container" data-aos="fade-up">

        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Lifestyle</h2>
          <div><a href="category.html" className="more">See All Lifestyle</a></div>
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <div className="post-entry-1 lg">
              <a href="single-post.html"><img src="assets/img/post-landscape-8.jpg" alt="" className="img-fluid"/></a>
              <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
              <p className="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos</p>

              <div className="d-flex align-items-center author">
                <div className="photo"><img src="assets/img/person-7.jpg" alt="" className="img-fluid"/></div>
                <div className="name">
                  <h3 className="m-0 p-0">Esther Howard</h3>
                </div>
              </div>
            </div>

            <div className="post-entry-1 border-bottom">
              <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div className="post-entry-1">
              <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 className="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span className="author mb-3 d-block">Jenny Wilson</span>
            </div>

          </div>

          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-6.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">Let’s Get Back to Work, New York</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                  <h2><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-4.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                  <h2><a href="single-post.html">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                </div>
              </div>
              <div className="col-lg-4 border-start custom-border">
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-3.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">6 Easy Steps To Create Your Own Cute Merch For Instagram</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                  <h2><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                </div>
                <div className="post-entry-1">
                  <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid"/></a>
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                </div>
              </div>
              <div className="col-lg-4">

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div className="post-entry-1 border-bottom">
                  <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 className="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  <footer id="footer" class="footer">

<div class="footer-content">
  <div class="container">

    <div class="row g-5">
      <div class="col-lg-4">
        <h3 class="footer-heading">Lapor Group 6</h3>
        <p>Sistem Manajemen Sampah Berbasis Web</p>
        <p><a href="about.html" class="footer-link-more">Learn More</a></p>
      </div>

      <div class="col-6 col-lg-2">
        <h3 class="footer-heading">Navigation</h3>
        <ul class="footer-links list-unstyled">
          <li><a href="Home.html"><i class="bi bi-chevron-right"></i>Home</a></li>
          <li><a href="Artikel.html"><i class="bi bi-chevron-right"></i>Artikel</a></li>
          <li><a href="Navigasi.html"><i class="bi bi-chevron-right"></i>Navigasi</a></li>
          <li><a href="about.html"><i class="bi bi-chevron-right"></i>Tentang Kami</a></li>
          <li><a href="Lapor.html"><i class="bi bi-chevron-right"></i>Laporkan Sampah</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="footer-legal">
  <div class="container">

    <div class="row justify-content-between">
      <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
        <div class="copyright">
          © Copyright <strong><span>Group 6</span></strong>. Sistem Manajemen Sampah Berbasis Website
        </div>
      </div>
    </div>

  </div>
</div>

</footer>

  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


</div>
  );
}

export default App;
