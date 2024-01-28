"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const onChange = () => {};

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        onChange={onChange}
        value={value}
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Elon Musk"
      />
    </div>
  );
};
