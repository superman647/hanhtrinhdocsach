import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Star, Award } from "lucide-react"
import { BookQuiz } from "@/components/book-quiz"
import { RelatedBooks } from "@/components/related-books"
import { BookCover } from "@/components/book-cover"

// Mock data for books
const booksData = [
  {
    id: 1,
    title: "Truyện Kiều",
    author: "Nguyễn Du",
    coverUrl: "/images/books/truyen-kieu.png",
    category: "Văn học cổ điển",
    description: `Truyện Kiều là một tác phẩm văn học kinh điển của Việt Nam, được sáng tác bởi đại thi hào Nguyễn Du vào đầu thế kỷ 19. Tác phẩm kể về cuộc đời của nàng Kiều (Thúy Kiều) với nhiều biến cố, thăng trầm.

Truyện Kiều được viết bằng thể thơ lục bát, gồm 3.254 câu. Tác phẩm đã trở thành một phần quan trọng trong nền văn học Việt Nam và được coi là một trong những kiệt tác văn học của dân tộc.

Nội dung tác phẩm kể về cuộc đời của Thúy Kiều, một người con gái tài sắc vẹn toàn nhưng gặp nhiều bất hạnh trong cuộc đời. Vì hoàn cảnh gia đình, nàng phải bán mình để cứu cha và em trai khỏi tù tội. Từ đó, Kiều trải qua nhiều biến cố, lưu lạc qua nhiều nơi và gặp nhiều người khác nhau.

Truyện Kiều không chỉ là câu chuyện về số phận của một người phụ nữ mà còn phản ánh nhiều vấn đề xã hội thời phong kiến như tham nhũng, bất công và áp bức. Tác phẩm cũng thể hiện quan niệm về nhân quả, về tài mệnh tương đố trong cuộc sống.

Với ngôn ngữ tinh tế, hình ảnh sống động và nội dung sâu sắc, Truyện Kiều đã trở thành một tác phẩm bất hủ trong nền văn học Việt Nam và được nhiều thế hệ độc giả yêu thích.`,
    rating: 4.9,
    period: "Trước 1945",
    pages: 150,
    readTime: "3 giờ",
    publishDate: "1820",
    language: "Tiếng Việt",
    points: 100,
    challenges: [
      {
        id: 1,
        title: "Đọc một tác phẩm cổ điển",
        points: 100,
      },
      {
        id: 2,
        title: "Hoàn thành 100 trang",
        points: 30,
      },
    ],
    quiz: [
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
  },
  {
    id: 2,
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    coverUrl: "/images/books/so-do.png",
    category: "Tiểu thuyết",
    description: `Số Đỏ là tiểu thuyết nổi tiếng của nhà văn Vũ Trọng Phụng, được xuất bản năm 1936. Đây là một tác phẩm văn học hiện thực phê phán sắc bén, châm biếm sâu cay về xã hội Việt Nam thời kỳ Pháp thuộc.

Tác phẩm kể về nhân vật chính Xuân - biệt danh là Xuân Tóc Đỏ, một thanh niên nghèo khổ, lưu manh nhưng lanh lợi. Bằng sự may mắn và thủ đoạn, Xuân Tóc Đỏ từ một kẻ bán báo, đánh giày vô học đã trở thành một nhân vật có địa vị trong xã hội thượng lưu Hà Nội thời bấy giờ.

Thông qua câu chuyện về sự thăng tiến của Xuân Tóc Đỏ, tác giả đã phơi bày bộ mặt giả dối, lố bịch của tầng lớp tư sản, tiểu tư sản thành thị đang chạy theo lối sống Âu hóa một cách mù quáng. Tác phẩm cũng phê phán mạnh mẽ sự suy đồi đạo đức, sự lố bịch trong phong trào Âu hóa và thể thao, cùng với sự giả dối của báo chí và văn chương thời bấy giờ.

Với lối viết hài hước, châm biếm sâu sắc, Số Đỏ đã trở thành một tác phẩm kinh điển của văn học Việt Nam hiện đại, được nhiều thế hệ độc giả yêu thích và đánh giá cao.`,
    rating: 4.7,
    period: "Trước 1945",
    pages: 200,
    readTime: "4 giờ",
    publishDate: "1936",
    language: "Ti���ng Việt",
    points: 80,
    challenges: [
      {
        id: 1,
        title: "Đọc một tác phẩm cổ điển",
        points: 100,
      },
      {
        id: 2,
        title: "Hoàn thành 100 trang",
        points: 30,
      },
    ],
    quiz: [
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
  },
  {
    id: 3,
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    coverUrl: "/images/books/tat-den.png",
    category: "Tiểu thuyết",
    description: `Tắt Đèn là tiểu thuyết nổi tiếng của nhà văn Ngô Tất Tố, xuất bản năm 1939. Đây là một trong những tác phẩm tiêu biểu của văn học Việt Nam hiện đại, phản ánh chân thực cuộc sống cơ cực của người nông dân Việt Nam dưới ách thống trị của thực dân Pháp và phong kiến.

Tác phẩm kể về cuộc đời đau khổ của chị Dậu và gia đình - một điển hình cho số phận của người nông dân Việt Nam thời bấy giờ. Gia đình chị Dậu vốn nghèo khổ, lại gặp phải cảnh chồng đau ốm, con nhỏ, trong khi vẫn phải gánh nặng sưu thuế. Để có tiền nộp sưu thuế, chị Dậu phải bán dần tài sản, thậm chí phải bán cả con.

Thông qua câu chuyện của gia đình chị Dậu, tác giả đã tố cáo mạnh mẽ chế độ thuế khóa hà khắc của thực dân Pháp, sự tàn bạo của bọn cường hào địa chủ, và phơi bày nỗi thống khổ của người nông dân Việt Nam thời bấy giờ.

Với ngòi bút hiện thực sắc bén, Ngô Tất Tố đã khắc họa thành công hình ảnh người phụ nữ nông dân Việt Nam với những phẩm chất cao đẹp: cần cù, chịu thương chịu khó, kiên cường, giàu lòng tự trọng và tinh thần phản kháng.

Tắt Đèn đã trở thành một tác phẩm kinh điển của văn học Việt Nam, được đưa vào chương trình giảng dạy trong nhà trường và để lại ấn tượng sâu sắc trong lòng nhiều thế hệ độc giả.`,
    rating: 4.6,
    period: "Trước 1945",
    pages: 180,
    readTime: "3.5 giờ",
    publishDate: "1939",
    language: "Tiếng Việt",
    points: 80,
    challenges: [
      {
        id: 1,
        title: "Đọc một tác phẩm cổ điển",
        points: 100,
      },
      {
        id: 2,
        title: "Hoàn thành 100 trang",
        points: 30,
      },
    ],
    quiz: [
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
  },
  {
    id: 4,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    coverUrl: "/images/books/de-men-phieu-luu-ky.png",
    category: "Văn học thiếu nhi",
    description: `Dế Mèn Phiêu Lưu Ký là tác phẩm văn học thiếu nhi nổi tiếng của nhà văn Tô Hoài, được xuất bản lần đầu vào năm 1941. Đây là một trong những tác phẩm kinh điển của văn học Việt Nam dành cho thiếu nhi, đã được dịch ra nhiều thứ tiếng và được nhiều thế hệ độc giả yêu thích.

Tác phẩm kể về cuộc phiêu lưu của chú Dế Mèn cùng những người bạn của mình. Từ một chú dế mèn sống trong hang đất, kiêu căng và thiếu trách nhiệm, nhân vật chính đã trải qua nhiều biến cố, gặp gỡ nhiều nhân vật và dần trưởng thành, học được nhiều bài học quý giá về cuộc sống.

Thông qua những cuộc phiêu lưu của Dế Mèn, tác giả đã khéo léo lồng ghép nhiều bài học về tình bạn, lòng dũng cảm, tinh thần trách nhiệm và sự trưởng thành. Tác phẩm cũng giúp người đọc hiểu thêm về thế giới tự nhiên, về đời sống của các loài côn trùng và động vật nhỏ bé.

Với ngôn ngữ giản dị, trong sáng nhưng giàu hình ảnh, Dế Mèn Phiêu Lưu Ký đã chinh phục trái tim của nhiều thế hệ độc giả, không chỉ là trẻ em mà còn cả người lớn. Tác phẩm đã trở thành một phần không thể thiếu trong kho tàng văn học Việt Nam và là người bạn đồng hành thân thiết của nhiều thế hệ độc giả.`,
    rating: 4.8,
    period: "1945-1975",
    pages: 120,
    readTime: "2.5 giờ",
    publishDate: "1941",
    language: "Tiếng Việt",
    points: 70,
    challenges: [
      {
        id: 3,
        title: "Đọc một tác phẩm văn học thiếu nhi",
        points: 70,
      },
      {
        id: 2,
        title: "Hoàn thành 100 trang",
        points: 30,
      },
    ],
    quiz: [
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
  },
  {
    id: 5,
    title: "Nhật Ký Trong Tù",
    author: "Hồ Chí Minh",
    coverUrl: "/images/books/nhat-ky-trong-tu.png",
    category: "Thơ",
    description: `Nhật Ký Trong Tù là tập thơ chữ Hán của Chủ tịch Hồ Chí Minh, được sáng tác trong thời gian Người bị giam cầm tại các nhà tù ở Trung Quốc từ năm 1942 đến năm 1943. Tập thơ gồm 134 bài thơ, phần lớn được viết theo thể thơ Đường luật.

Trong hoàn cảnh tù đày khắc nghiệt, với không gian chật hẹp, thiếu thốn vật chất và tinh thần, Hồ Chí Minh đã sáng tác nên những vần thơ giàu cảm xúc, thể hiện tinh thần lạc quan, niềm tin vào cuộc sống và tương lai tươi sáng của dân tộc.

Nhật Ký Trong Tù không chỉ là nhật ký bằng thơ ghi lại cuộc sống hàng ngày trong tù, mà còn là tác phẩm nghệ thuật thể hiện tâm hồn cao đẹp, tư tưởng nhân văn sâu sắc của Hồ Chí Minh. Thông qua những vần thơ giản dị mà sâu sắc, Người đã bày tỏ tình yêu quê hương, đất nước, con người, thiên nhiên và khát vọng tự do.

Tập thơ đã được dịch ra nhiều thứ tiếng và được đánh giá cao về giá trị nghệ thuật và tư tưởng. Nhật Ký Trong Tù đã trở thành một tác phẩm quan trọng trong nền văn học Việt Nam hiện đại, góp phần làm phong phú thêm kho tàng văn học dân tộc.`,
    rating: 4.9,
    period: "1945-1975",
    pages: 100,
    readTime: "2 giờ",
    publishDate: "1960",
    language: "Tiếng Việt",
    points: 60,
    challenges: [
      {
        id: 4,
        title: "Đọc một tác phẩm thơ",
        points: 60,
      },
      {
        id: 5,
        title: "Đọc sách về lịch sử",
        points: 50,
      },
    ],
    quiz: [
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
  },
]

export default function BookDetailPage({ params }: { params: { id: string } }) {
  // Find the book by ID
  const bookId = Number.parseInt(params.id)
  const book = booksData.find((b) => b.id === bookId) || booksData[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <div className="space-y-4">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
              <BookCover
                title={book.title}
                author={book.author}
                coverUrl={book.coverUrl}
                width={300}
                height={450}
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-yellow-600 hover:bg-yellow-700">{book.points} điểm</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/books/${book.id}/read`} className="flex-1">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Đọc sách
                </Button>
              </Link>
            </div>
            <div className="space-y-4 p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-bold">{book.rating}/5</span>
                </div>
                <Badge className="bg-pink-600 hover:bg-pink-700">{book.category}</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Số trang:</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thời gian đọc:</span>
                  <span className="font-medium">{book.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Xuất bản:</span>
                  <span className="font-medium">{book.publishDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ngôn ngữ:</span>
                  <span className="font-medium">{book.language}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-4 border rounded-lg">
              <h3 className="font-bold">Thử thách liên quan</h3>
              {book.challenges.map((challenge) => (
                <div key={challenge.id} className="flex items-center justify-between text-sm p-2 bg-muted rounded-md">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-pink-600 mr-2" />
                    <span>{challenge.title}</span>
                  </div>
                  <Badge variant="outline">{challenge.points} điểm</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{book.title}</h1>
              <p className="text-xl text-muted-foreground">{book.author}</p>
            </div>

            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Giới thiệu</TabsTrigger>
                <TabsTrigger value="quiz">Kiểm tra</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4 mt-4">
                <div className="prose dark:prose-invert max-w-none">
                  {book.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="quiz" className="mt-4">
                <BookQuiz bookId={book.id} quiz={book.quiz} points={book.points} />
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Sách liên quan</h2>
              <RelatedBooks currentBookId={book.id} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
