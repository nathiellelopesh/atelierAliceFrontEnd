import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './filter.module.css';
import FormControl from '@mui/material/FormControl';
import { IoSearchOutline } from "react-icons/io5";


const FilterComponent = ({filterProducts}) => {
  const [priceRange, setPriceRange] = useState('');
  const [size, setSize] = useState('')

  const sizes = ['P', 'M', 'G', 'GG', 'Todos']

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const handlefilter = () => {
    filterProducts(priceRange, size);
    //console.log(`Filtro de preço: ${priceRange}, Tamanho: ${size}`)
  }

  return (
    <div className={styles.filterContainer}>
      <h3>Filtros</h3>

      <div className={styles.filterItem}>
        <label>Preço</label>
        <div className={styles.priceRange}>
          <ReactSlider
            min={0}
            max={1000}
            step={50}
            value={priceRange}
            onChange={handlePriceChange}
            className={styles.slider} 
            thumbClassName={styles.thumb} 
            trackClassName={styles.track} 
          />
          <div className={styles.priceValues}>
            <span>Até R$ {priceRange}</span>
          </div>
        </div>
      </div>

      <FormControl fullWidth sx={{width: '180px'}}>
        <InputLabel id="demo-simple-select-label">Tamanho</InputLabel>
        <Select
          sx={{
            borderRadius: '10px',  
            '.MuiOutlinedInput-root': {
              borderRadius: '30px', 
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Tamanho"
          onChange={handleChangeSize}
        >
          {sizes.map((item) => {
            return <MenuItem value={item} key={item}>{item}</MenuItem>
          })}
          
        </Select>
      </FormControl>

      <div className={styles.search} onClick={handlefilter}><IoSearchOutline color='#fff'/></div>
    </div>
  );
};

export default FilterComponent;

//