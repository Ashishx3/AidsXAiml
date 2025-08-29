import React from 'react'
import Card from '@/ui/Card'

import Navbar from '@/components/Navbar'
import profileImg from "@/public/images/profile.png"
import profileImg1 from "@/public/images/image.png"
import profileImg2 from "@/public/images/dh.png"

const page = () => {
  return (
    <div className='flex cards-container justify-center gap-12 mt-[130px]'>
        <Navbar/>
      
       <Card
          name="Dev Rai"
          photo={profileImg1}
          ig="dev_it_02"
          contact="+91 98272 94969"
          role="Founder & CEO"
          details={[
            "✨ Skilled in Web Dev",
            "📌 Location: India",
            "🎯 Loves AI & Data Science",
          ]}
        />
       
         <Card
          name="Ashish Singh"
          photo={profileImg}
          ig="_.ashish_h_"
          contact="+91 8871413488"
          role="Developer &  Growth Co-Founder"
          details={[
            "✨ Skilled in Web Dev",
            "📌 Location: India",
            "🎯 Loves AI & Data Science",
          ]}
        />
        <Card
          name="Dheeraj Ughade"
          photo={profileImg2}
          ig="dheeraj__0076"
          contact="+91 6265 807 922"
          role="Operations & Growth Co-Founder"
          details={[
            "✨ Skilled in Web Dev",
            "📌 Location: India",
            "🎯 Loves AI & Data Science",
          ]}
        />
    </div>
  )
}

export default page
