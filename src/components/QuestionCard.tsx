import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Question } from "@/types/question";
import { Brain, CheckCircle2, CircleDot } from "lucide-react";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="w-full bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-primary" />
          <span className="font-semibold">{question.id}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={question.difficulty === 'easy' ? 'default' : question.difficulty === 'medium' ? 'secondary' : 'destructive'}>
            {question.difficulty}
          </Badge>
          <Badge variant="outline">{question.domain}</Badge>
          <Badge variant="outline">{question.subDomain}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-md ${
                option === question.correctAnswer
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-muted'
              }`}
            >
              {option === question.correctAnswer ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <CircleDot className="w-4 h-4" />
              )}
              <span>{option}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-muted rounded-md">
          <p className="font-medium text-sm text-muted-foreground">
            {question.explanation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}