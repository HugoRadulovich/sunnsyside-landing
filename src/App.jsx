import 'animate.css';



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
                  <a href="" className="nav-contact">CONTACT</a>
              </ul>
          </nav>    
    </header> 
    <main>
        <div className="container-titulo ">
            <h1 className="text-titulo ">WE ARE CREATIVES</h1>
            <img src='src\assets\images\icon-arrow-down.svg' alt="" className="img-titulo  animate__animated animate__bounce animate__infinite	infinite  animate__slow	3s" />
        </div>


        {/* section1 */}
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

        {/* section 2 */}
        <section className="section2">
            <div className="img-bloque">
                <img src="src\assets\images\desktop\image-stand-out.jpg" alt="" className="img-section2"/>
              </div>
            <div className="text-bloque">
                <h4 className="text-section2-title">Stand out to the right audience</h4>
                <span className="text-section2-description">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</span>
                <a href="" className="a-ref-section2">LEARN MORE</a>
              </div>
          
        </section>

        {/* section 3 */}

        <section className="section1">
            
            <div className="contenedor">
                <img src="src\assets\images\desktop\image-graphic-design.jpg" alt="" className="img-section1"/>
                <div className="centrado">Graphic design</div>
                <div className="centrado-next">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
              
            </div>
            <div className="contenedor">
                <img src="src\assets\images\desktop\image-photography.jpg" alt="" className="img-section1"/>
                <div className="centrado1">Photography</div>
                <div className="centrado-next1">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
              
            </div>
        </section>

        {/* section 4 - info */}

        <section className="section4">
         <div className="title-section4">
            <h3 className="">CLIENTS TESTIMONIALS</h3>
         </div>
          <div className="personas-section4">
              <div className="info-section4">
                <img src="src\assets\images\image-emily.jpg" alt="" className="img-section4" />
                <h3 className="descripition-section-4">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</h3>
               <div className="">
                 <h6 className="name-section-4">Emily R.</h6>
                <span className="profesion-section-4">Marketing Director</span>
               </div>
              </div>
              <div className="info-section4">
                <img src="src\assets\images\image-thomas.jpg" alt="" className="img-section4" />
                <h3 className="descripition-section-4">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</h3>
                <h6 className="name-section-4">Thomas S.</h6>
                <span className="profesion-section-4">Chief Operating Officerr</span>
              </div>
              <div className="info-section4">
                <img src="src\assets\images\image-jennie.jpg" alt="" className="img-section4" />
                <h3 className="descripition-section-4">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</h3>
                <h6 className="name-section-4">Jennie F.</h6>
                <span className="profesion-section-4">Business Owner</span>
              </div>
          
          </div>
        </section>

        {/* section 5 */}

        <section className="section5">
          <img src="src\assets\images\desktop\image-gallery-milkbottles.jpg" alt="" className="" />
          <img src="src\assets\images\desktop\image-gallery-orange.jpg" alt="" className="" />
          <img src="src\assets\images\desktop\image-gallery-cone.jpg" alt="" className="" />
          <img src="src\assets\images\desktop\image-gallery-sugarcubes.jpg" alt="" className="" />
        </section>

        
  
    </main>

    <footer className="">
        <div className="footer-logo">
        <img src='src/assets/images/logo.svg' alt="" className="" />
        </div>
        <div className="a-ref-footer">
          <a href="" className="ref-foot">About</a>
          <a href="" className="ref-foot">Services</a>
          <a href="" className="ref-foot">Projects</a>
        </div>
         <div className="redes-footer"> 
         <a href="#" className="icon"><img src="src\assets\images\icon-facebook.svg" alt="Facebook"/></a>
            <a href="#" className="icon"><img src="src\assets\images\icon-instagram.svg" alt="Twitter"/></a>
            <a href="#" className="icon"><img src="src\assets\images\icon-twitter.svg" alt="Instagram"/></a>
            <a href="#" className="icon"><img src="src\assets\images\icon-pinterest.svg" alt="Pinterest"/></a>
        </div> 
      </footer>


  </>

  )
}

export default App
