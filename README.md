# PrimeFit Couture – Fashion House Website

PrimeFit Couture is an 7-page fashion brand website built by Team MAN-CSC M25 G15 as part of
our Web Development coursework at Miva University.

##  Website Features
- 7 complete pages (Home, About, Gallery, Collections, Contact, Profile, Events)
- Board of Trustees section with group members
- External CSS for all styling
- Marquee running across all pages
- Product showcase for Men, Women, and Kids
- Upcoming Events page
- JavaScript features including navbar toggle, dynamic gallery, and DOM-based interactions
- Fully responsive design
- Hosted on GitHub Pages

## Board of Trustees / Team Members

| Field | Details |
|-------|---------|
| **Name** | Elizabeth Okokon |
| **ID** | 301758466 |
| **Matric Number** | 2024/C/DSC/0516 |
| **Email** | elizabeth.okokon@miva.edu.ng |

## Team Members

| S/N | Name | Email | Matric Number | ID | Department | 
|-----|------|--------|----------------|------|------------|
| **1** | Muhammed Abubakar-Sadiq | muhammed.abubakar-sadiq@miva.edu.ng | 2024/C/DSC/0557 | 301783062 | Data Science |
| **2** | Jones Boluwatife Olamide | jones.boluwatife@miva.edu.ng | 2024/C/DSC/0588 | 301792237 | Data Science |
| **3** | Ariyo Modupeoluwa Rejoice | modupeoluwa.ariyo@miva.edu.ng | 2024/C/DSC/0591 | 301786700 | Data Science |
| **4** | Ayomide Adams | ayomide.adams@miva.edu.ng | 2024/C/CYB/0994 | 301769130 | Cyber Security |
| **5** | Kelvin Akula | kelvin.akula@miva.edu.ng | 2024/C/SENG/0877 | 301781354 | Software Engineering |
| **6** | Glory Michael | glory.michael@miva.edu.ng | 2024/C/CSC/0854 | 301785102 | Computer Science |
| **7** | Aliegbere Kelechi Emmanuel | kelechi.emmanuel@miva.edu.ng | 2024/C/CYB/0452 | 30172178 | Cybersecurity |
| **8** | Chiedozie Onyekwelu Nicodemus | chiedozie.onyekwelu@miva.edu.ng | 2024/C/CSC/0457 | 301757427 | Computer Science |
| **9** | Nnamani Emmanuel Chinagorum | nnamani.emmanuel@miva.edu.ng | 2024/C/SENG/0716 | 301765249 | Software Engineering |
| **10** | Elizabeth Okokon | elizabeth.okokon@miva.edu.ng | 2024/C/DSC/05161 | 301758466 | Data Science |
| **11** |Ameen Olojede | ameen.olojede@miva.edu.ng | 2024/C/DSC/0584 | 301789459 | Data Science |
| **12** | Samuel Bulus | samuel.bulus@miva.edu.ng | 2024/C/CSC/0814 | 301759799 | Computer Science |



- Samuel Bulus – Gallery Page
- Kingsley Chinedu Ikeli – Contact Page



## Languages Used
- HTML5
- CSS3 (External Stylesheets)
- JavaScript 
- Icons: Unicons


## PrimeFit Homepage HTML Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrimeFit</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="css/index.css">
    <script type="module" src="https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js"></script>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/line.css" />
</head>

<body>

    <header class="header">
        <div class="header-left-top">
            <div class="logo-home">
                <div class="home">
                    <a href="index.html" aria-label="PrimeFit home"> <img src="image/background_removal.png" alt="PrimeFit logo" /></a>
                </div>

                <div class="logo">
                    <p>PrimeFit</p>
                </div>
            </div>

            <nav class="desktop-nav">
                <div class="header-right-top">
                    <a href="about.html">About</a>
                    <a href="gallery.html"><i class="uil uil-image-v"></i></a>
                    <a href="contact.html"><i class="uil uil-phone"></i></a>
                    <a href="collections.html"><i class="uil uil-shopping-bag"></i></a>
                    <a href="events.html"><i class="uil uil-schedule"></i></a>
                    <a href="profile.html"><i class="uil uil-user-circle"></i></a>
                </div>
            </nav>

            <div class="hamburger" id="hamburger" role="button" tabindex="0" aria-controls="mobileNav" aria-expanded="false">
                <i class="uil uil-bars"></i>
            </div>
        </div>

        <div class="mobile-nav" id="mobileNav">
            <a href="about.html">About </a>
            <a href="gethelp.html"><i class="uil uil-question-circle"></i> FAQ</a>
            <a href="contact.html"><i class="uil uil-phone"></i> Contact</a>
            <a href="collections.html"><i class="uil uil-shopping-bag"></i> Cart</a>
            <a href="events.html"><i class="uil uil-schedule"></i> Events</a>
            <a href="profile.html"><i class="uil uil-user-circle"></i> Account</a>
        </div>
    </header>

    <section class="hero-section">
        <div class="hero-left">
            <h1>Your Style Journey<br>Begins Here</h1>
            <p>
                Discover fashion that celebrates confidence, elegance,
                and individuality. Experience pieces that elevate
                your lifestyle and empower your presence.
            </p>

            <div class="hero-buttons">
                <a href="collections.html" class="btn-dark">Shop Now</a>
                <a href="collections.html" class="explore-link">Explore Collection →</a>
            </div>
        </div>

        <div class="hero-right">
            <video class="hero-video" poster="images/hero-poster.jpg" autoplay loop muted playsinline aria-label="Promotional fashion video">
                <source src="Video/PrimeFit sale.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </section>

    <section class="features-section" id="features">

        <div class="feature-card">
            <div class="icon-box">
                <i class="uil uil-ruler-combined icon"></i> </div>
            <h3 class="card-heading">Authentic Craftsmanship</h3>
            <p class="card-description">Celebrating the beauty of skilled artisan work.</p>
        </div>

        <div class="feature-card">
            <div class="icon-box">
                <i class="uil uil-flower icon"></i> </div>
            <h3 class="card-heading">Sustainable Practices</h3>
            <p class="card-description">Advocating green living through eco-friendly methods.</p>
        </div>

        <div class="feature-card">
            <div class="icon-box">
                <i class="uil uil-lightbulb-alt icon"></i> </div>
            <h3 class="card-heading">Innovative Design</h3>
            <p class="card-description">Creating pieces that fuse style and functionality effortlessly.</p>
        </div>

        <a href="#" class="cta-card">
            <div class="cta-content">
                <i class="uil uil-arrow-up-right cta-icon" style="color: white; font-size: 2.5rem;"></i>
            </div>
        </a>

    </section>

    <div class="top-intro">
        <div class="marquee">
            <p>
                We offer the best collections • Affordable prices for everyone •
                Quality you can trust • Shop PrimeFit Collection today • New
                Arrivals Weekly • Premium Quality • Fast Delivery • Best Prices
                Guaranteed • Trusted by Many •
            </p>
        </div>
    </div>

    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-column sponsor">
                <h5>Our Sponsor</h5>
                <img src="image/miva logo.png" alt="Miva Open University Logo" class="miva-logo" />
                <p class="sponsor-text">
                    Proudly supported by <strong>Miva Open University</strong>.
                </p>
            </div>

            <div class="footer-brand footer-column">
                <h4>PrimeFit</h4>
                <p>
                    Fashion that celebrates confidence, elegance, and individuality
                    since 2020.
                </p>
                <div class="social-icons">
                    <a href="#"><i class="uil uil-facebook-f"></i></a>
                    <a href="#"><i class="uil uil-instagram-alt"></i></a>
                    <a href="#"><i class="uil uil-twitter"></i></a>
                </div>
            </div>

            <div class="footer-column">
                <h5>Support & Policy</h5>
                <ul>
                    <li><a href="#shipping">Shipping & Returns</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2025 PrimeFit. All rights reserved.
            <a href="#privacy">Privacy</a> | <a href="#terms">Terms</a>
        </div>
    </footer>

    <script src="JS/script.js"></script>
</body>

</html>


## 🔗 Live Website
Click below to view the website live:

## 📂 Project Files
- [index.html](index.html)
- [style.css](cssFile/index.css)
- [script.js](script/index.js)

- 
