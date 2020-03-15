import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { sizes } from '../../../data/studentsData'
import styles from './select-styles.module.css'

const animatedComponents = makeAnimated()

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 0,
    boxShadow: state.isFocused ? '' : '',
  }),
}

export default function ReactSelect({onChange, selectValue}) {
  const defaultValue = selectValue.map(size => ({ value: size, label: size, }))
  return (
    <Select
      styles={customStyles}
      className={styles.select}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={sizes}
      placeholder="Filter by sizes"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  )
}