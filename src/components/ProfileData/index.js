function ProfileData({name, rol}) {
  return(
    <div className="profile__data">
      <h1>{name}</h1>
      <span>{rol}</span>
    </div>
  )
}

export default ProfileData;