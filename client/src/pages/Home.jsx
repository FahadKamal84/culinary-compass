import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
function Home({ users, message }) {
  return (
    <div className="home">
      <div className="carousel">
        <Carousel>
        <Carousel.Item controls={true}>
          <img src="https://www.closetcooking.com/wp-content/uploads/2008/08/Corn-and-Black-Bean-Quesadillas-500.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item controls={true}>
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="recipe-list-item">
        <div className="profile-pic">
          <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg"/>
        </div>
        <div className="profile-info">
          <div className="recipe-title">
            <p>Recipe Name by Chef Name</p>
          </div>
          <p>Time:</p>
          <p>Est Budget:</p>
          <p>Cuisine:</p>
          <p>Description:</p>
        </div>
        <div>

        </div>
      </div>

        {/* {message ? (
          <p>{message}</p>
        ) : (
          <ul>
            {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
          </ul>
        )} */}
    </div>
  );
}

export default Home;
