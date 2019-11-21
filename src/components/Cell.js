import React from 'react';

export default function Cell({color}) {
  return (
    <div className={`col ${color}`} />
  )
}