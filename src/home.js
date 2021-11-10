import React from 'react'
import classes from './home.module.css';
import image from './React-js-1.png'
export default function Home() {
    return (
  <div>
  <header className={classes.header}>
      <nav>
       
        <a href="/" className={classes.navitem2}>Quizabo</a>
        <a href="/" className={classes.navitem3}>Sign up</a>
        <a href="login.html" className={classes.navitem4}>Login</a>
      </nav>
  </header>
<br/>
<br/>


    <div className="container">
        <div className="row">
          <div className="col">
              <div className="card" style={{"width": "18rem;"}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row justify-content-around">
        <div className="col-5">
          4 Questions
        </div>
        <div className="col-5">
          Marks: 10.
        </div>
      </div>

 
  </div>
</div>
          </div>
          <div className="col">
              <div className="card" style={{"width": "18rem;"}}>
   <img src={image} href="/" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><a href="https://github.com/learnwithsumit/react-quiz/tree/main/html" style={{"cursor": "pointer; text-decoration: none; color: black"}}>Card</a></h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row justify-content-around">
        <div className="col-5">
          4 Questions
        </div>
        <div className="col-5">
          Marks: 10.
        </div>
      </div>
  </div>
</div>
          </div>
          <div className="col">
              <div className="card" style={{"width": "18rem;"}}>
   <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row justify-content-around">
        <div className="col-5">
          4 Questions
        </div>
        <div className="col-5">
          Marks: 10.
        </div>
      </div>
  </div>
</div>
          </div>
          <div className="col">
              <div className="card" style={{"width": "18rem;"}}>
   <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row justify-content-around">
        <div className="col-5">
          4 Questions
        </div>
        <div className="col-5">
          Marks: 10.
        </div>
      </div>
  </div>
</div>
          </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
              <div className="col">
                  <div className="card" style={{"width": "18rem;"}}>
       <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">JS Quiz</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="row justify-content-around">
            <div className="col-5">
              4 Questions
            </div>
            <div className="col-5">
              Marks: 10.
            </div>
          </div>
      </div>
    </div>
              </div>
              <div className="col">
                  <div className="card" style={{"width": "18rem;"}}>
       <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">React Quiz</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="row justify-content-around">
            <div className="col-5">
              4 Questions
            </div>
            <div className="col-5">
              Marks: 10.
            </div>
          </div>
      </div>
    </div>
              </div>s
              <div className="col">
                  <div className="card" style={{"width": "18rem;"}}>
       <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Quiz 3</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="row justify-content-around">
            <div className="col-5">
              4 Questions
            </div>
            <div className="col-5">
              Marks: 10.
            </div>
          </div>
      </div>
    </div>
              </div>
              <div className="col">
                  <div className="card" style={{"width": "18rem;"}}>
       <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="row justify-content-around">
            <div className="col-5">
              4 Questions
            </div>
            <div className="col-5">
              Marks: 10.
            </div>
          </div>
      </div>
    </div>
              </div>
        </div>
    </div>


  </div>
          
</div>
        
        
    )
}
