"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronsUpDown, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const POPULAR_LOCATIONS = [
  "Bangalore",
  "Mysore",
  "Mangalore",
  "Kerala",
  "Kochi",
  "Thrissur",
  "Trivandrum",
  "Chennai",
  "Coimbatore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi"
];

interface MultiSelectLocationProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export function MultiSelectLocation({ selected, onChange, placeholder = "Search cities or states..." }: MultiSelectLocationProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredLocations = POPULAR_LOCATIONS.filter(loc => 
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const toggleLocation = (loc: string) => {
    if (selected.includes(loc)) {
      onChange(selected.filter(s => s !== loc));
    } else {
      onChange([...selected, loc]);
    }
  };

  const removeLocation = (e: React.MouseEvent, loc: string) => {
    e.stopPropagation();
    onChange(selected.filter(s => s !== loc));
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div 
        className={cn(
          "min-h-12 w-full bg-slate-50 border rounded-xl flex flex-wrap items-center gap-2 px-3 py-2 cursor-text transition-colors",
          open ? "border-blue-400 ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-300"
        )}
        onClick={() => setOpen(true)}
      >
        <MapPin className="size-4 text-slate-400 shrink-0" />
        
        {selected.length > 0 ? (
          selected.map(loc => (
            <span key={loc} className="flex items-center gap-1 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-2.5 py-1 rounded-full shadow-sm">
              {loc}
              <button 
                type="button" 
                onClick={(e) => removeLocation(e, loc)}
                className="text-slate-400 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-full"
              >
                <X className="size-3" />
                <span className="sr-only">Remove {loc}</span>
              </button>
            </span>
          ))
        ) : null}
        
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={selected.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
        />

        <div className="ml-auto flex items-center gap-2 shrink-0">
          {selected.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange([]);
                setQuery("");
              }}
              className="text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 rounded-md hover:bg-slate-200 transition-colors"
            >
              Clear All
            </button>
          )}
          <ChevronsUpDown className="size-4 text-slate-400" />
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-50 animate-in fade-in zoom-in-95">
          <div className="max-h-[250px] overflow-y-auto p-2 scrollbar-thin">
            {filteredLocations.length > 0 ? (
              filteredLocations.map(loc => {
                const isSelected = selected.includes(loc);
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => toggleLocation(loc)}
                    className={cn(
                      "w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isSelected ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {loc}
                    {isSelected && <Check className="size-4 text-blue-600" />}
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-sm text-slate-500">
                No locations found matching "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
