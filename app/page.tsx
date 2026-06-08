import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <Link href="/Signup" className="text-blue-500 underline">
          Go to signup page
        </Link>
    </div>
  )
}

export default page
