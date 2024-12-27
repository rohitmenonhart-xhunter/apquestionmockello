import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchId: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ searchId, onSearchChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex space-x-2">
      <Input
        placeholder="Enter question ID (e.g., g-q1)"
        value={searchId}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-card"
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <Button onClick={onSearch}>
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </div>
  );
}