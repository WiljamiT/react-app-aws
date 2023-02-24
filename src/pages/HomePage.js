import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { CountryContext } from '../context/CountryState';
import { useFetch } from '../hooks/useFetch';

import { CountryCard } from '../components/CountryCard';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TextField,
    Button
} from "@mui/material";

const Homepage = () => {
    const { countries, setCountries } = useContext(CountryContext);
    const [showingCountries, setShowingCountries] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchInput, setSearchInput] = useState('');

    const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');

    useEffect(() => {
        if (data) {
            setCountries(data);
        }
    }, [data, setCountries]);

    useEffect(() => {
        setShowingCountries(countries);
    }, [countries]);

    const handleSortByName = () => {
        if (sortOrder === 'asc') {
            setShowingCountries([...showingCountries].sort((a, b) => a.name.common.localeCompare(b.name.common)));
            setSortOrder('desc');
        } else {
            setShowingCountries([...showingCountries].sort((a, b) => b.name.common.localeCompare(a.name.common)));
            setSortOrder('asc');
        }
    };

    const handleSearchInputChange = useCallback((e) => {
        setSearchInput(e.target.value);
    }, []);

    const filteredCountries = useMemo(() => {
        if (!searchInput) {
            return showingCountries;
        }

        return showingCountries.filter((country) =>
            country.name.common.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [showingCountries, searchInput]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangeItemsPerPage = (event) => {
        setItemsPerPage(parseInt(event.target.value));
        setPage(0);
    };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data)

  return (
    <div>
      <h1>Countries</h1>
      <TextField label="Search by name" value={searchInput} onChange={handleSearchInputChange} />
      <Button onClick={handleSortByName}>Sort by name</Button>
      <TableContainer>
        <Table>
        <TableHead>
             <TableRow>
               <TableCell>Flag</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Region</TableCell>
               <TableCell>Population</TableCell>
               <TableCell>Language</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
          {filteredCountries.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
          </TableBody>
        </Table>
        <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={itemsPerPage}
            rowsPerPageOptions={[5, 10, 25, { value: -1, label: 'All' }]}
            onRowsPerPageChange={handleChangeItemsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Homepage;