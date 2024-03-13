import './landing_top.css'

const LandingTop = ({title}) => {
  return (
    <div className='landing-top'>
        <div className='overlay'></div>
        <h1>{title}</h1>
    </div>
  )
}

export default LandingTop