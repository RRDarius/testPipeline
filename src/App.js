import { React, useState } from 'react';
import { Container, Box, Stack } from '@mui/material';

import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar'
import SearchableItemList from './components/SearchableItemList'

function App() {
  const initialClothingList = [
    {
      id: 1,
      type: 'SHIRT',
      color: 'White',
      brand: 'Broaks Brothers',
      gender: 'MALE',
      size: 'MEDIUM',
      condition: 'EXCELLENT'
    }, {
      id: 2,
      type: 'OUTERWEAR',
      color: 'Red',
      brand: 'South Face',
      gender: 'UNISEX',
      size: 'SMALL',
      condition: 'FAIR'
    }, {
      id: 3,
      type: 'SHIRT',
      color: 'Blue',
      brand: 'Lala Lemon',
      gender: 'FEMALE',
      size: 'MEDIUM',
      condition: 'FAIR'
    }, {
      id: 4,
      type: 'PANTS',
      color: 'Blue',
      brand: 'Lands Start',
      gender: 'MALE',
      size: 'LARGE',
      condition: 'EXCELLENT'
    }, {
      id: 5,
      type: 'SHOES',
      color: 'Black',
      brand: 'Mike',
      gender: 'MALE',
      size: 'EXTRA_LARGE',
      condition: 'DESTROYED'
    }, {
      id: 6,
      type: 'VEST',
      color: 'Brown',
      brand: 'Lands Start',
      gender: 'UNISEX',
      size: 'SMALL',
      condition: 'FAIR'
    }, {
      id: 7,
      type: 'UNDERWEAR',
      color: 'Black',
      brand: 'Fruit of the Tree? idk lol',
      gender: 'MALE',
      size: 'EXTRA_SMALL',
      condition: 'DAMAGED'
    }, {
      id: 8,
      type: 'MISCELLANEOUS',
      color: 'Purple',
      brand: 'Random Co',
      gender: 'FEMALE',
      size: 'EXTRA_LARGE',
      condition: 'DAMAGED'
    }, {
      id: 9,
      type: 'HAT',
      color: 'White',
      brand: 'Mike',
      gender: 'UNISEX',
      size: 'MEDIUM',
      condition: 'POOR'
    }, {
      id: 10,
      type: 'SHIRT',
      color: 'Orange',
      brand: 'Puma',
      gender: 'MALE',
      size: 'SMALL',
      condition: 'POOR'
    }, {
      id: 11,
      type: 'SOCKS',
      color: 'Red',
      brand: 'Cars',
      gender: 'MALE',
      size: 'LARGE',
      condition: 'FAIR'
    }, {
      id: 12,
      type: 'OUTERWEAR',
      color: 'Gray',
      brand: 'Appalachian',
      gender: 'FEMALE',
      size: 'EXTRA_SMALL',
      condition: 'EXCELLENT'
    },
  ];

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [searchTerm, setSearchState] = useState('');
  let [typeSelect, setTypeState] = useState('');
  let [clothingStateList, setClothingState] = useState(initialClothingList)
  
  function handleSearch(event) {
      setSearchState(event.target.value);
  }

  function handleSelect(event) {
    setTypeState(event.target.value);
  }

  function removeClothingItem(item) {
    const newClothingList = clothingStateList.filter(
      (clothing) => item.id !== clothing.id
    );
    setClothingState(newClothingList);
  }

  const searchedClothingList = initialClothingList.filter((item) => {
    return item.brand.toLowerCase().includes(searchTerm.toLowerCase()) && item.type.toLowerCase().includes(typeSelect.toLowerCase());
  });

  return (
    <div className="App">
      <Box sx={{
        mb: 5
        }}>
        <NavigationBar />
      </Box>
      <Container maxWidth="xl">
        <Stack fullWidth>
          <Box sx={{ display: 'flex' }} fullWidth>
            <SearchBar search={searchTerm} onSearch={handleSearch} selectedType={typeSelect} onSelect={handleSelect}/>
          </Box>
          <SearchableItemList clothingList={searchedClothingList} onRemoveItem={removeClothingItem}/>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
