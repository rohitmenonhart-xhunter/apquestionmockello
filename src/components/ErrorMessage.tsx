interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  
  return (
    <div className="p-4 bg-destructive/10 text-destructive rounded-md text-center">
      {message}
    </div>
  );
}