"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Award, BookOpen } from "lucide-react"

// Dữ liệu câu hỏi cho từng cuốn sách
const bookQuizzes = {
  1: [
    {
      id: 1,
      question: "Truyện Kiều được viết bằng thể thơ gì?",
      options: [
        { id: "a", text: "Song thất lục bát" },
        { id: "b", text: "Lục bát" },
        { id: "c", text: "Thất ngôn bát cú" },
        { id: "d", text: "Tự do" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Truyện Kiều có bao nhiêu câu thơ?",
      options: [
        { id: "a", text: "2254 câu" },
        { id: "b", text: "3254 câu" },
        { id: "c", text: "4254 câu" },
        { id: "d", text: "5254 câu" },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question: "Ai là tác giả của Truyện Kiều?",
      options: [
        { id: "a", text: "Nguyễn Trãi" },
        { id: "b", text: "Nguyễn Du" },
        { id: "c", text: "Hồ Xuân Hương" },
        { id: "d", text: "Nguyễn Đình Chiểu" },
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      question: "Tên đầy đủ của nhân vật chính trong Truyện Kiều là gì?",
      options: [
        { id: "a", text: "Vương Thúy Kiều" },
        { id: "b", text: "Vương Thúy Vân" },
        { id: "c", text: "Vương Quan" },
        { id: "d", text: "Thúy Kiều" },
      ],
      correctAnswer: "a",
    },
    {
      id: 5,
      question: "Truyện Kiều được sáng tác vào khoảng thời gian nào?",
      options: [
        { id: "a", text: "Cuối thế kỷ 18, đầu thế kỷ 19" },
        { id: "b", text: "Giữa thế kỷ 19" },
        { id: "c", text: "Cuối thế kỷ 17, đầu thế kỷ 18" },
        { id: "d", text: "Đầu thế kỷ 20" },
      ],
      correctAnswer: "a",
    },
    {
      id: 6,
      question: "Câu đầu tiên của Truyện Kiều là gì?",
      options: [
        { id: "a", text: "Đau đớn thay phận đàn bà" },
        { id: "b", text: "Trăm năm trong cõi người ta" },
        { id: "c", text: "Cảo thơm lần giở trước đèn" },
        { id: "d", text: "Rằng năm Gia Tĩnh triều Minh" },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      question: "Kiều bán mình để cứu ai?",
      options: [
        { id: "a", text: "Mẹ và em gái" },
        { id: "b", text: "Cha và em trai" },
        { id: "c", text: "Cha và mẹ" },
        { id: "d", text: "Em trai và em gái" },
      ],
      correctAnswer: "b",
    },
    {
      id: 8,
      question: "Ai là người yêu đầu tiên của Kiều?",
      options: [
        { id: "a", text: "Thúc Sinh" },
        { id: "b", text: "Từ Hải" },
        { id: "c", text: "Kim Trọng" },
        { id: "d", text: "Sở Khanh" },
      ],
      correctAnswer: "c",
    },
    {
      id: 9,
      question: "Kiều làm nghề gì khi ở lầu xanh?",
      options: [
        { id: "a", text: "Ca kỹ" },
        { id: "b", text: "Thêu thùa" },
        { id: "c", text: "Dạy học" },
        { id: "d", text: "Viết thư" },
      ],
      correctAnswer: "a",
    },
    {
      id: 10,
      question: "Cuối cùng Kiều đoàn tụ với ai?",
      options: [
        { id: "a", text: "Thúc Sinh" },
        { id: "b", text: "Từ Hải" },
        { id: "c", text: "Kim Trọng" },
        { id: "d", text: "Gia đình" },
      ],
      correctAnswer: "c",
    },
  ],
  2: [
    {
      id: 1,
      question: "Ai là tác giả của tiểu thuyết Số Đỏ?",
      options: [
        { id: "a", text: "Nam Cao" },
        { id: "b", text: "Vũ Trọng Phụng" },
        { id: "c", text: "Ngô Tất Tố" },
        { id: "d", text: "Nguyễn Công Hoan" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Số Đỏ được xuất bản vào năm nào?",
      options: [
        { id: "a", text: "1930" },
        { id: "b", text: "1936" },
        { id: "c", text: "1939" },
        { id: "d", text: "1945" },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question: "Nhân vật chính trong Số Đỏ là ai?",
      options: [
        { id: "a", text: "Xuân Tóc Đỏ" },
        { id: "b", text: "Văn Minh" },
        { id: "c", text: "Hạ Đen" },
        { id: "d", text: "Thu Tóc Vàng" },
      ],
      correctAnswer: "a",
    },
    {
      id: 4,
      question: "Xuân Tóc Đỏ ban đầu làm nghề gì?",
      options: [
        { id: "a", text: "Thợ may" },
        { id: "b", text: "Bán báo, đánh giày" },
        { id: "c", text: "Thợ mộc" },
        { id: "d", text: "Phu kéo xe" },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      question: "Số Đỏ là tác phẩm thuộc thể loại nào?",
      options: [
        { id: "a", text: "Tiểu thuyết lãng mạn" },
        { id: "b", text: "Tiểu thuyết hiện thực phê phán" },
        { id: "c", text: "Tiểu thuyết lịch sử" },
        { id: "d", text: "Tiểu thuyết trinh thám" },
      ],
      correctAnswer: "b",
    },
    {
      id: 6,
      question: "Số Đỏ phê phán điều gì trong xã hội Việt Nam thời bấy giờ?",
      options: [
        { id: "a", text: "Sự nghèo đói của người dân" },
        { id: "b", text: "Sự áp bức của thực dân Pháp" },
        { id: "c", text: "Lối sống Âu hóa mù quáng của tầng lớp tư sản" },
        { id: "d", text: "Sự lạc hậu của nông thôn Việt Nam" },
      ],
      correctAnswer: "c",
    },
    {
      id: 7,
      question: "Ai là người đã giúp Xuân Tóc Đỏ trở thành huấn luyện viên thể thao?",
      options: [
        { id: "a", text: "Bà Phó Đoan" },
        { id: "b", text: "Ông Văn Minh" },
        { id: "c", text: "Cụ Hồng" },
        { id: "d", text: "Bà Phó Đoan và ông Văn Minh" },
      ],
      correctAnswer: "d",
    },
    {
      id: 8,
      question: "Xuân Tóc Đỏ đã làm gì để được nhận vào làm việc tại nhà ông Văn Minh?",
      options: [
        { id: "a", text: "Cứu ông Văn Minh khỏi tai nạn" },
        { id: "b", text: "Cứu con chó của bà Phó Đoan" },
        { id: "c", text: "Giúp ông Văn Minh trong công việc kinh doanh" },
        { id: "d", text: "Xin việc thông qua người quen" },
      ],
      correctAnswer: "b",
    },
    {
      id: 9,
      question: "Phong trào nào được châm biếm trong Số Đỏ?",
      options: [
        { id: "a", text: "Phong trào Duy Tân" },
        { id: "b", text: "Phong trào Đông Du" },
        { id: "c", text: "Phong trào Âu hóa và thể thao" },
        { id: "d", text: "Phong trào Xô Viết Nghệ Tĩnh" },
      ],
      correctAnswer: "c",
    },
    {
      id: 10,
      question: "Kết thúc của Xuân Tóc Đỏ trong tiểu thuyết Số Đỏ là gì?",
      options: [
        { id: "a", text: "Trở thành một người giàu có" },
        { id: "b", text: "Kết hôn với con gái một gia đình quyền quý" },
        { id: "c", text: "Quay trở lại cuộc sống nghèo khổ" },
        { id: "d", text: "Bị bắt vì tội lừa đảo" },
      ],
      correctAnswer: "b",
    },
  ],
  3: [
    {
      id: 1,
      question: "Ai là tác giả của tiểu thuyết Tắt Đèn?",
      options: [
        { id: "a", text: "Nam Cao" },
        { id: "b", text: "Vũ Trọng Phụng" },
        { id: "c", text: "Ngô Tất Tố" },
        { id: "d", text: "Nguyễn Công Hoan" },
      ],
      correctAnswer: "c",
    },
    {
      id: 2,
      question: "Tắt Đèn được xuất bản vào năm nào?",
      options: [
        { id: "a", text: "1930" },
        { id: "b", text: "1936" },
        { id: "c", text: "1939" },
        { id: "d", text: "1945" },
      ],
      correctAnswer: "c",
    },
    {
      id: 3,
      question: "Nhân vật chính trong Tắt Đèn là ai?",
      options: [
        { id: "a", text: "Chị Dậu" },
        { id: "b", text: "Anh Dậu" },
        { id: "c", text: "Ông Lý trưởng" },
        { id: "d", text: "Cai lệ" },
      ],
      correctAnswer: "a",
    },
    {
      id: 4,
      question: "Tắt Đèn phản ánh vấn đề gì trong xã hội Việt Nam thời bấy giờ?",
      options: [
        { id: "a", text: "Nạn mù chữ" },
        { id: "b", text: "Chế độ thuế khóa hà khắc" },
        { id: "c", text: "Phong trào Âu hóa" },
        { id: "d", text: "Nạn cờ bạc" },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      question: "Chị Dậu phải làm gì để có tiền nộp sưu thuế?",
      options: [
        { id: "a", text: "Bán ruộng" },
        { id: "b", text: "Vay nợ" },
        { id: "c", text: "Bán tài sản và con" },
        { id: "d", text: "Đi ăn xin" },
      ],
      correctAnswer: "c",
    },
    {
      id: 6,
      question: "Tắt Đèn thuộc thể loại văn học nào?",
      options: [
        { id: "a", text: "Văn học lãng mạn" },
        { id: "b", text: "Văn học hiện thực phê phán" },
        { id: "c", text: "Văn học lịch sử" },
        { id: "d", text: "Văn học trinh thám" },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      question: "Tình trạng của anh Dậu trong truyện là gì?",
      options: [
        { id: "a", text: "Khỏe mạnh" },
        { id: "b", text: "Đau ốm" },
        { id: "c", text: "Đi làm xa" },
        { id: "d", text: "Đã mất" },
      ],
      correctAnswer: "b",
    },
    {
      id: 8,
      question: "Chị Dậu đã bán con cho ai?",
      options: [
        { id: "a", text: "Ông Lý trưởng" },
        { id: "b", text: "Cai lệ" },
        { id: "c", text: "Bà Ba" },
        { id: "d", text: "Ông Nghị" },
      ],
      correctAnswer: "c",
    },
    {
      id: 9,
      question: "Tác phẩm Tắt Đèn thể hiện phẩm chất gì của người phụ nữ nông dân Việt Nam?",
      options: [
        { id: "a", text: "Yếu đuối, cam chịu" },
        { id: "b", text: "Cần cù, kiên cường, giàu lòng tự trọng" },
        { id: "c", text: "Thông minh, mưu trí" },
        { id: "d", text: "Giàu có, hào phóng" },
      ],
      correctAnswer: "b",
    },
    {
      id: 10,
      question: "Ý nghĩa của nhan đề 'Tắt Đèn' là gì?",
      options: [
        { id: "a", text: "Cuộc sống tối tăm, không có lối thoát của người nông dân" },
        { id: "b", text: "Sự mất điện thường xuyên ở nông thôn" },
        { id: "c", text: "Phong tục tắt đèn khi đi ngủ" },
        { id: "d", text: "Biện pháp tiết kiệm của người nghèo" },
      ],
      correctAnswer: "a",
    },
  ],
  4: [
    {
      id: 1,
      question: "Ai là tác giả của Dế Mèn Phiêu Lưu Ký?",
      options: [
        { id: "a", text: "Tô Hoài" },
        { id: "b", text: "Nguyễn Nhật Ánh" },
        { id: "c", text: "Võ Quảng" },
        { id: "d", text: "Phạm Hổ" },
      ],
      correctAnswer: "a",
    },
    {
      id: 2,
      question: "Dế Mèn Phiêu Lưu Ký được xuất bản lần đầu vào năm nào?",
      options: [
        { id: "a", text: "1935" },
        { id: "b", text: "1941" },
        { id: "c", text: "1945" },
        { id: "d", text: "1950" },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question: "Nhân vật chính trong Dế Mèn Phiêu Lưu Ký là ai?",
      options: [
        { id: "a", text: "Dế Choắt" },
        { id: "b", text: "Dế Trũi" },
        { id: "c", text: "Dế Mèn" },
        { id: "d", text: "Dế Dũi" },
      ],
      correctAnswer: "c",
    },
    {
      id: 4,
      question: "Tính cách ban đầu của Dế Mèn như thế nào?",
      options: [
        { id: "a", text: "Nhút nhát, sợ sệt" },
        { id: "b", text: "Kiêu căng, tự phụ" },
        { id: "c", text: "Hiền lành, tốt bụng" },
        { id: "d", text: "Lười biếng, ích kỷ" },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      question: "Sự kiện nào đã làm thay đổi tính cách của Dế Mèn?",
      options: [
        { id: "a", text: "Gặp Dế Choắt" },
        { id: "b", text: "Gặp Bọ Ngựa" },
        { id: "c", text: "Cái chết của Dế Choắt" },
        { id: "d", text: "Cuộc chiến với nhà Ong" },
      ],
      correctAnswer: "c",
    },
    {
      id: 6,
      question: "Dế Mèn đã gặp những người bạn nào trong cuộc phiêu lưu?",
      options: [
        { id: "a", text: "Châu Chấu, Bọ Ngựa, Cào Cào" },
        { id: "b", text: "Chuồn Chuồn, Bọ Ngựa, Ếch" },
        { id: "c", text: "Châu Chấu, Chuồn Chuồn, Ếch" },
        { id: "d", text: "Châu Chấu, Chuồn Chuồn, Bọ Ngựa" },
      ],
      correctAnswer: "c",
    },
    {
      id: 7,
      question: "Dế Mèn và các bạn đã đi đâu trong cuộc phiêu lưu?",
      options: [
        { id: "a", text: "Lên núi cao" },
        { id: "b", text: "Xuống biển sâu" },
        { id: "c", text: "Vào rừng rậm" },
        { id: "d", text: "Tất cả các đáp án trên" },
      ],
      correctAnswer: "d",
    },
    {
      id: 8,
      question: "Thông điệp chính của Dế Mèn Phiêu Lưu Ký là gì?",
      options: [
        { id: "a", text: "Sự trưởng thành qua những thử thách" },
        { id: "b", text: "Tình yêu thiên nhiên" },
        { id: "c", text: "Tình bạn và lòng dũng cảm" },
        { id: "d", text: "Tất cả các đáp án trên" },
      ],
      correctAnswer: "d",
    },
    {
      id: 9,
      question: "Dế Mèn Phiêu Lưu Ký thuộc thể loại văn học nào?",
      options: [
        { id: "a", text: "Truyện ngụ ngôn" },
        { id: "b", text: "Truyện cổ tích" },
        { id: "c", text: "Truyện đồng thoại" },
        { id: "d", text: "Truyện lịch sử" },
      ],
      correctAnswer: "c",
    },
    {
      id: 10,
      question: "Kết thúc của Dế Mèn trong truyện như thế nào?",
      options: [
        { id: "a", text: "Trở về quê hương" },
        { id: "b", text: "Tiếp tục phiêu lưu" },
        { id: "c", text: "Hy sinh vì bạn bè" },
        { id: "d", text: "Trở thành thủ lĩnh" },
      ],
      correctAnswer: "a",
    },
  ],
  5: [
    {
      id: 1,
      question: "Ai là tác giả của Nhật Ký Trong Tù?",
      options: [
        { id: "a", text: "Tố Hữu" },
        { id: "b", text: "Hồ Chí Minh" },
        { id: "c", text: "Xuân Diệu" },
        { id: "d", text: "Nguyễn Đình Thi" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Nhật Ký Trong Tù được sáng tác trong khoảng thời gian nào?",
      options: [
        { id: "a", text: "1930-1931" },
        { id: "b", text: "1942-1943" },
        { id: "c", text: "1945-1946" },
        { id: "d", text: "1954-1955" },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question: "Nhật Ký Trong Tù được viết bằng ngôn ngữ gì?",
      options: [
        { id: "a", text: "Tiếng Việt" },
        { id: "b", text: "Chữ Nôm" },
        { id: "c", text: "Chữ Hán" },
        { id: "d", text: "Tiếng Pháp" },
      ],
      correctAnswer: "c",
    },
    {
      id: 4,
      question: "Nhật Ký Trong Tù gồm bao nhiêu bài thơ?",
      options: [
        { id: "a", text: "100 bài" },
        { id: "b", text: "121 bài" },
        { id: "c", text: "134 bài" },
        { id: "d", text: "150 bài" },
      ],
      correctAnswer: "c",
    },
    {
      id: 5,
      question: "Thể thơ chủ yếu được sử dụng trong Nhật Ký Trong Tù là gì?",
      options: [
        { id: "a", text: "Thơ lục bát" },
        { id: "b", text: "Thơ tự do" },
        { id: "c", text: "Thơ Đường luật" },
        { id: "d", text: "Thơ bốn chữ" },
      ],
      correctAnswer: "c",
    },
    {
      id: 6,
      question: "Nhật Ký Trong Tù được sáng tác trong hoàn cảnh nào?",
      options: [
        { id: "a", text: "Khi tác giả đang ở nước ngoài" },
        { id: "b", text: "Khi tác giả bị giam cầm trong nhà tù ở Trung Quốc" },
        { id: "c", text: "Khi tác giả đang hoạt động cách mạng" },
        { id: "d", text: "Khi tác giả đang ở chiến khu" },
      ],
      correctAnswer: "b",
    },
    {
      id: 7,
      question: "Tư tưởng chủ đạo trong Nhật Ký Trong Tù là gì?",
      options: [
        { id: "a", text: "Tinh thần lạc quan, yêu đời" },
        { id: "b", text: "Nỗi buồn, sự cô đơn" },
        { id: "c", text: "Sự căm thù, giận dữ" },
        { id: "d", text: "Sự bi quan, chán nản" },
      ],
      correctAnswer: "a",
    },
    {
      id: 8,
      question: "Nhật Ký Trong Tù được xuất bản lần đầu vào năm nào?",
      options: [
        { id: "a", text: "1945" },
        { id: "b", text: "1950" },
        { id: "c", text: "1960" },
        { id: "d", text: "1975" },
      ],
      correctAnswer: "c",
    },
    {
      id: 9,
      question: "Đâu là một trong những chủ đề chính trong Nhật Ký Trong Tù?",
      options: [
        { id: "a", text: "Tình yêu lứa đôi" },
        { id: "b", text: "Tình yêu quê hương, đất nước" },
        { id: "c", text: "Cuộc sống đô thị" },
        { id: "d", text: "Công nghiệp hóa" },
      ],
      correctAnswer: "b",
    },
    {
      id: 10,
      question: "Giá trị của Nhật Ký Trong Tù là gì?",
      options: [
        { id: "a", text: "Giá trị nghệ thuật" },
        { id: "b", text: "Giá trị tư tưởng" },
        { id: "c", text: "Giá trị lịch sử" },
        { id: "d", text: "Tất cả các đáp án trên" },
      ],
      correctAnswer: "d",
    },
  ],
}

// Dữ liệu sách
const booksData = {
  1: {
    title: "Truyện Kiều",
    author: "Nguyễn Du",
    points: 100,
  },
  2: {
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    points: 80,
  },
  3: {
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    points: 80,
  },
  4: {
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    points: 70,
  },
  5: {
    title: "Nhật Ký Trong Tù",
    author: "Hồ Chí Minh",
    points: 60,
  },
}

export default function BookCompletePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [earnedPoints, setEarnedPoints] = useState(0)

  // Lấy ID sách và dữ liệu sách
  const bookId = Number.parseInt(params.id)
  const book = booksData[bookId as keyof typeof booksData] || booksData[1]

  // Lấy câu hỏi cho sách
  const questions = bookQuizzes[bookId as keyof typeof bookQuizzes] || bookQuizzes[1]

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    setSelectedAnswer("")
    setShowResult(false)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Tính điểm thưởng dựa trên số câu đúng
      let points = 0
      const correctAnswers = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)

      if (correctAnswers === 10) {
        points = book.points // 100%
      } else if (correctAnswers === 9) {
        points = Math.floor(book.points / 2) // 50%
      } else if (correctAnswers >= 8) {
        points = Math.floor(book.points / 3) // 33%
      }

      setEarnedPoints(points)
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

  if (quizCompleted) {
    const passedQuiz = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0) >= 8 // 8/10 để đạt

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-10 max-w-3xl">
          <Card className="bg-muted">
            <CardHeader className="text-center">
              <CardTitle>Kết quả kiểm tra</CardTitle>
              <CardDescription>Bạn đã hoàn thành bài kiểm tra về {book.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center p-6">
                {passedQuiz ? (
                  <>
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-center">Chúc mừng!</h3>
                    <p className="text-center">
                      Bạn đã vượt qua bài kiểm tra với số điểm{" "}
                      {score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)}/{questions.length}
                    </p>
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg text-center">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="font-bold">Bạn đã nhận được {earnedPoints} điểm!</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Điểm thưởng đã được thêm vào tài khoản của bạn
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="h-16 w-16 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-center">Rất tiếc!</h3>
                    <p className="text-center">
                      Bạn chưa vượt qua bài kiểm tra. Số điểm của bạn là{" "}
                      {score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)}/{questions.length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Bạn cần đạt ít nhất 8/{questions.length} câu đúng để nhận điểm thưởng
                    </p>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button onClick={resetQuiz} variant="outline">
                Làm lại bài kiểm tra
              </Button>
              <Button onClick={() => router.push(`/books/${bookId}`)} className="bg-green-600 hover:bg-green-700">
                <BookOpen className="mr-2 h-4 w-4" />
                Quay lại trang sách
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10 max-w-3xl">
        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Kiểm tra kiến thức - {book.title}</CardTitle>
            <CardDescription>
              Trả lời các câu hỏi để kiểm tra kiến thức của bạn. Bạn cần đạt ít nhất 8/10 câu đúng để nhận điểm thưởng.
              <br />
              8/10 câu đúng: {Math.floor(book.points / 3)} điểm
              <br />
              9/10 câu đúng: {Math.floor(book.points / 2)} điểm
              <br />
              10/10 câu đúng: {book.points} điểm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>
                  Câu hỏi {currentQuestion + 1}/{questions.length}
                </span>
                <span>
                  Điểm: {score}/{currentQuestion}
                </span>
              </div>

              <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />

              <div className="p-4 rounded-lg bg-background">
                <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>

                <RadioGroup
                  value={selectedAnswer}
                  onValueChange={setSelectedAnswer}
                  className="space-y-3"
                  disabled={showResult}
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center space-x-2 rounded-lg border p-3 ${
                        showResult && option.id === questions[currentQuestion].correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : showResult &&
                              option.id === selectedAnswer &&
                              option.id !== questions[currentQuestion].correctAnswer
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : ""
                      }`}
                    >
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                      {showResult && option.id === questions[currentQuestion].correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {showResult &&
                        option.id === selectedAnswer &&
                        option.id !== questions[currentQuestion].correctAnswer && (
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
              <Button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Kiểm tra
              </Button>
            ) : (
              <Button onClick={handleNext} className="w-full bg-green-600 hover:bg-green-700">
                {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
