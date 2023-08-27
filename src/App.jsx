

function App() {


  return (
    <>
      <header className="header">
          <img src='src/assets/images/logo.svg' alt="" className="logo" />
          <nav className="navbar">
              <ul className="">
                  <a href="" className="">About</a>
                  <a href="" className="">Services</a>
                  <a href="" className="">Projects</a>
                  <a href="" className="">CONTACT</a>
              </ul>
          </nav>    
    </header> 
    <main>
        <div className="container-titulo">
            <h1 className="text-titulo">WE ARE CREATIVES</h1>
            <img src='src\assets\images\icon-arrow-down.svg' alt="" className="img-titulo" />
        </div>



        <section className="section1">
        <div className="text-bloque">
            <h4 className="text-section1-title">Transform your brand</h4>
            <span className="text-section1-description">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</span>
            <a href="" className="a-ref-section1">LEARN MORE</a>
          </div>
          <div className="img-bloque">
            <img src="src\assets\images\desktop\image-transform.jpg" alt="" className="img-section1"/>
          </div>
        </section>

        <section className="section1">
        <div className="img-bloque">
            <img src="src\assets\images\desktop\image-stand-out.jpg" alt="" className="img-section1"/>
          </div>
        <div className="text-bloque">
            <h4 className="text-section1-title">Transform your brand</h4>
            <span className="text-section1-description">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</span>
            <a href="" className="a-ref-section1">LEARN MORE</a>
          </div>
          
        </section>

        <section className="section1">
        <div className="img-bloque">
            <img src="src\assets\images\desktop\image-graphic-design.jpg" alt="" className="img-section1"/>
          </div>
        <div className="text-bloque">
        <div className="img-bloque">
            <img src="src\assets\images\desktop\image-photography.jpg" alt="" className="img-section1"/>
          </div>
          </div>
          
        </section>
  
    </main>


  </>

  )
}

export default App
