import React from 'react'

export default function Select({options, defaultValue, value, onChange}) {
  return (
    <select name="select"
      value={value}
      onChange={e => onChange(e.target.value)}>
      <option value="" default disabled>{defaultValue}</option>
      {options.map(e => {
        return <option key={e.value} value={e.value}>{e.name}</option>
      })}
  </select>
  )
}
