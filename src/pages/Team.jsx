import Navbar from '../components/Navbar'
import '../styles/Team.css'

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      position: 'Senior Architect',
      languages: 'English, Hindi, Spanish',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop'
    },
    {
      id: 2,
      name: 'Team Member 2',
      position: 'Design Director',
      languages: 'English, French, German',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop'
    },
    {
      id: 3,
      name: 'Team Member 3',
      position: 'Project Manager',
      languages: 'English, Mandarin, Japanese',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop'
    }
  ]

  return (
    <div className="team-page">
      <Navbar />
      
      <main className="team-content">
        <h1 className="team-heading">Meet our Team</h1>
        
        <p className="team-description">
          We are a multilingual team of Architects, Landscape Designers, Creatives,<br />
          Computational Designers, Interior Designers, Project Managers, Technicians, and<br />
          Visualisation Artists
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
