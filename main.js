import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <header class="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
    <main>
      <section id="hero" class="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate developer creating amazing web experiences</p>
      </section>
      
      <section id="about" class="about">
        <h2>About Me</h2>
        <p>I'm a web developer with expertise in modern technologies and a passion for creating user-friendly applications.</p>
      </section>
      
      <section id="projects" class="projects">
        <h2>My Projects</h2>
        <div class="project-grid">
          <div class="project-card">
            <h3>Project 1</h3>
            <p>Description of your first project</p>
          </div>
          <div class="project-card">
            <h3>Project 2</h3>
            <p>Description of your second project</p>
          </div>
          <div class="project-card">
            <h3>Project 3</h3>
            <p>Description of your third project</p>
          </div>
        </div>
      </section>
      
      <section id="contact" class="contact">
        <h2>Contact Me</h2>
        <p>Get in touch: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </section>
    </main>
    
    <footer class="footer">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
`