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
### 📂 About DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta tags
 │    ├── title
 │    ├── favicon link
 │    ├── Google Fonts
 │    ├── Unicons CSS
 │    ├── stylesheet (about.css)
 │    └── scripts (Unicons)
 │
 └── body
      ├── header
      │    ├── logo-home
      │    │     ├── a (home link)
      │    │     └── img (logo)
      │    ├── desktop-nav
      │    │     └── a (nav links)
      │    ├── hamburger menu
      │    └── mobile-nav
      │          ├── a (About)
      │          ├── a (FAQ)
      │          ├── a (Contact)
      │          ├── a (Collections)
      │          ├── a (Events)
      │          └── a (Profile)
      │
      ├── main
      │    ├── section.intro
      │    │     ├── h1
      │    │     ├── p
      │    │     └── div.card-grid
      │    │            ├── img (men)
      │    │            ├── img (women)
      │    │            └── img (kids)
      │    │
      │    ├── section.brand-story
      │    │     ├── span (BRAND STORY)
      │    │     ├── h2
      │    │     ├── p (story text)
      │    │     ├── ul (what we do)
      │    │     │     └── li (list items)
      │    │     └── img (brand image)
      │    │
      │    └── section.trustees
      │          ├── span (BOARD OF TRUSTEES)
      │          ├── h2
      │          └── div.trustee-cards
      │                ├── div.trustee-card
      │                │     ├── img (trustee)
      │                │     ├── h3 (name)
      │                │     └── p (role)
      │                └── (repeat for each trustee)
      │
      ├── footer
      │    ├── footer-container
      │    │     ├── sponsor block
      │    │     │     ├── h5
      │    │     │     ├── img (miva logo)
      │    │     │     └── p
      │    │     ├── footer-brand
      │    │     │     ├── h4
      │    │     │     ├── p
      │    │     │     └── social-icons (a + i)
      │    │     └── support & policy
      │    │           ├── h5
      │    │           └── ul
      │    │                └── li > a
      │    │
      │    └── footer-bottom
      │          ├── text
      │          ├── a (privacy)
      │          └── a (terms)
      │
      └── script (about.js)
```
### 📂 Collection DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta tags
 │    ├── title
 │    ├── favicon
 │    ├── icons (IconScout CDN)
 │    └── stylesheet (collection.css)
 │
 └── body
      ├── header.header
      │    ├── div.header-left-top
      │    │    ├── div.logo-home
      │    │    │    ├── div.home
      │    │    │    │    └── a > img (logo link to index)
      │    │    │    └── div.logo > p ("Collection")
      │    │    ├── nav.desktop-nav
      │    │    │    └── div.header-right-top
      │    │    │         ├── a (About)
      │    │    │         ├── a > i (Gallery icon)
      │    │    │         ├── a > i (Contact icon)
      │    │    │         ├── a > i (Events icon)
      │    │    │         └── a > i (Profile icon)
      │    │    └── div.hamburger > i (hamburger icon)
      │    │
      │    ├── div.down-container
      │    │    ├── div.down-left
      │    │    │    ├── div.dropdown
      │    │    │    │    ├── button.dropbtn ("Categories")
      │    │    │    │    └── div.dropdown-content
      │    │    │    │         ├── a (Men)
      │    │    │    │         ├── a (Ladies)
      │    │    │    │         └── a (Kids)
      │    │    │    ├── button ("New Arrival")
      │    │    │    └── button ("Sale")
      │    │    └── div.down-right
      │    │         └── input#searchBar
      │    │
      │    └── div.mobile-nav#mobileNav
      │         ├── a (About)
      │         ├── a > i (Gallery)
      │         ├── a > i (Contact)
      │         ├── a#helpBtnMobile > i (Get Help)
      │         ├── a > i (Events)
      │         └── a > i (Account)
      │
      ├── main
      │    ├── section.hero-section
      │    │    ├── div#searchResults (Search Results)
      │    │    └── section.hero
      │    │         └── div.hero-text
      │    │              ├── h1 ("PrimeFit Couture")
      │    │              ├── p (intro text)
      │    │              └── p (sub-intro)
      │    │
      │    ├── div.top-intro
      │    │    └── div.marquee > p (scrolling banner)
      │    │
      │    └── div.collection-grid
      │         ├── div.filters
      │         │    ├── div.filter-group (Brand)
      │         │    │    ├── div.filter-header > h4
      │         │    │    └── div.filter-options#brandFilters
      │         │    │         ├── label.filter-option (Ankra)
      │         │         ...
      │         │    ├── div.filter-group (Category)
      │         │    │    ├── div.filter-header > h4
      │         │    │    └── div.filter-options#categoryFilters
      │         │         ...
      │         │    └── div.filter-group (Price)
      │         │         ├── div.filter-header > h4
      │         │         └── div.price-range
      │         │              ├── label
      │         │              ├── input[type=range]
      │         │              └── div.price-labels
      │         │
      │         └── div.product-collection#productGrid
      │              ├── div.product-card
      │              │    ├── div.product-image
      │              │    └── div.product-info
      │              │         ├── h3.title
      │              │         ├── p.description
      │              │         └── div.product-actions
      │              │              ├── p.price
      │              │              └── div.icons
      │              │                   ├── i.uil-heart
      │              │                   └── i.uil-shopping-cart
      │              └── (more product-card items...)
      │
      └── script tags (JavaScript functionality)
```
### 📂 Contact DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
├── head
│   ├── meta charset="UTF-8"
│   ├── meta viewport
│   ├── link favicon
│   ├── link Font Awesome
│   ├── link Unicons CSS
│   ├── link contact.css
│   ├── title PrimeFit
│   └── script Unicons JS
│
└── body
    ├── header.header
    │   ├── div.header-left-top
    │   │   ├── div.logo-home
    │   │   │   ├── div.home
    │   │   │   │   └── a (index.html)
    │   │   │   │       └── img logo
    │   │   │   └── div.logo
    │   │   │       └── p Contact
    │   │   ├── nav.desktop-nav
    │   │   │   └── div.header-right-top
    │   │   │       ├── a About
    │   │   │       ├── a Gallery <i>
    │   │   │       ├── a Collection <i>
    │   │   │       └── a Profile <i>
    │   │   └── div.hamburger#hamburger
    │   │       └── i menu icon
    │   └── div.mobile-nav#mobileNav
    │       ├── a About
    │       ├── a FAQ <i>
    │       ├── a Cart <i>
    │       └── a Account <i>
    │
    ├── main.home-container
    │   ├── div.arrow-container
    │   │   ├── h1 Contact
    │   │   └── p subtitle
    │   ├── video.bg-video
    │   │   └── source mp4
    │   └── div.drop-down-arrow
    │       └── a href="#main"
    │           ├── div.arrow
    │           └── div.arrow
    │
    ├── section.main-body#main
    │   ├── div.classic-description
    │   │   ├── h1 Get Started
    │   │   ├── p ready
    │   │   ├── h1 Keep in Touch
    │   │   └── p good
    │   └── form#myForm.form-container
    │       ├── div.specify x4 (Name, Email, Phone, Products)
    │       │   ├── input
    │       │   └── i icon
    │       ├── p error messages
    │       ├── div.specify2 (Message textarea)
    │       └── input.submit-btnnn
    │
    ├── div.line
    │
    ├── section.contact-info
    │   ├── div.contact-us x4
    │   │   ├── h4 (Title)
    │   │   └── p (Info)
    │
    ├── div.top-intro
    │   └── div.marquee
    │       └── p scrolling text
    │
    ├── iframe Google Maps
    │
    └── footer.main-footer
        ├── div.footer-container
        │   ├── div.footer-column.sponsor
        │   │   ├── h5 Our Sponsor
        │   │   ├── img logo
        │   │   └── p sponsor-text
        │   ├── div.footer-brand.footer-column
        │   │   ├── h4 PrimeFit
        │   │   ├── p description
        │   │   └── div.social-icons
        │   │       ├── a Facebook <i>
        │   │       ├── a Instagram <i>
        │   │       └── a Twitter <i>
        │   └── div.footer-column
        │       ├── h5 Support & Policy
        │       └── ul
        │           ├── li Shipping & Returns
        │           ├── li Privacy Policy
        │           └── li Terms of Service
        └── div.footer-bottom
            └── copyright & links
```
### 📂 Gallery DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta (charset, viewport)
 │    ├── title
 │    ├── link (favicon, Google Fonts, CSS, Icons)
 │    └── script (Unicons)
 │
 └── body
      ├── header.header
      │    ├── div.header-left-top
      │    │    ├── div.logo-home
      │    │    │    ├── div.home > a > img (logo)
      │    │    │    └── div.logo > p ("Gallery")
      │    │    ├── nav.desktop-nav
      │    │    │    └── div.header-right-top
      │    │    │         ├── a (About)
      │    │    │         ├── a > i (Contact)
      │    │    │         ├── a > i (Collection)
      │    │    │         ├── a.event > i (Event)
      │    │    │         └── a > i (Profile)
      │    │    └── div.hamburger > i
      │    └── div.mobile-nav#mobileNav
      │         ├── a (About)
      │         ├── button#helpBtn > i (Help)
      │         ├── a > i (Contact)
      │         ├── a > i (Cart)
      │         ├── a.event > i (Events)
      │         └── a > i (Account)
      │
      ├── div.container
      │    ├── div.title > text + button > a.btn
      │    └── section.gallery-row
      │         ├── div.card.slider[data-slides="3"]
      │         │    ├── div.nav.left
      │         │    ├── div.nav.right
      │         │    └── div.media-wrap > img.slide + div.dots > span.dot*
      │         ├── div.card.center.slider[data-slides="3"]
      │         │    ├── div.nav.left
      │         │    ├── div.nav.right
      │         │    └── div.media-wrap > img.slide* + div.dots > span.dot*
      │         └── div.card.slider[data-slides="3"]
      │              ├── div.nav.left
      │              ├── div.nav.right
      │              └── div.media-wrap > img.slide* + div.dots > span.dot*
      │
      ├── div.top-intro
      │    └── div.marquee > p
      │
      └── footer.main-footer
           ├── div.footer-container
           │    ├── div.footer-column.sponsor > h5 + img + p
           │    ├── div.footer-brand.footer-column > h4 + p + div.social-icons > a* > i*
           │    └── div.footer-column > h5 + ul > li* > a*
           └── div.footer-bottom > text + a* 

```
### 📂 Event DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta (charset, viewport)
 │    ├── title
 │    ├── link (favicon, Google Fonts, CSS, Icons)
 │    └── script (Unicons)
 │
 └── body
      ├── header.header
      │    ├── div.header-left-top
      │    │    ├── div.logo-home
      │    │    │    ├── div.home
      │    │    │    │    └── a > img (logo)
      │    │    │    └── div.logo > p ("Event")
      │    │    ├── nav.desktop-nav
      │    │    │    └── div.header-right-top
      │    │    │         ├── a (About)
      │    │    │         ├── a > i (Gallery)
      │    │    │         ├── a > i (Contact)
      │    │    │         ├── a > i (Collection)
      │    │    │         └── a > i (Profile)
      │    │    └── div.hamburger > i (menu icon)
      │    └── div.mobile-nav
      │         ├── a (About)
      │         ├── a > i (Gallery)
      │         ├── a > i (Contact)
      │         ├── a > i (Shop)
      │         └── a > i (Account)
      │
      ├── section.poster-banner.hero-section
      │    └── div.banner-content
      │         ├── p.tagline
      │         ├── h1
      │         ├── p.location-date > i + text
      │         └── a.cta-button
      │
      ├── section.countdown-section
      │    └── div.countdown-container
      │         ├── h2
      │         └── div#countdown-timer.timer
      │              ├── div.time-block (Days)
      │              ├── div.time-block (Hours)
      │              ├── div.time-block (Minutes)
      │              └── div.time-block (Seconds)
      │
      ├── main.events-page.full-width
      │    ├── h2.section-title
      │    ├── section.events-list-container
      │    │    └── div.events-list
      │    │         ├── div.event-item
      │    │         │    ├── div.event-date > span.date + span.day
      │    │         │    ├── div.event-details > h3, p, p, p
      │    │         │    └── div.event-image-wrapper > img
      │    │         └── ... (other event-items)
      │    └── section.schedule-section
      │         ├── h2.section-title
      │         └── table.schedule-table
      │              ├── thead > tr > th*
      │              └── tbody > tr* > td*
      │
      ├── div.marquee-container
      │    └── div.marquee-content > p
      │
      └── footer.main-footer
           ├── div.footer-container
           │    ├── div.footer-column.sponsor > h5 + img + p
           │    ├── div.footer-brand.footer-column > h4 + p + div.social-icons > a* > i*
           │    └── div.footer-column > h5 + ul > li* > a*
           └── div.footer-bottom > text + a* 
```
### 📂 Profile DOM Structure
```txt
<!DOCTYPE html>
<html lang="en">
 ├── head
 │    ├── meta (charset, viewport)
 │    ├── title
 │    ├── link (CSS: profile.css, Google Fonts, Unicons)
 │
 └── body
      ├── header.header
      │    ├── div.header-left-top
      │    │    ├── div.logo-home
      │    │    │    ├── div.home > a > img (logo)
      │    │    │    └── div.logo > p ("Profile")
      │    │    ├── nav.desktop-nav
      │    │    │    └── div.header-right-top
      │    │    │         ├── a (About)
      │    │    │         ├── a > i (Gallery)
      │    │    │         ├── a > i (Contact)
      │    │    │         ├── a > i (Collection)
      │    │    │         └── a > i (Event)
      │    │    └── div.hamburger > i
      │    └── div.mobile-nav#mobileNav
      │         ├── a (About)
      │         ├── a > i (Gallery)
      │         ├── a > i (Contact)
      │         ├── a > i (Shop)
      │         └── a > i (Events)
      │
      ├── main.app-container
      │    └── div#profile-card.profile-card
      │         ├── div.profile-header
      │         │    ├── img#profile-avatar.avatar
      │         │    └── div.user-info
      │         │         ├── div#display-section
      │         │         │    ├── h2#profile-name-display.profile-name
      │         │         │    ├── p#profile-bio-display.profile-bio
      │         │         │    ├── p > strong + span#profile-phone
      │         │         │    ├── p > strong + span#profile-email
      │         │         │    └── p > strong + span#profile-address
      │         │         ├── p#user-id-display.user-id
      │         │         ├── button#edit-profile-btn.btn.light-btn
      │         │         ├── button#sign-in-btn.btn.green-btn.hidden
      │         │         └── button#delete-details-btn.btn.red-btn.delete-btn
      │         │
      │         ├── form#profile-edit-form.edit-form.hidden
      │         │    ├── h3.section-title
      │         │    ├── label + input#edit-name
      │         │    ├── label + textarea#edit-bio
      │         │    ├── label + input#edit-phone
      │         │    ├── label + input#edit-email
      │         │    ├── label + input#edit-address
      │         │    ├── div.form-actions
      │         │    │    ├── button.btn.primary-btn (Save Changes)
      │         │    │    └── button#cancel-edit-btn.btn.red-btn (Cancel)
      │         │    └── p#save-message.success-msg.hidden
      │         │
      │         └── div#history-sections.history
      │              ├── div.card.activity-card (Account Activity)
      │              │    ├── h3 > i
      │              │    ├── p > strong + span#member-since-display
      │              │    └── p > strong + span#last-visited-display.green-text
      │              ├── div.card (Upcoming Events)
      │              │    ├── div.event.yellow > i + div > p + span
      │              │    ├── div.event.gray > i + div > p + span
      │              │    └── p#no-events.no-events.hidden
      │              └── div.card (Order History)
      │                   ├── div.order.delivered > div > p.order-title + span + span.status.green > i
      │                   └── div.order.shipped > div > p.order-title + span + span.status.blue > i
      │
      └── footer.main-footer
           ├── div.footer-container
           │    ├── div.footer-column.sponsor > h5 + img + p
           │    ├── div.footer-brand.footer-column > h4 + p + div.social-icons > a* > i*
           │    └── div.footer-column > h5 + ul > li* > a*
           └── div.footer-bottom > text + a* 
```

## Short note on all the Tagnames used

You can view the project documentation here: [PrimeFit Project Doc](https://docs.google.com/document/d/1zF0Dmkh2pwl9FfJqoX0Ep3geKn0MF-im/edit?usp=sharing&ouid=104955476091114095419&rtpof=true&sd=true)
