![2025-02-21 23-51-54_1](https://github.com/user-attachments/assets/98b7e739-b3e4-4772-9f60-accabdc779d7)

## Introduction
The project is a portfolio website (PejperO) showcasing my skills, projects, and contact information.
The site is built using HTML, CSS, and JavaScript, utilizing the particles.js library for background animation — due to the requirement that the site must be static.
The project is responsive, adapts to system themes (dark/light), and includes features such as smooth scrolling, language switching, and a custom cursor.

## Project Structure
### Directory Tree

    /PejperO.github.io
    │── /assets                      # Static assets
    │   │── /icons                   # UI icons
    │   │   ├── icon-black.png
    │   │   ├── icon-white.png
    │   │   ├── icons-theme.js       # Icon change script
    │   │── /images                  # Images (flags, branding)
    │   │   ├── en.png
    │   │   ├── logo.png
    │   │   ├── pl.png      
    │   │── /projects                # Project images
    │   │   ├── project1.png
    │   │   ├── project2.png
    │   │   ├── project3.png
    │   │   ├── ...
    │── /scripts                     # JavaScript scripts
    │   ├── language_contact.js
    │   ├── language_index.js
    │   ├── language_work.js
    │   ├── particle.js
    │   ├── scroll.js
    │── /styles                      # Stylesheets
    │   ├── styles.css
    │── CNAME                        # File for GitHub Pages
    │── LICENSE                      # GNU (AGPL) License
    │── README.md                    # What you are reading now :)
    ├── contact.html
    │── index.html                   # Homepage
    ├── work.html


## Main Features
### 1. Particle Animation (particles.js)
 - The site background includes animated particles that react to mouse movement
 - Particle configuration is located in the `particle.js` file

### 2. Custom Cursor
 - The standard cursor is replaced with a white dot with a glow effect
 - The cursor follows mouse movements in real-time

### 3. Smooth Scrolling
 - Clicking on navigation links smoothly scrolls to the corresponding section
 - Functionality implemented in the `scroll.js` file.

### 4. Language Switching
 - The site supports two languages: English and Polish
 - The user can switch languages, and the selection is saved in localStorage
 - Language-switching scripts are located in `language_contact.js`, `language_index.js`, and `language_work.js`

### 5. Responsiveness & Theme Adaptation
 - The site adapts to the system theme (dark/light mode)
 - The site favicon changes based on the theme (`files icon-black.png` and `icon-white.png`).

## Key Files
### styles.css
 - Contains styles for the entire site, including:
   - Color scheme (dark theme with blue accents)
   - Animations (e.g., cursor, scrolling)
   - Section layout (e.g., navigation, "About Me" section, projects)

### index.html
 - The homepage with sections:
    - **About Me:** Information about the author, skills, education, and experience
    - **Portfolio:** Links to projects with descriptions and images
    - **Contact:** Links to GitHub, LinkedIn, Facebook, and email

### work.html
 - The portfolio page containing a list of projects, descriptions, and links to GitHub repositories

### contact.html
 - The contact page with information on how to reach me

## Code Examples

### 1. Particle Animation (particle.js)
```js
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1.3, direction: "none" }
  }
});
```
Particle animation configuration for the site background

### 2.  Language Switching (language_index.js)
```js
function updateLanguage() {
    if (lang === "pl") {
        document.documentElement.lang = "pl";
        document.getElementById("home").innerText = "Start";
        document.getElementById("about-link").innerText = "O mnie";
        // ... other translations
    } else {
        document.documentElement.lang = "en";
        document.getElementById("home").innerText = "Home";
        document.getElementById("about-link").innerText = "About Me";
        // ... other translations
    }
}
```
The `updateLanguage()` function changes the text on the site depending on the selected language

### 3. Custom Cursor (styles.css)
```css
.custom-cursor {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
```
Style for the custom cursor that replaces the default mouse pointer

### 4. Smooth Scrolling (scroll.js)
```js
    document.querySelectorAll('.scroll-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start'
          });
        }
      });
    });
```
This script handles smooth scrolling to a section when clicking a link with the `.scroll-link` class

## Feature Table

| Feature                  | Description                               | File/Technology             |
|--------------------------|-------------------------------------------|-----------------------------|
| Particle Animation       | Background with animated particles        | `particles.js`, `particle.js` |
| Custom Cursor            | White dot with a glow effect              | `styles.css`, `particle.js`   |
| Smooth Scrolling         | Smooth transitions to sections            | `scroll.js`                 |
| Language Switching       | Toggle between English and Polish         | `language_*.js`             |
| Responsiveness           | Adapts to different screen sizes          | `styles.css`                |
| Favicon                  | Page icon changes with the theme          | `icons-theme.js`            |

## Technologies
- **HTML**: Structure of the site
- **CSS**: Styling and responsiveness
- **JavaScript**: Interactivity and animations
- **Particles.js**: Background animation
- **Git**: Version control and deployment

## Future Plans
 - Improving responsiveness and cross-device compatibility
    - Adjusting the website’s appearance for different screen resolutions to ensure a consistent user experience across all devices
 - Optimization for mobile devices
    - Creating a version of the site specifically adapted for smartphones and tablets to enhance usability on smaller screens
 - Consolidation of language files
    - Merging language-related files to simplify translation management and improve performance
 - Optimization of graphics and text layout
    - Adjusting project images to match the amount of text, improving readability and the overall aesthetics of the portfolio section
 - Photo gallery
    - Adding a gallery feature to allow browsing projects in a slideshow format
 - Page transition animations
    - Introducing smooth animations between sections to improve navigation flow and user experience
 - Simplifying the "Code" section
    - Changing the background of the "Code" section to a solid color to enhance text readability and reduce distractions

## How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/PejperO/PejperO.github.io.git
   ```
3. Open the `index.html` file in your browser

## What I Learned
### Technologies and Skills
- **HTML/CSS**: Creating responsive and visually appealing websites
- **JavaScript**: Implementing interactive functionalities such as smooth scrolling and language switching
- **Particles.js**: Creating animated backgrounds
- **LocalStorage**: Saving user preferences
- **Git**: Version control and publishing on GitHub Pages
- **Responsywność**: Adapting the site to different devices and system themes

### Design i UX
 - **Niestandardowy kursor:** Enhancing user experience with unique interface elements
 - **Płynne przewijanie:** Improving navigation fluidity
 - **Motyw kolorystyczny:** Consistent color scheme and adaptation to user preferences (dark/light mode)

## License
This project is licensed under the GNU Affero General Public License (AGPL).
This means that it can be freely copied, modified, and distributed, provided that the source code of any modified versions is also made available under the same license.
The full license text can be found in the [LICENSE](LICENSE) file.
