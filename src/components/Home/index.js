import './index.css'

const Home = () => (
  <div className="details">
    <div className="home-details">
      <h4>Discover the beauty of the tropics</h4>
      <h1>Tropical Destinations</h1>
      <h2>For Student</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nulla,
        placerat quis gravida quis
      </p>
      <button className="btn" type="button">
        SIGN UP
      </button>
    </div>
    <div>
      <img
        src="https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149623.jpg?w=900&t=st=1693702439~exp=1693703039~hmac=9c79a1fb6ab9f8e89b45ae3adebff50ec50664d19afdc1de9d36d7957ae63535"
        alt="student"
        className="home-img"
      />
    </div>
  </div>
)

export default Home
