import React from "react";
import MyInput from "./UI/input/MyInput";
import Select from "./UI/select/Select";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(searchQuery) => setFilter({ ...filter, query: searchQuery.target.value })}
        placeholder="Поиск..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка по:"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
