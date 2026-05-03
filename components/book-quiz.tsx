"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from "lucide-react"

interface BookQuizProps {
  bookId: number
  quiz: any[]
  points: number
}

export function BookQuiz({ bookId, quiz, points }: BookQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    setSelectedAnswer("")
    setShowResult(false)

    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Kiểm tra kiến thức</CardTitle>
        <CardDescription>
          Trả lời các câu hỏi để kiểm tra kiến thức của bạn. Bạn cần đạt ít nhất 70% câu đúng để nhận {points} điểm
          thưởng.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>
              Câu hỏi {currentQuestion + 1}/{quiz.length}
            </span>
            <span>
              Điểm: {score}/{currentQuestion}
            </span>
          </div>

          <Progress value={(currentQuestion / quiz.length) * 100} className="h-2" />

          <div className="p-4 rounded-lg bg-background">
            <h3 className="text-lg font-medium mb-4">{quiz[currentQuestion].question}</h3>

            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
              className="space-y-3"
              disabled={showResult}
            >
              {quiz[currentQuestion].options.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-2 rounded-lg border p-3 ${
                    showResult && option.id === quiz[currentQuestion].correctAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : showResult && option.id === selectedAnswer && option.id !== quiz[currentQuestion].correctAnswer
                        ? "border-red-500 bg-red-50 dark:bg-red-950"
                        : ""
                  }`}
                >
                  <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                  <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                  {showResult && option.id === quiz[currentQuestion].correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {showResult && option.id === selectedAnswer && option.id !== quiz[currentQuestion].correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showResult ? (
          <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full bg-green-600 hover:bg-green-700">
            Kiểm tra
          </Button>
        ) : (
          <Button onClick={handleNext} className="w-full bg-green-600 hover:bg-green-700">
            {currentQuestion < quiz.length - 1 ? "Câu tiếp theo" : "Hoàn thành"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
