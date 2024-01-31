// import CustomNavSidebar from "../components/CustomNavSidebar"
import CustomNavbar from "../components/CustomNavbar"
import { Link } from "react-router-dom"
import '../assets/css/home.css'
import { Carousel } from "rsuite"
const Home =()=>{
    return(
        <div className="container">
            <header>

            <CustomNavbar></CustomNavbar>
            
            </header>
            <main>
                <div>
                
   <Carousel autoplay className="custom-slider">
    <img src="https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2018/06/15.jpg" height="500" />
    <img src="https://cdn.yogajournal.com/wp-content/uploads/2016/10/gratitude-quote-1-yogi-bhajan.jpg?width=730" height="500" />
    <img src="https://www.fitsri.com/wp-content/uploads/2021/02/Exercises-are-like-prose-1024x683.jpg" height="500" />
    {/* <img src="https://oqkrwv7qnepe-u4735.pressidiumcdn.com/wp-content/uploads/2023/04/yoga_gratitude_quotes_fitter_habits_2-1.jpg" height="500" /> */}
  </Carousel>
                <div className="cardhome">
        <section className="homecards">
          <div className="s">
            <h2 className="homeh2"></h2>
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif" className="homeimg"></img>
            <h2 className="homeh2">Hatha Yoga</h2>
            <br></br>
            <p className="homep">Hatha school of Yoga that stresses mastery of the body as a way of attaining a state of spiritual perfection in which the mind is withdrawn from external objects.</p>
            {/* <br></br> */}
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/1c/cf/db/1ccfdbb030155aae5a6eec0c514707f7.gif" className="homeimg"></img>
            <h2 className="homeh2">Ashtanga Yoga</h2>
            <br></br>
            <p className="homep">Ashtanga is a very dynamic and athletic form of hatha yoga, made up of six series or levels, with a fixed order of postures.</p>
           
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          <div className="spcard">
            <img src="https://i.pinimg.com/originals/cc/b2/9a/ccb29aadc3680b839bf05da2af2fef75.gif" className="homeimg"></img>
            <h2 className="homeh2">Vinyasa Yoga</h2>
            <br></br>
            <p className="homep">Vinyasa yoga is a creative form of yoga where poses are linked together with the breath in a flowing sequence. The beauty of Vinyasa yoga is the variety.</p>
            {/* <br></br> */}
            <h3 className="homebutton"><Link to='/course'>ENROLL NOW!!</Link></h3>
          </div>
          
        </section>
      </div>
                </div>
                <>
  <section className="dark">
    <div className="container py-4">
      
      <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://i.pinimg.com/564x/6e/6f/aa/6e6faa3c97b07e233adb0525d5594495.jpg"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title blue">
            <a href="#">JOIN OUR INSTITUTION!!</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              Mon, JAN 28th 2024
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            
Welcome to our distinguished institution of yoga, where the pursuit of knowledge intertwines with the development of leaders. As you step through our doors, envision yourself as a captain charting the course of your academic 
and personal journey. Here, we cultivate an environment that nurtures not only intellect but also character. </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              Podcast
            </li>
            
            <li className="tag__item play blue">
              <a href="#">
                <i className="fas fa-play mr-2" />
                JOIN US
              </a>
            </li>
          </ul>
        </div>
      </article>
     
    </div>
  </section>
</>

<div className="footer-basic">
  <footer>
    
    <ul className="list-inline">
    <li className="list-inline-item">
        <a href="https://lawmin.gov.in/">Health</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Fitness</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Guideness</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">Yoga Academy © 2024</p>
  </footer>
</div>
               
            </main>
        </div>
    )
}
export default Home