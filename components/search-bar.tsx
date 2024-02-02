"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const onChange = () => {};

  // TODO: Add a control key to search

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        onChange={onChange}
        value={value}
        className="w-full md:w-[400px] pl-9 rounded-xl bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Elon Musk"
      />
    </div>
  );
};
