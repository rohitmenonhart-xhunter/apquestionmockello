import { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { SearchBar } from './components/SearchBar';
import { ErrorMessage } from './components/ErrorMessage';
import { questions } from './data/questions';
import { Question } from './types/question';

function App() {
  const [searchId, setSearchId] = useState('');
  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const found = questions.find(q => q.id.toLowerCase() === searchId.toLowerCase());
    if (found) {
      setQuestion(found);
      setError('');
    } else {
      setQuestion(null);
      setError('No question found with this ID');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Question Search</h1>
          <p className="text-muted-foreground">
            Enter a question ID to view its details
          </p>
        </div>

        <SearchBar 
          searchId={searchId}
          onSearchChange={setSearchId}
          onSearch={handleSearch}
        />

        <ErrorMessage message={error} />

        {question && <QuestionCard question={question} />}
      </div>
    </div>
  );
}

export default App;