<!DOCTYPE html>
<html lang="ja">
<head>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <meta name=”viewport” content=”width=device-width,initial-scale=1″>
    <script src="https://kit.fontawesome.com/e0a6756a44.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>portfolio-top</title>
</head>
<body>
  <header>
      <div class="title-container">
          <div class="header-menu">
              <div class="header-left">
                  <h1>portfolio</h1>
              </div>
              <div class="header-right">
                  <a href="https://twitter.com/yoh1108"><i class="fab fa-twitter-square fa-2x"></i></a>
                  <a href="https://www.instagram.com/yoh1108.b/"><i class="fab fa-instagram-square fa-2x"></i></a>
              </div>
          </div>

          <div class="nav">
              <ul class="nav-list">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skill">Skill</a></li>
                  <li><a href="#works">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      <!--hamburgerメニューここから-->
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav class="globalMenuSp">
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Skill</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
      <!--hamburgerメニューここまで-->

  </header>

<!--slideshowここから-->
<div class="main-slideshow">
<div class="main">
    <div class="hero">
        <div class="text-wrapper">
            <span class="leters">Y&nbsp;</span>
            <span class="leters">O</span>
            <span class="leters">&nbsp;&nbsp;</span>
            <span class="leters">B&nbsp;</span>
            <span class="leters">A&nbsp;</span>
            <span class="leters">N&nbsp;</span>
            <span class="leters">Z&nbsp;</span>
            <span class="leters">A&nbsp;</span>
            <span class="leters">I</span>
        </div>
        <img src="images/main-image.png">
    </div>
</div>
<div class="overlay"></div>
<!--レスポンシブ対応用slideshow-->
<div class="main-r">
    <div class="hero-r">
        <div class="text-wrapper-r">
            <span class="leters">Y&nbsp;</span>
            <span class="leters">O</span>
            <span class="leters">&nbsp;&nbsp;</span>
            <span class="leters">B&nbsp;</span>
            <span class="leters">A&nbsp;</span>
            <span class="leters">N&nbsp;</span>
            <span class="leters">Z&nbsp;</span>
            <span class="leters">A&nbsp;</span>
            <span class="leters">I</span>
        </div>
        <img src="images/main-image-responsive.jpg">
    </div>
</div>
<div class="overlay-r"></div>
<p class="message">Thank you for visiting this site</p>
</div>

<!--slideshowここまで-->

    <div class="work-slider">
        <h1 class="main-logo fade-in fade-in-left" id="works">Works</h1>
        <p>過去に制作物したサイトや画像を紹介します。</p>
    <div class="work-slider-contents">
    <!--workのslideshowここから-->
        <div class="section">

            <div class="sliderArea">
              <div class="regular_3 slider">
                <div><img src="images/coding-sample1.png" alt="125naroom"></div>
                <div><img src="images/coding-sample6.png" alt="125naroom"></div>
                <div><img src="images/coding-sample3.png" alt="125naroom"></div>
                <div><img src="images/coding-sample4.png" alt="125naroom"></div>
                <div><img src="images/coding-sample5.png" alt="125naroom"></div>
              </div>
            </div>
      </div>  
    </div>
</div>   

      <p class="all-view fade-in fade-in-up"><a href="#">&#10070;&nbsp;all&nbsp;view&#46;&#46;&#46;</a></p>
    <!--workのslideshowここまで-->  
  <footer>
    <div class="nav">
        <ul class="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </footer>
  <script src="js/slideshow.js"></script>
</body>
</html>
