import Navbar from '../components/Navbar'
import '../styles/Team.css'

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Chaitanya Goyal',
      position: 'Founder',
      languages: 'English, Hindi',
      image: '/team/chaitanya.webp'
    },
    {
      id: 2,
      name: 'Anand Goyal',
      position: 'Co - Founder',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 3,
      name: 'Mohammed Faisal Rais',
      position: 'Project Architect',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 4,
      name: 'Yogendra Yadav',
      position: 'General Manager',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 5,
      name: 'Mukesh Goyal',
      position: 'Adviser',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 6,
      name: 'Varshika Agarwal',
      position: 'Designer',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 7,
      name: 'Sarthak',
      position: 'BD',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    },
    {
      id: 8,
      name: 'Anika Jain',
      position: 'Interior Designer',
      languages: 'English, Hindi',
      image: '/team/silhoutte.webp'
    }
  ]

  return (
    <div className="team-page">
      <Navbar />
      
      <main className="team-content">
        <h1 className="team-heading">Meet our Team</h1>
        
        <p className="team-description">
          We are a team of Architects, Landscape Designers, Creatives,<br />
          Computational Designers, Interior Designers, Project Managers, Technicians, and<br />
          &nbsp;Visualisation Artists
        </p>

        <div className="divider"></div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} className="member-image" />
              <div className="member-overlay"></div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-languages">{member.languages}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Team
