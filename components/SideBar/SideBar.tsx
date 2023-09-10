import React from 'react'
import FacebookPage from '../FacebookPage'
import InstagramFeed from '../InstagramFeed'
import Divider from '../../UI/Divider'

const SideBar = () => {
  return (
    <div className="side-panel">
      <div style={{textAlign: 'center'}}>
        <img
          style={{
            margin: '5px',
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
          alt="Liv a Dan"
          src="/images/photosFull/AboutUs.jpg"
        />
      </div>
      <div className="screen-reader-text">
        <p>
          Ahoj, my sme Liv a Dan, dvaja cestovatelia, ktorým dobrodružstvo
          koluje v žilách. Naše plány vznikajú spontánne a čím šialenejšie
          znejú, tým viac sa pre ich realizáciu nadchneme. Cestujeme na vlastnú
          päsť, výhradne bez cestovky, s batohom na pleciach a častokrát riešime
          veci za pochodu. Zdieľame naše zážitky, skúsenosti a fotografie z
          ciest, tak aby sme nakopli aj tvoju chuť objavovať svet. Hovorí sa,
          že: „šťastie si za peniaze nekúpiš,“ ale môžeš si kúpiť letenku a to
          je skoro to isté, no nie?
        </p>
      </div>
      {/* <h3>Sleduj nás na Facebooku</h3> */}
      <Divider text="Facebook"/>
      <FacebookPage token={process.env.NEXT_PUBLIC_FB_APP_ID}/>
      <Divider text="Instagram"/>
      <InstagramFeed counter={9}/>
    </div>
  )
}
export default SideBar
