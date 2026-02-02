import React, { useState } from 'react'

const DataDisplay = ({ data }) => {
    const [sortBy, setSortBy] = useState("name");
    const [ascendingSort, setAscendingSort] = useState(true);
    const [search, setSearch] = useState("");

    const setSorting = (columnName) => {
        if (sortBy !== columnName) {
            setSortBy(columnName);
            setAscendingSort(true);
        } else {
            setAscendingSort(!ascendingSort);
        }
    }

    const sortData = (data) => {
        if (!data) return [];

        if (["name", "symbol"].includes(sortBy)) {
            return [...data].sort((a, b) =>
            ascendingSort
                ? a[sortBy].localeCompare(b[sortBy])
                : b[sortBy].localeCompare(a[sortBy])
            );
        }

        if (["year", "month", "week", "day"].includes(sortBy)) {
            return [...data].sort((a, b) =>
            ascendingSort
                ? a.change_percent[sortBy] - b.change_percent[sortBy]
                : b.change_percent[sortBy] - a.change_percent[sortBy]
            );
        }

        if (sortBy === "price_current") {
            return [...data].sort((a, b) =>
            ascendingSort
                ? a.price_current - b.price_current
                : b.price_current - a.price_current
            );
        }

        return data;
    };

    const sortedData = sortData(data);

    const sortArrow = (column) => {
        if (sortBy !== column) return null;
            return ascendingSort ? " ▲" : " ▼";
    };

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th onClick={() => setSorting("name")}>
                    Name{sortArrow("name")}
                    </th>

                    <th onClick={() => setSorting("symbol")}>
                    Code{sortArrow("symbol")}
                    </th>

                    <th onClick={() => setSorting("year")}>
                    1Y{sortArrow("year")}
                    </th>

                    <th onClick={() => setSorting("month")}>
                    1M{sortArrow("month")}
                    </th>

                    <th onClick={() => setSorting("week")}>
                    1W{sortArrow("week")}
                    </th>

                    <th onClick={() => setSorting("day")}>
                    1D{sortArrow("day")}
                    </th>

                    <th onClick={() => setSorting("price_current")}>
                    Price{sortArrow("price_current")}
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map(e => (
                    <tr key={e.symbol}>
                        <td>{e.name}</td>
                        <td>{e.symbol}</td>
                        <td>{e.change_percent.year}</td>
                        <td>{e.change_percent.month}</td>
                        <td>{e.change_percent.week}</td>
                        <td>{e.change_percent.day}</td>
                        <td>{e.price_current}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default DataDisplay