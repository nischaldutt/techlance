import { createContext, useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

const QueryCacheContext = createContext(null);

export function QueryCacheProvider({ children }) {
  const queryClient = useQueryClient();

  function saveQueryToCache(key, info) {
    return queryClient.setQueryData(key, (prevData) => {
      return info;
    });
  }

  function getQueryFromCache(key) {
    return queryClient.getQueryData(key);
  }

  function removeQueryFromCache(keys) {
    for (let key in keys) {
      queryClient.removeQueries({
        queryKey: key,
        exact: true,
      });
    }

    return;
  }

  return (
    <QueryCacheContext.Provider
      value={{
        saveQueryToCache,
        getQueryFromCache,
        removeQueryFromCache,
      }}
    >
      {children}
    </QueryCacheContext.Provider>
  );
}

export function useQueryCacheContext() {
  return useContext(QueryCacheContext);
}
