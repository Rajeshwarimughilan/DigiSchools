# DigiSchl Old Site Inventory (digischl.com)

Source audited: `https://digischl.com/` (crawl + page extraction)
Notes:
- Site behaves like an ecommerce/catalog platform with education content mixed in.
- Some pages are duplicated with alternate slugs/casing.
- Shared footer/menu blocks appear on almost every page.

## 1) Global/Shared Content Found Across Most Pages

- Brand blurb:
  - "DigiSchl is a fast-growing, technology-driven company revolutionizing the education system in India..."
- Main menu links:
  - Home, Wishlist, Contact Us, Blog, Privacy Policy, About Us, Achievements, R&D, Register
- Footer quick links:
  - Home, Blog, Shops, About Us (`/DELTA`), Help Center
- Footer information links:
  - Terms & Conditions, Privacy Policy, Refund Policy, Contact Us
- Social links:
  - Facebook, Instagram, WhatsApp, YouTube, RSS Feeds
- Ecommerce utilities:
  - Cart, Wishlist, login/register style actions

## 2) Primary Corporate/Informational Pages

### Home
- URL: `https://digischl.com/`
- Content observed:
  - "New Arrivals" section
  - Product listings (multiple Level-based products)
  - Main menu + footer link groups

### About Us
- URLs:
  - `https://digischl.com/About-Us/`
  - `https://digischl.com/DELTA/` (duplicate/about alias)
- Content blocks:
  - "About Us - Digischl"
  - Capability/service lists:
    - Industrial Automation
    - Home Automation
    - Embedded System
    - Drone Design
    - Agriculture Drone
    - Multi-function Drone
    - Robotics
    - AI & IoT
    - Machine Learning
    - ERP Software
    - Mobile Apps
    - Cloud Servers
  - Additional service groupings for Automation, Robotics, Drone, Software

### R&D
- URL: `https://digischl.com/rd/`
- Content blocks:
  - Profile: Dr. Sreejith Vignesh B P (qualification-heavy profile)
  - Profile: Dr. K. Pradeep Kumar
  - MoU sections:
    - MOU: 25+ Industrials
    - MOU: 30+ Colleges
    - MOU: 30+ Schools
  - "R&D DigiSchl" narrative + bullets:
    - Government project
    - R&D Project
    - Funding Research Project
    - Students Internship Project
    - Industrial Project work
  - Achievement mention: SCSTE best project award and funding mention (~90 lakhs)

### Achievements
- URL: `https://digischl.com/achievements/`
- Content observed:
  - Page heading present
  - Mostly shared global blocks in extraction; explicit achievement details are limited in extracted text

### Contact
- URLs:
  - `https://digischl.com/Contact-Us/`
  - `https://digischl.com/contact/` (redirect behavior seen)
  - `https://digischl.com/contact.html/`
- Content observed:
  - "Contact Us"
  - "LOCATION"
  - Embedded map behavior noted on `/contact/`

### Blog
- URLs:
  - `https://digischl.com/blog/`
  - `https://digischl.com/blog/marketing/`
- Content observed:
  - Blog index with category tabs: "All" and "Marketing"

### Help Center
- URLs:
  - `https://digischl.com/help-center/`
  - `https://digischl.com/help-center/submit-request/`
- Content observed:
  - "How can we help?"
  - "Need more help?" and support request CTA

## 3) Legal/Policy Pages

### Privacy Policy
- URL: `https://digischl.com/Privacy-Policy/`
- Major sections:
  - 1. Information We Collect
  - 2. How We Use Your Information
  - 3. How We Share Your Information
  - 4. Your Choices
  - 5. Data Security
  - 6. Children's Privacy
  - 7. Changes to This Privacy Policy
  - 8. Contact Us

### Terms & Conditions
- URL: `https://digischl.com/terms-conditions/`
- Major sections:
  - 1. Introduction
  - 2. Eligibility
  - 3. Account Registration
  - 4. Purchasing Ebooks
  - 5. License to Use Ebooks
  - 6. User Conduct
  - 7. Intellectual Property
  - 8. Privacy Policy
  - 9. Disclaimers
  - 10. Limitation of Liability
  - 11. Changes to Terms
  - 12. Governing Law
  - 13. Contact Us

### Refund Policy
- URL: `https://digischl.com/Refund-Policy/`
- Major sections:
  - Returns
  - Refunds
  - Shipping
  - Non-Returnable Items
  - Exchanges
  - Contact Us

## 4) Catalog/Programs Category Pages

### Products Index
- URL: `https://digischl.com/products/`
- Content observed:
  - Filters: Category + Price
  - Category links:
    - AI - Robotics
    - I Speak English
    - Course
    - ERP / APP
  - Product list includes multiple Level products and storybook titles

### AI - Robotics category
- URL: `https://digischl.com/robotics/`
- Content observed:
  - Grade/level links (L1 to L5)
  - Product list with level items and prices

### ERP / APP category
- URL: `https://digischl.com/ERP--APP/`
- Content observed:
  - Grade/level links (L1 to L5)
  - Product list with level items and prices

### I Speak English category
- URL: `https://digischl.com/I-Speak-English/`
- Content observed:
  - Grade/level links (L1 to L5)
  - Product list with level items and prices

### Course category
- URL: `https://digischl.com/course/`
- Content observed:
  - Subcategories: Hands on STEM, Robotics 1, Robotics 2, Robotics 4
  - "No products found" seen in extracted content

## 5) Product/Detail Pages Found (Individual Listings)

### Level/Grade product pages
- `https://digischl.com/level-1-172/`
- `https://digischl.com/level-1-173/`
- `https://digischl.com/level-1-174/`
- `https://digischl.com/level-1-182/`
- `https://digischl.com/level-2-176/`
- `https://digischl.com/level-2-183/`
- `https://digischl.com/level-3-175/`
- `https://digischl.com/level-3-177/`
- `https://digischl.com/level-3-184/`
- `https://digischl.com/level-4-178/`
- `https://digischl.com/level-4-179/`
- `https://digischl.com/level-4-185/`
- `https://digischl.com/level-5-180/`
- `https://digischl.com/level-5-181/`
- `https://digischl.com/level-5-186/`

Common content pattern on these pages:
- Title is mostly "Level X"
- Prices shown in listings include values around `₹350`, `₹450`, `₹2,800`, `₹3,000`, `₹3,500`
- Some pages reference "Digischl Curriculum Art & STEM Activity Books"

### Program-level pages under category paths
- Robotics program levels:
  - `https://digischl.com/robotics/level-1grade-1-3/`
  - `https://digischl.com/robotics/level-2grade-4-5/`
  - `https://digischl.com/robotics/level-3grade-6-7/`
  - `https://digischl.com/robotics/level-4grade-8-9/`
  - `https://digischl.com/robotics/level-5grade-10-12/`
- ERP/APP program levels:
  - `https://digischl.com/ERP--APP/level-1grade-1-3-37/`
  - `https://digischl.com/ERP--APP/level-2grade-4-5-38/`
  - `https://digischl.com/ERP--APP/level-3grade-6-7-39/`
  - `https://digischl.com/ERP--APP/level-4grade-8-9-40/`
  - `https://digischl.com/ERP--APP/level-5grade-10-12-41/`
- I Speak English program levels:
  - `https://digischl.com/I-Speak-English/level-1grade-1-3-42/`
  - `https://digischl.com/I-Speak-English/level-2grade-4-5-43/`
  - `https://digischl.com/I-Speak-English/level-3grade-6-7-44/`
  - `https://digischl.com/I-Speak-English/level-4grade-8-9-45/`
  - `https://digischl.com/I-Speak-English/level-5grade-10-12-46/`

### Storybook/other product pages
- `https://digischl.com/when-charley-met-emma-166/`
- `https://digischl.com/little-sunny-sunshine-167/`
- `https://digischl.com/chicka-chicka-1-2-3-168/`
- `https://digischl.com/the-curious-bees-169/`

### Course detail pages
- `https://digischl.com/course/hands-on-stem/`
- `https://digischl.com/course/robotics-1/`
- `https://digischl.com/course/robotics-2/`
- `https://digischl.com/course/robotics-4/`

## 6) Account, Commerce, and Community Utility Pages

- `https://digischl.com/cart/`
- `https://digischl.com/wishlist/`
- `https://digischl.com/wishlist/digischl/`
- `https://digischl.com/register/`
- `https://digischl.com/forgot-password/`
- `https://digischl.com/profile/digischl/`
- `https://digischl.com/followers/digischl/`
- `https://digischl.com/following/digischl/`
- `https://digischl.com/shops/`

## 7) Feed/Ancillary Pages

- `https://digischl.com/rss-feeds/`
- `https://digischl.com/rss/category/course/`
- `https://digischl.com/rss/category/ERP--APP/`
- `https://digischl.com/rss/category/I-Speak-English/`
- `https://digischl.com/rss/category/robotics/`
- `https://digischl.com/rss/featured-products/`
- `https://digischl.com/rss/latest-products/`
- `https://digischl.com/rss/seller/digischl/`

## 8) Suggested Consolidation for New Modern Site

To avoid losing information while removing clutter:
- Keep and modernize as content pages:
  - Home, About, R&D, Achievements, Programs, Products/Platforms, Contact
- Keep as legal pages:
  - Privacy Policy, Terms & Conditions, Refund Policy
- Convert catalog detail pages into structured program/product data sections:
  - Robotics levels, ERP/APP levels, I Speak English levels, Course modules
- Archive or de-emphasize ecommerce-only utilities unless needed:
  - Wishlist, cart, profile/followers/following, RSS feeds
