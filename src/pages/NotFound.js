import React from 'react'
const NotFound = () => {
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }
  return (
    <div>
      NotFound
    </div>
  )
}

export default NotFound
