import React from 'react'
import Card from '@/ui/Card'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar/>
       <Card
          name="Ashish Singh"
          photo="@/public/images/profile.png"
          ig="ashish_ig"
          contact="+91 9876543210"
          role="Developer"
          details={[
            "✨ Skilled in Web Dev",
            "📌 Location: India",
            "🎯 Loves AI & Data Science",
          ]}
        />
       <Card
          name="Ashish Singh"
          photo="@/public/images/profile.png"
          ig="ashish_ig"
          contact="+91 9876543210"
          role="Developer"
          details={[
            "✨ Skilled in Web Dev",
            "📌 Location: India",
            "🎯 Loves AI & Data Science",
          ]}
        />
       <Card
          name="Ashish Singh"
          photo="@/public/images/profile.png"
          ig="ashish_ig"
          contact="+91 9876543210"
          role="Developer"
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
