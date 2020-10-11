import React from 'react'

export default ({label, required}) => (
  <p className="InputLabel">
    {label}
    {required &&
      <span className="requiredField">
        *
      </span>
    }
  </p>
)