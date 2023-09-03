import './index.css'

const BookNow = () => (
  <div className="book-now">
    <div>
      <img
        src="https://img.freepik.com/free-photo/serious-woman-making-notes-sitting-bench-outdoors_1262-19031.jpg?w=900&t=st=1693704584~exp=1693705184~hmac=e277f5c22e81eb16ee18f8db0d9962e061417b1e8b3d0a7f74fcc5e5244ecb0b"
        alt="student"
        className="book-now-image"
      />
    </div>
    <form className="book-now-form">
      <h1>Book Now</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nulla.
      </h4>
      <label htmlFor="city">CITY</label>
      <input type="text" placeholder="Placeholder" id="city" />
      <p className="book-now-date">
        <span className="box">
          <label htmlFor="arrival">ARRIVAL</label>
          <input type="text" id="arrival" placeholder="10 October" />
        </span>
        <span className="box">
          <label htmlFor="departure">DEPARTURE</label>
          <input type="text" id="departure" placeholder="11 October" />
        </span>
      </p>
      <p className="book-now-date">
        <span className="box1">
          <label htmlFor="star">STAR</label>
          <span className="box2">
            <button type="button">+</button>

            <input
              type="text"
              id="room"
              placeholder="1"
              style={{width: '50px'}}
            />
            <button type="button">-</button>
          </span>
        </span>

        <span className="box1">
          <label htmlFor="star">ROOM</label>
          <span className="box2">
            <button type="button">+</button>

            <input
              type="text"
              id="room"
              placeholder="1"
              style={{width: '50px'}}
            />
            <button type="button">-</button>
          </span>
        </span>
      </p>
      <button className="book-now-btn" type="button">
        BOOK NOW
      </button>
    </form>
  </div>
)

export default BookNow
