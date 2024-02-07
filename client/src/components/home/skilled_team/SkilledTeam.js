import './skilled_team.css'

const SkilledTeam = () => {
    const teamMembers = [
        { 
            name : "Judith",
            title: "Consultant",
            image:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        { 
            name : "Frank",
            title: "Consultant",
            image:"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {   
            name : "Annie",
            title: "Founder",
            image:"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        { 
            name : "James",
            title: "Co-Founder",
            image:"https://images.unsplash.com/photo-1623605931891-d5b95ee98459?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]
  return (
    <div className='skilled-team'>
        <h1>Meet Our Skilled Team</h1>
        <div className='flex-row-center'>
            {
                teamMembers.map(member => {
                    return(
                        <div className='member'>
                            <div className='image-container'><img src={member.image} alt='' /></div>
                            <h4>{member.name}</h4>
                            <h6>{member.title}</h6>
                            <p><i class="bi bi-twitter"></i> <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i></p>
                        </div> 
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default SkilledTeam