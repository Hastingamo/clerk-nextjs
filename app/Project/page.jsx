import React from 'react'
im
function Page() {
  const [data, setData] = useState("");
  const [loading , setLoading] = useState(false);

  useEffect( => () {
    setLoading(true);

  })
  return (
    <div>
      <h1>Project page</h1>
      <div>
        </div>

    </div>
  )
}

export default Page
