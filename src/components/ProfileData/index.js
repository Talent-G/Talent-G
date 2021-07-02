import React from 'react';
import { connect } from 'react-redux';

function ProfileData({ firstName, lastName, rol }) {

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

