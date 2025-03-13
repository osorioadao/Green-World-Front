import React from 'react'
import Avatar from '../../components/ui/Avatar'

function avatarClient() {
  return (
    <div>
        {/* Avatar */}
        <div className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <Avatar name="Albertina" email="albertinasauimbo17@gmail.com" tipoUsuario="Admin" />
          <p className="text-center text-sm font-semibold">Albertina Sauimbo</p>
        </div>
    </div>
  )
}

export default avatarClient