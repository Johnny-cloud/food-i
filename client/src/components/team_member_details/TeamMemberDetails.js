import './team_member_details.css'
import LandingTop from '../landing_top/LandingTop'
import AppContext from '../app_context/AppContext'
import { useContext, useEffect, useState } from 'react'

const TeamMemberDetails = () => {
    const {selectedMember} = useContext(AppContext)

    const [member, setMember] = useState({
        name: "Sarit",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Co-Founder"
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        if(selectedMember){
           setMember(selectedMember) 
        } 
    }, [selectedMember])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [] )

  return (
    <div className='team-member-details'>
        <LandingTop />
        <div className='main-content'>
            <div className='member-section flex-row-center'>
                <div className='image-container'><img src={member.image} alt='' /></div>
                <div className='details'>
                    <h2>{member.name}</h2>
                    <h5>{member.title}</h5>
                    <p><b>Responsibility: </b> Farming</p>
                    <p><b>Experience: </b> 10 years</p>
                    <p><b>Email:</b> harry@gmail.com</p>
                    <p><b>Phone: </b> +254 7XXXXXXXXXX</p>
                </div>
            </div>
            <div>
                <h2>Personal Experience</h2>
                <p>Prior to joining, Anna taught at The Hebrew University, the Jerusalem Institute of Management, 
                    and served in the Israeli Army. Active in civil and professional affairs, Orit sits on several boards.
                     He also plays an active role in academics, serving on the Publications Review Board of the Harvard Business 
                     School Press and the Harvard College Overseers’ Committee to Visit the Graduate School of Business Administration.</p>

            </div>

            <div>
                <h2>Education</h2>
                <p>As chairman of Nativefarm , James is one of the leaders in today’s marketing strategy, 
                    consulting and is widely recognized for him expertise in the implementation of change within the corporation.</p>
                <p>Anna joined Nativefarm 2013, after graduating from Business School. She earned MBA with high distinction, 
                    was a Baker scholar, won the Brown prize.</p>

                    
            </div>

            <div>
                <h2>Career</h2>
                <p>James has contributed to a number of leading management and business journals,
                     such as the Harvard Business Review and The Wall Street Journal, 
                     as well as given speeches at leadership conferences around the world. 
                     An active leader not only in the business world, but in the community as a whole, 
                     James is accomplishments are numerous. In 2007, he was presented with the
                      Lifetime Achievement Award from “Consulting” magazine and was honored at the magazine’s 
                      awards dinner for women leaders in consulting.</p>
            </div>
        </div>
        
    </div>
  )
}

export default TeamMemberDetails