import Card from '../Card'

import './index.css'

const data = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149623.jpg?w=900&t=st=1693702439~exp=1693703039~hmac=9c79a1fb6ab9f8e89b45ae3adebff50ec50664d19afdc1de9d36d7957ae63535',
    title: 'Jenny Wilson',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nulla.',
  },
  {
    id: 2,
    image:
      'https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149623.jpg?w=900&t=st=1693702439~exp=1693703039~hmac=9c79a1fb6ab9f8e89b45ae3adebff50ec50664d19afdc1de9d36d7957ae63535',
    title: 'Jenny Wilson',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nulla.',
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149623.jpg?w=900&t=st=1693702439~exp=1693703039~hmac=9c79a1fb6ab9f8e89b45ae3adebff50ec50664d19afdc1de9d36d7957ae63535',
    title: 'Jenny Wilson',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nulla.',
  },
]

const About = () => (
  <div className="about-details">
    <div className="about-cards">
      {data.map(each => (
        <Card key={each.id} each={each} />
      ))}
    </div>
    <div className="about-page-details">
      <h1>Tropical Adventure</h1>
      <h3>for Students.</h3>
      <p>Student Tropical Vacantion: Relax and Recharge</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <button className="btn" type="button">
        Explore More
      </button>
    </div>
  </div>
)

export default About
