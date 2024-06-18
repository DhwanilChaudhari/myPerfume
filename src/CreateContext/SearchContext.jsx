import React, { createContext, useEffect, useState } from "react";

export const UserSearchContext = createContext;

const fileUrls = [
  "/src/Ui/Components/data.json",
  "/src/Ui/Components/datatwo.json",
  "/src/Ui/Components/datathree.json",
  "/src/Ui/Components/shopdata.json",
];
export default function SearchContext(Router, data) {
  let [searchText, setSearchText] = useState("");
  let [filteredData, setFilteredData] = useState(data);
  const [apiFlag, setApiFlag] = useState(false);

  const refetch = () => setApiFlag(!apiFlag);

  const fetchProductDataFromFiles = async (fileUrls) => {
    try {
      const fetchPromises = fileUrls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const results = await Promise.all(fetchPromises);
      return results.flat();
    } catch (error) {
      console.error("Error fetching data from files:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from multiple JSON files
        const allData = await fetchProductDataFromFiles(fileUrls);

        // Apply search on the merged data
        const filteredData = allData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [apiFlag, searchText]);
  return (
    <div>
      {" "}
      <SearchContext.Provider
        value={{ searchText, setSearchText, filteredData, refetch }}
      >
        {Router}
      </SearchContext.Provider>
    </div>
  );
}
