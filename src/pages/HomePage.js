import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { CountryContext } from "../context/CountryState";
// import { useFetch } from "../hooks/useFetch";
import { CountryCard } from "../components/CountryCard";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";

const Homepage = () => {
  const { countries } = useContext(CountryContext);
  const [showingCountries, setShowingCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchInput, setSearchInput] = useState("");

  

  useEffect(() => {
    if (countries.length) {
      setShowingCountries(countries);
    }
  }, [countries]);

  const handleSortByName = useCallback(() => {
    if (sortOrder === "asc") {
      setShowingCountries(
        Array.from(showingCountries).sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      );
      setSortOrder("desc");
    } else {
      setShowingCountries(
        Array.from(showingCountries).sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        )
      );
      setSortOrder("asc");
    }
  }, [showingCountries, sortOrder]);

  const handleSearchInputChange = useCallback((e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  }, []);

  const filteredCountries = useMemo(() => {
    if (!searchInput) {
      return showingCountries;
    }
  
    return showingCountries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchInput.toLowerCase())
      // country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
  }, [showingCountries, searchInput]);

  const handleChangePage = useCallback((event, newPage) => {
    switch (newPage) {
      case "next":
        setPage(page + 1);
        break;
      case "prev":
        setPage(page - 1);
        break;
      default:
        setPage(newPage);
    }
  }, [page]);

  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // console.log(data)

  return (
    <div className="Home">
      <h1>Countries</h1>

      <div className="search">
        <TextField
          label="Search by name"
          value={searchInput}
          onChange={handleSearchInputChange}
        />

        <Button onClick={handleSortByName}>Sort by name</Button>
      </div>
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow style={{ background: "#362198" }}>
            {["Flag", "Name", "Region", "Population", "Language", "More"].map((header) => (
              <TableCell key={header} style={{ color: "#F2F2F2" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
          <TableBody>
            {filteredCountries
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((country) => (
                <CountryCard key={country.cca3} country={country} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={countries.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={itemsPerPage}
          rowsPerPageOptions={[5, 10, 25, { value: -1, label: "All" }]}
          onRowsPerPageChange={handleChangeItemsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Homepage;
