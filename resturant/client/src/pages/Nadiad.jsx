import React from 'react';
import Heder from '../login/Heder';
import Card from '../home/Card';
import mango from './mango.png';
import woodland from './woodland.jpg';
import blue from './blue-b.jpg';
import khodi from './khodiyar.jpg';
import lapi from './lapinoz.jpg';
import retro from './retro.jpg';
import swad from './swad.png';
import navji from './navji.jpg';

const Nadiad = () => {

  const cardsdetail = [
    {
      image: mango,
      title: 'The Mango County',
      details: 'Address: Piplag Chokdi, Nadiad - Petlad Rd, Nadiad, Gujarat 387335. Hours: Closed ⋅ Opens 11 am. Phone: 078018 59797'
    },
    {
      image: blue,
      title: 'Blueberrys Restaurant & Banquet',
      details: 'Address: Nadiad-Anand Rd, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 099741 83919'
    },
    {
      image: woodland,
      title: 'Tulips Woodlands Restaurant',
      details: 'Address: College Rd, beside Ajs Honda, opp. Kheta Lake, Nutan Park Society, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 091068 15250'
    },
    {
      image: retro,
      title: 'Retro Bistro Nadiad - The Multi Cuisine Restaurant',
      details: 'Address: 4th Floor, Radhe Icon Complex, Nadiad - Petlad Rd, opposite Bandhan Party Plot, Piplag, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 089887 40888'
    },
    {
      image: khodi,
      title: 'SHREE KHODIYAR KATHIYAWADI',
      details: 'Address: FIRST FLOOR, KANT ARCADE, CHOWKDI, Piplag, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 088495 13623'
    },
    {
      image: lapi,
      title: 'La Pino’z Pizza Nadiad',
      details: 'Address: Nadiad Nexus 1, Uttarsand, Road, Nadiad. Hours: Closed ⋅ Opens 9 am. Phone: 099093 57888'
    },
    {
      image: swad,
      title: 'Swad Restaurant',
      details: 'Address: College Rd, opp. Ayurvedic College, Chalali, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 098249 44402'
    },
    {
      image: navji,
      title: 'Navjivan Restaurant',
      details: 'Address: Shree Complex, Vania Vad, Shanti Nagar, Nadiad, Gujarat 387001. Hours: Closed ⋅ Opens 11 am. Phone: 099048 89110'
    },
   
  ];
  return (
    <>
    <div className='home-heder'>
    <Heder/>
    </div>

    <div>
        <Card cardd={cardsdetail}/>
    </div>
    
    </>
  )
}

export default Nadiad