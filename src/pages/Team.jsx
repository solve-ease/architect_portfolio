import { useState } from 'react'
import '../styles/Team.css'

function Team() {
  const [searchTerm, setSearchTerm] = useState('')

  const teamMembers = [
    {
      id: 1,
      name: 'Nanne de Ru',
      title: 'Founder',
      location: 'Rotterdam',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Paul Stavert',
      title: 'Partner Architect',
      location: 'Rotterdam',
      image: '' // Placeholder
    },
    {
      id: 3,
      name: 'Stefan Prins',
      title: 'Partner Architect',
      location: 'Rotterdam',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Emma Johnson',
      title: 'Senior Architect',
      location: 'Amsterdam',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Michael Chen',
      title: 'Design Director',
      location: 'Rotterdam',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Sarah Williams',
      title: 'Interior Designer',
      location: 'Utrecht',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ]

  const careerPositions = [
    { id: 1, initials: 'TS', title: 'Tender Specialist', location: 'Rotterdam', color: '#c9ab8a' },
    { id: 2, initials: 'BD', title: 'Business Developer', location: 'Rotterdam', color: '#d4dcd9' },
    { id: 3, initials: 'PI', title: 'PR Internship', location: 'Rotterdam', color: '#f4b4b4' },
    { id: 4, initials: 'FM', title: 'Facility Management Stage', location: 'Rotterdam', color: '#c9ab8a' },
    { id: 5, initials: 'JI', title: 'Ingenieur', location: 'Rotterdam', color: '#c9ab8a' },
    { id: 6, initials: 'TI', title: 'Stagiair(e) technisch ontwerp', location: 'Rotterdam', color: '#e5d5d5' },
    { id: 7, initials: 'AI', title: 'Architecture Internship', location: 'Rotterdam', color: '#e5d5d5' }
  ]

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="team-content">
      <div className="team-label">Team</div>
      
      <h1 className="team-heading">
        Behind every iconic project is a talented team of international architects, designers and thinkers.
      </h1>

      <button className="join-button">Join us</button>

      <div className="controls">
        <button className="filter-button">Filter</button>
        <div className="search-container">
          <span className="search-icon"><img src="src/assets/search.svg" alt="" /></span>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="team-grid">
        {filteredMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="placeholder-image"></div>
              )}
            </div>
            <div className="team-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
              <p className="member-location">{member.location}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="careers-section">
        <div className="careers-label">Careers</div>
        
        <h2 className="careers-heading">
          Join our team and shape the future of architecture with us.
        </h2>

        <div className="careers-grid">
          {careerPositions.map((position) => (
            <div key={position.id} className="career-card">
              <div className="career-icon" style={{ backgroundColor: position.color }}>
                {position.initials}
              </div>
              <div className="career-info">
                <h3 className="career-title">{position.title}</h3>
                <p className="career-location">{position.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Team
