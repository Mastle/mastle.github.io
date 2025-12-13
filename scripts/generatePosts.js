import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { marked } from "marked"

const markdownFilePath = join(process.cwd(), "data/sample-blog-post.md")
const outputFilePath = join(process.cwd(), "blog/sample-blog-post/index.html")

async function generatePost() {
  try {
    const data = await readFile(markdownFilePath, "utf-8")
    const htmlContent = marked.parse(data)

    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/x-icon"
      href="../../assets/icons/favicon.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../../styles/utilities.css" />
    <link rel="stylesheet" href="../../styles/main.css" />
    <link rel="stylesheet" href="../../styles/blog.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <script src="../../scripts/scriptMain.js" defer></script>
    <title>AT Productions</title>
  </head>
  <body>
    <div class="blog-wrapper">
      <div class="navbar">
        <div class="container flex container--visible">
          <a class="logo-and-name-link" href="./">
            <h1 class="logo-and-name">AT Productions</h1>
          </a>
          <nav class="responsive-menu-styles menu" id="menu">
            <ul>
              <li><a href="../../index.html">Home</a></li>
              <li><a href="../../projects.html">Projects</a></li>
              <li><a class="selected" href="../../blog.html">Blog</a></li>
              <li><a href="../../about.html">About</a></li>
              <li><a href="../../contact.html">Contact</a></li>
              <li>
                <a href="tel:+989352487000"
                  ><span class="phone-number">(+98)9352487000</span></a
                >
              </li>
            </ul>
          </nav>
          <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <article>
        <main class="container blog-post-container">
            ${htmlContent}
        </main>
      </article>
      <footer class="flex">
        <div class="container flex container--visible">
          <span>Ethical</span>
  <span>Efficient</span>
<span>Unmatched</span>
          <div class="footer-icons-container flex">
            <a
              href="https://bsky.app/profile/taqidev.bsky.social"
              target="_blank"
            >
              <img src="../../assets/icons/bluesky-footer-icon.svg" alt=""
            /></a>
            <a href="https://www.instagram.com/amirali_tsh/" target="_blank"
              ><img src="../../assets/icons/instagram-footer-icon.svg" alt=""
            /></a>
            <a href="https://github.com/Mastle" target="_blank">
              <img src="../../assets/icons/github-footer-icon.svg" alt=""
            /></a>
            <a
              href="https://www.linkedin.com/in/amirali-taqishah-27920a262/"
              target="_blank"
            >
              <img src="../../assets/icons/linkedin-footer-icon.svg" alt=""
            /></a>
          </div>
          <div class="name-logo flex">
            <span>AT Productions</span>
            <img
              class="footer-logo"
              src="../../assets/icons/Logo-2-footer.svg"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>


`
    await writeFile(outputFilePath, htmlTemplate)
    console.log("HTML file generated successfully:", outputFilePath)
  } catch (err) {
    console.error("Error:", err)
  }
}

generatePost()
