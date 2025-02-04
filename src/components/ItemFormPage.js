import { useState } from 'react';
import { 
    Autocomplete, 
    TextField, 
    FormControl, 
    InputLabel,
    Select,
    MenuItem,
    Stack
} from "@mui/material";
import { Type, Gender, Size, Condition } from "./constants/const";

export default function ItemFormPage({ item }) {
    let [typeStateValue, setTypeState] = useState(item == null ? '' : item.type);
    let [genderStateValue, setGenderState] = useState(item == null ? '' : item.gender);
    let [sizeStateValue, setSizeState] = useState(item == null ? '' : item.size);
    let [conditionStateValue, setConditionState] = useState(item == null ? '' : item.condition);
    let [brandStateValue, setBrandState] = useState(item == null ? '' : item.brand);
    let [colorStateValye, setColorState] = useState(item == null ? '' : item.color);

    function handleTypeAutocomplete(event) {
        console.log(event);
        setTypeState(Type[Object.keys(Type)[event.target.value]]);
    }

    function handleGenderSelect(event) {
        setGenderState(event.target.value);
    }

    function handleSizeSelect(event) {
        setSizeState(event.target.value);
    }

    function handleConditionSelect(event) {
        setConditionState(event.target.value);
    }

    function handleBrandSelect(event) {
        setBrandState(event.target.value);
    }

    function handleColorSelect(event) {
        setColorState(event.target.value);
    }

    return(
        <Stack 
            spacing={2} 
            fullWidth 
            pt='2%'
            pr='5%'
            pl='5%'
        >
            <Autocomplete 
                disablePortal
                options={Object.values(Type)}
                value={typeStateValue}
                renderInput={(params) => <TextField {...params} label="Clothing Type" />}
                onChange={handleTypeAutocomplete}
            />
            <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
                <Select
                    labelId='gender-select-field'
                    label="Gender"
                    value={genderStateValue}
                    onChange={handleGenderSelect}
                >
                    {Object.keys(Gender).map((genderType) => (
                            <MenuItem value={genderType} key={genderType}>{Gender[genderType]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel>Size</InputLabel>
                <Select
                    labelId='size-select-field'
                    label="Size"
                    value={sizeStateValue}
                    onChange={handleSizeSelect}
                >
                    {Object.keys(Size).map((sizes) => (
                            <MenuItem value={sizes} key={sizes}>{Size[sizes]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel>Condition</InputLabel>
                <Select
                    labelId='condition-select-field'
                    label="condition"
                    value={conditionStateValue}
                    onChange={handleConditionSelect}
                >
                    {Object.keys(Condition).map((conditionLevel) => (
                            <MenuItem value={conditionLevel} key={conditionLevel}>{Condition[conditionLevel]}</MenuItem>
                    ))}               
                </Select>
            </FormControl>
            <TextField id="brand-text-field" label="Brand" variant="outlined" onChange={handleBrandSelect} value={brandStateValue}/>
            <TextField id="color-text-field" label="Color" variant="outlined" onChange={handleColorSelect} value={colorStateValye}/>
        </Stack>
    );
}