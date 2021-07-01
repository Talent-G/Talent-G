import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import fetchUser from '../../redux/actions/fetchUserRequest';

function ProfileData({ firstName, lastName, rol }) {

  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (user.length === 0) {
      dispatch(fetchUser());
      setUser([{}, {}]);
    }
  });

  return (
    <div className='profile__data'>
      <h1>
        {`${firstName} ${lastName}`}
      </h1>
      <span>{rol}</span>
    </div>
  );
}

ProfileData.defaultProps = {
  firstName: '',
  lastName: '',
  rol: '',
};

const mapStateToProps = (state) => {
  return {
    firstName: state?.students?.content?.firstName,
    lastName: state?.students?.content?.lastName,
  };
};

export default connect(mapStateToProps, null)(ProfileData);

