# PrimeFit Couture – Fashion House Website

PrimeFit Couture is an 8-page fashion brand website built by Team MAN-CSC M25 G15 as part of
our Web Development coursework at Miva University.

## 🔥 Website Features
- 8 complete pages (Home, About, Gallery, Collections, Contact, Profile, Events, FAQs)
- Board of Trustees section with group members
- External CSS for all styling
- Marquee running across all pages
- Product showcase for Men, Women, and Kids
- Upcoming Events page
- JavaScript features including navbar toggle, dynamic gallery, and DOM-based interactions
- Fully responsive design
- Hosted on GitHub Pages

## Board of Trustees / Team Members

| S/N    | Name                          | Email                               | Matric Number    | ID        | Department           |
| ------ | ----------------------------- | ----------------------------------- | ---------------- | --------- | -------------------- |
| **1**  | Muhammed Abubakar-Sadiq       | muhammed.abubakar-sadiq@miva.edu.ng | 2024/C/DSC/0557  | 301783062 | Data Science         |
| **2**  | Jones Boluwatife Olamide      | jones.boluwatife@miva.edu.ng        | 2024/C/DSC/0588  | 301792237 | Data Science         |
| **3**  | Ariyo Modupeoluwa Rejoice     | modupeoluwa.ariyo@miva.edu.ng       | 2024/C/DSC/0591  | 301786700 | Data Science         |
| **4**  | Ayomide Adams                 | ayomide.adams@miva.edu.ng           | 2024/C/CYB/0994  | 301769130 | Cyber Security       |
| **5**  | Kelvin Akula                  | kelvin.akula@miva.edu.ng            | 2024/C/SENG/0877 | 301781354 | Software Engineering |
| **6**  | Glory Michael                 | glory.michael@miva.edu.ng           | 2024/C/CSC/0854  | 301785102 | Computer Science     |
| **7**  | Aliegbere Kelechi Emmanuel    | kelechi.emmanuel@miva.edu.ng        | 2024/C/CYB/0452  | 30172178  | Cybersecurity        |
| **8**  | Chiedozie Onyekwelu Nicodemus | chiedozie.onyekwelu@miva.edu.ng     | 2024/C/CSC/0457  | 301757427 | Computer Science     |
| **9**  | Nnamani Emmanuel Chinagorum   | nnamani.emmanuel@miva.edu.ng        | 2024/C/SENG/0716 | 301765249 | Software Engineering |
| **10** | Elizabeth Okokon              | elizabeth.okokon@miva.edu.ng        | 2024/C/DSC/05161 | 301758466 | Data Science         |
| **11** | Ameen Olojede                 | ameen.olojede@miva.edu.ng           | 2024/C/DSC/0584  | 301789459 | Data Science         |
| **12** | Samuel Bulus                  | samuel.bulus@miva.edu.ng            | 2024/C/CSC/0814  | 301759799 | Computer Science     |
| **13** | Kingsley Chinedu Ikeli        | kingsley.ikeli@miva.edu.ng          | 2024/C/CYB/1031  | 301786681 | Cybersecurity        |


## Languages Used
- HTML5
- CSS (External Stylesheets)
- JavaScript 
- Icons: Unicons


### 📂 DOM Folder Structure
```txt
PrimeFit/
├── index.html
├── about.html
├── contact.html
├── collection.html
├── gallery.html
├── events.html
├── profile.html
├── README.md
│
├── cssFile/
│   ├── index.css
│   ├── about.css
│   ├── contact.css
│   ├── collection.css
│   ├── gallery.css
│   ├── profile.css
│   └── event.css
│
├── script/
│   ├── index.js
│   ├── about.js
│   ├── contact.js
│   ├── collection.js
│   ├── gallery.js
│   ├── events.js
│   └── script.js
│
├── assets/
├── image/
│   ├── background_removal.png
│   ├── miva logo.png
│   └── other images...
│
├── aboutimages/
│   └── hero-poster.jpg
│
└── Video/
    └── PrimeFit sale.mp4
```
### 📂 Index DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta (charset, viewport)
 │    ├── title (PrimeFit)
 │    ├── favicon link
 │    ├── Google Fonts
 │    ├── Unicons CSS
 │    ├── index.css
 │    ├── Unicons script (module)
 │    └── custom script (Index.js)
 │
 └── body
      ├── header.header
      │    ├── .header-left-top
      │    │    ├── .logo-home
      │    │    │    ├── a (logo link)
      │    │    │    └── img (PrimeFit logo)
      │    │    ├── .logo
      │    │    │    └── p (PrimeFit text)
      │    │    ├── nav.desktop-nav
      │    │    │    └── .header-right-top
      │    │    │         ├── a (About)
      │    │    │         ├── a > i (Gallery icon)
      │    │    │         ├── a > i (Phone icon)
      │    │    │         ├── a > i (Cart icon)
      │    │    │         ├── a > i (Events icon)
      │    │    │         └── a > i (Profile icon)
      │    │    └── .hamburger
      │    │         └── i (menu icon)
      │    │
      │    └── nav.mobile-nav
      │         ├── a (About)
      │         ├── a > i (FAQ)
      │         ├── a > i (Contact)
      │         ├── a > i (Cart)
      │         ├── a > i (Events)
      │         └── a > i (Account)
      │
      ├── section.hero-section
      │    ├── .hero-left
      │    │    ├── h1
      │    │    ├── p
      │    │    └── .hero-buttons
      │    │         ├── a.btn-dark (Shop Now)
      │    │         └── a.explore-link
      │    │
      │    └── .hero-right
      │         └── video.hero-video
      │              └── source (mp4)
      │
      ├── section.features-section
      │    ├── .feature-card (x3)
      │    │    ├── .icon-box > i
      │    │    ├── h3.card-heading
      │    │    └── p.card-description
      │    └── a.cta-card
      │         └── .cta-content > i
      │
      ├── .top-intro
      │    └── .marquee > p
      │
      └── footer.main-footer
           ├── .footer-container
           │    ├── .footer-column.sponsor
           │    │    ├── h5
           │    │    ├── img (Miva logo)
           │    │    └── p.sponsor-text > strong
           │    │
           │    ├── .footer-brand.footer-column
           │    │    ├── h4 (PrimeFit)
           │    │    ├── p
           │    │    └── .social-icons
           │    │         ├── a > i (Facebook)
           │    │         ├── a > i (Instagram)
           │    │         └── a > i (Twitter)
           │    │
           │    └── .footer-column
           │         ├── h5
           │         └── ul
           │              ├── li > a (Shipping)
           │              ├── li > a (Privacy)
           │              └── li > a (Terms)
           │
           └── .footer-bottom
                ├── text (copyright)
                ├── a (Privacy)
                └── a (Terms)
```


## Short note on all the Tagnames used

You can view the project documentation here: [PrimeFit Project Doc](https://docs.google.com/document/d/1zF0Dmkh2pwl9FfJqoX0Ep3geKn0MF-im/edit?usp=sharing&ouid=104955476091114095419&rtpof=true&sd=true)
