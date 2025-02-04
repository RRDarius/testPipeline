import { 
    Box, 
    Select, 
    InputLabel, 
    MenuItem, 
    FormControl,
    TextField 
} from '@mui/material';
import { Type } from './constants/const';

export default function SearchBar({search, onSearch, selectedType, onSelect}) {

    return(
        <Box sx={{ minWidth: '30%', maxWidth: '50%'}}>
            <TextField id="outlined-basic" label="Brand" variant="outlined" value={search} onChange={onSearch} sx={{ width: '49%', mr: '2%' }}/>
            <FormControl sx={{ width: '49%' }}>
                <InputLabel>Clothing Type</InputLabel>
                <Select
                labelId='type-select-field'
                value={selectedType}
                label="Clothing Type"
                onChange={onSelect}
                >
                    {Object.keys(Type).map((type) => (
                        <MenuItem value={type} key={type}>{type}</MenuItem>
                    ))}
                </Select>
            </FormControl>            
        </Box>      
    );
}