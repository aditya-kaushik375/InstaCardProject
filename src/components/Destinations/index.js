import DestinationCard from '../DestinationCard'

import './index.css'

const data = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/serious-woman-making-notes-sitting-bench-outdoors_1262-19031.jpg?w=900&t=st=1693703712~exp=1693704312~hmac=37bf5f0bb18622a3a016d3856efab46fe07b4b8ca88559776121ca55b53a24bc',
    rating: '4.8',
    name: 'Harvard University',
    location: 'Cambridge,Massachusetts,UK',
  },
  {
    id: 2,
    image:
      'https://img.freepik.com/free-photo/serious-woman-making-notes-sitting-bench-outdoors_1262-19031.jpg?w=900&t=st=1693703712~exp=1693704312~hmac=37bf5f0bb18622a3a016d3856efab46fe07b4b8ca88559776121ca55b53a24bc',
    rating: '4.8',
    name: 'Oxford University',
    location: 'Oxford,England',
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/free-photo/serious-woman-making-notes-sitting-bench-outdoors_1262-19031.jpg?w=900&t=st=1693703712~exp=1693704312~hmac=37bf5f0bb18622a3a016d3856efab46fe07b4b8ca88559776121ca55b53a24bc',
    rating: '4.8',
    name: 'Stanford University',
    location: 'Stanford,California',
  },
  {
    id: 4,
    image:
      'https://img.freepik.com/free-photo/serious-woman-making-notes-sitting-bench-outdoors_1262-19031.jpg?w=900&t=st=1693703712~exp=1693704312~hmac=37bf5f0bb18622a3a016d3856efab46fe07b4b8ca88559776121ca55b53a24bc',
    rating: '4.8',
    name: 'Nanyang Technology',
    location: 'Nanyang Ave,Singapore',
  },
]

const Destinations = () => (
  <>
    <h2 style={{marginTop: '3rem', marginLeft: '20px'}}>Our Destinations</h2>
    <div className="destinations">
      {data.map(each => (
        <DestinationCard key={each.id} each={each} />
      ))}
    </div>
  </>
)
export default Destinations
