import './index.css'

const data = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?w=900&t=st=1693718664~exp=1693719264~hmac=a95a0a3f85f1bf728edc2b993730a29dfcc15d366a4a6c099c8c3f9f194aac8c',
    name: 'Corey Korsgaard',
    details:
      'Morbi vitae diam id ex cursus ultrices et id mauris. Hitur nisi vel, cursus metus. Nulla et ullamcorper lorem. Vivamus consequat urna ac porttitor pretium. Ut a ligula erat. Aliquam sit amet justo lacinia, scelerisque elit vel,',
  },
  {
    id: 2,
    image:
      'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?w=900&t=st=1693718664~exp=1693719264~hmac=a95a0a3f85f1bf728edc2b993730a29dfcc15d366a4a6c099c8c3f9f194aac8c',
    name: 'Jakob Aminoff',
    details:
      'Morbi vitae diam id ex cursus ultrices et id mauris.Hficitur nisi vel, cursus metus. Nulla et ullamcorper lorem. Vivamus consequat urna ac porttitor pretium. Ut a ligula erat. Aliquam sit amet justo lacinia, scelerisque elit vel,',
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?w=900&t=st=1693718664~exp=1693719264~hmac=a95a0a3f85f1bf728edc2b993730a29dfcc15d366a4a6c099c8c3f9f194aac8c',
    name: 'Carla Press',
    details:
      'Morbi vitae diam id ex cursus ultrices et id mauris. Hr nisi vel, cursus metus. Nulla et ullamcorper lorem. Vivamus consequat urna ac porttitor pretium. Ut a ligula erat. Aliquam sit amet justo lacinia, scelerisque elit vel,',
  },
]

const Testimonials = () => (
  <>
    <h1 style={{textAlign: 'center', marginTop: '3rem'}}>Testimonials</h1>
    <div className="test">
      {data.map(each => (
        <div key={each.id} className="test-card">
          <img className="test-image" src={each.image} alt={each.name} />
          <h2>{each.name}</h2>
          <p>{each.details}</p>
        </div>
      ))}
    </div>
  </>
)

export default Testimonials
