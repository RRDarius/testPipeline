import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

import SearchableItem from "./SearchableItem";

export default function SearchableItemList({ clothingList, onRemoveItem }) {
    return(
        <div>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {clothingList.map((item) => (
                        <SearchableItem key={item.id} item={item} onRemoveItem={onRemoveItem}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}