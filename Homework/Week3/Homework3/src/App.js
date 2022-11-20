import './App.css';
import Menu from './Menu';
import Avatar from './images/avatar.jpg';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="page-white tabcontent" id="profile">
        <div className="row">
          <div id="title-big">
              <h1>Profile</h1>
              <p>I'm a student</p>
              <hr />
          </div>
        
            
          <div className="column col-3">
              <h3 className="title-medium">About me</h3>
              <p>I'm a easy-going person. I like football, video games, art and movies.</p>
          </div>
          
          <div className="column col-3">
              <img src={Avatar} alt="avatar" class="avatar" />
          </div>

          <div class="column col-3">
            <h3 class="title-medium">Details</h3>
            <p><strong>Name:</strong><br />
                Nguyen Quoc Tuan</p>

            <p><strong>Age:</strong><br />
                21 year-old</p>

            <p><strong>Location:</strong><br />
            UIT, VNU-HCM</p>
            <br /><br />
          </div>
        </div>
        
        <hr />
      </div>

    <div className="page-orange tabcontent" id="experience">
        <h2>Experiences</h2>
        <hr />

        <h3 className="title-medium">Educations</h3>
            
        <div className="column col-2 left">
            <h4>UIT, VNU-HCM</h4>
            <p>Apr 2019 - June 2024</p>
        </div>
            
        <div className="column col-2 right">
            <h4>Information System</h4>
            <p>The education was mainly System design-basec course, 
                but I also learned about Web, Data Analysis and more. 
                During my time in college, I specialized in OOP, data science. 
                Now, I'm learning web development</p>
        </div>

        <hr />
            <h3 className="title-medium">Working Experiences</h3>

            <div className="column col-2 left">
                <h4>University of Information Technology</h4>
                <p>2019 - current</p>
            </div>
                
            <div className="column col-2 right">
                <h4>Student</h4>
                <p>Studying in Information System. About to graduate in 2024</p>
                <br /><br />
            </div>

        <hr />
    </div>

    <div className="page-white tabcontent" id="ability">
            <h2>Abilities</h2>
            <hr />

            <h3 className="title-medium">Skills</h3>
            <div className="row">
                <div className="column col-2">
                    
                    <div>HTML/CSS
                        <div className="rate">
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                        </div>
                    </div>
                </div>
                    
                <div className="column col-2">
                    <div>NodeJS
                        <div className="rate">
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o fade"></i>
                            <i className="fa fa-square-o fade"></i>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>

            <div className="row">
                <div className="column col-2">
                    <div>ReactJS
                        <div className="rate">
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o fade"></i>
                            <i className="fa fa-square-o fade"></i>
                            <i className="fa fa-square-o fade"></i>
                        </div>
                    </div>
                </div>
                    
                <div className="column col-2">
                    <div>C#
                        <div className="rate">
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o"></i>
                            <i className="fa fa-square-o fade"></i>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
            

            <div className="center">
                <span className="fade">See my profile on github</span><br />
                <button className="btn">See project on Github</button>
            </div>

            <hr />
            <h3 className="title-medium">Languages</h3>


            <div className="column col-2">
                <div>Vietnamese (Native)
                    <div className="rate">
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                    </div>
                </div>
            </div>
                
            <div className="column col-2">
                <div>English (Toeic 750)
                    <div className="rate">
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o"></i>
                        <i className="fa fa-square-o fade"></i>
                    </div>
                </div>
                <br /><br />
            </div>

      </div>
    </div>


  );
}

export default App;
