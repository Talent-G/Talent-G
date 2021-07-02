import React from 'react';
import { connect } from 'react-redux';

function ProfileData({ firstName, lastName, type }) {

  return (
    <div className='profile__data'>
      <h1>
        {`${firstName} ${lastName}`}
      </h1>
      <span>{type}</span>
    </div>
  );
}

ProfileData.defaultProps = {
  firstName: '',
  lastName: '',
  type: '',
};

const mapStateToProps = (state) => {
  return {
    firstName: state?.students?.content?.user?.firstName,
    lastName: state?.students?.content?.user?.lastName,
    type: state?.students?.content?.type,
  };
};

export default connect(mapStateToProps, null)(ProfileData);

