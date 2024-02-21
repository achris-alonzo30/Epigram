"use client";

import Link from "next/link";
import Image from "next/image";
import { debounce } from "lodash";
import { useState, useEffect } from "react";

import { Search } from "lucide-react";

import {

  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";


type SearchBarProps = {
  allUsers: {
    id: string;
    username: string;
    profileImageUrl: string | null;
  }[] | null;
}

export const SearchBar = ({ allUsers }: SearchBarProps) => {
  // TODO: Add a control key to search
  // TODO: Add a debounce
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [previousSearchInput, setPreviousSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<
  { 
    id: string; 
    username: string; 
    profileImageUrl: string | null; 
  }[] | null
  >(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const debouncedFilterUsers = debounce((input: string) => {
    const users = allUsers?.filter(user =>
      user.username.toLowerCase().includes(input.toLowerCase())
    ) as { id: string; username: string; profileImageUrl: string | null }[] | null; // Type assertion
    setFilteredUsers(users);
  }, 300);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchInput(input);
    if (input.length < previousSearchInput.length) {
      // If the input length is decreasing, show previous results
      setFilteredUsers(allUsers?.filter(user =>
        user.username.toLowerCase().includes(input.toLowerCase())
      ) as { id: string; username: string; profileImageUrl: string | null }[] | null); // Type assertion
    } else {
      debouncedFilterUsers(input);
    }
  };
  return (
    <>
      <div role="button" onClick={() => setOpen(true)} className="relative group md:w-[400px] w-auto border rounded-xl p-2 flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-600">
        <div className="flex items-center gap-x-2">
          <Search className="h-4 w-4 text-zinc-600 group-hover:text-zinc-500" />
          <p className="text-sm text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300">Search Your Furry Friends...</p>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-md bg-zinc-100 dark:bg-zinc-600 px-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-300 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="Type their username..." onChangeCapture={handleSearchInputChange} />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup>
            {filteredUsers?.map((user) => (
              <CommandItem key={user.id}>
                <Link href={`/profile/${user.id}/user-profile`} className="flex flex-row items-center gap-x-2 hover:text-zinc-500">
                  <Image src={user.profileImageUrl!} alt="profile" width="20" height="20" className="rounded-full aspect-square object-cover" />
                  <p className="text-sm text-zinc-300">{user.username}</p>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
