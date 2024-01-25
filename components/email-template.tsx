import React from 'react';
import PropTypes from 'prop-types';

const EmailTemplate = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for joining BizzLink. We're excited to have you on board!</p>
    <p>Keep an eye out for exciting business opportunities available for sale on our marketplace.</p>
  </div>
);
EmailTemplate.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default EmailTemplate;
