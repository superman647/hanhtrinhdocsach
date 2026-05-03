"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, BookOpen } from "lucide-react"

// Dữ liệu sách mẫu
const booksData = [
  {
    id: 1,
    title: "Truyện Kiều",
    author: "Nguyễn Du",
    totalPages: 5,
    content: [
      `Trăm năm trong cõi người ta,
Chữ tài chữ mệnh khéo là ghét nhau.
Trải qua một cuộc bể dâu,
Những điều trông thấy mà đau đớn lòng.`,
      `Lạ gì bỉ sắc tư phong,
Trời xanh quen thói má hồng đánh ghen.
Cảo thơm lần giở trước đèn,
Phong tình cổ lục còn truyền sử xanh.`,
      `Rằng năm Gia Tĩnh triều Minh,
Bốn phương phẳng lặng, hai kinh vững vàng.
Có nhà viên ngoại họ Vương,
Gia tư nghỉ cũng thường thường bậc trung.`,
      `Một trai con thứ rốt lòng,
Vương Quan là chữ, nối dòng nho gia.
Đầu lòng hai ả tố nga,
Thúy Kiều là chị, em là Thúy Vân.`,
      `Mai cốt cách, tuyết tinh thần,
Một người một vẻ, mười phân vẹn mười.
Vân xem trang trọng khác vời,
Khuôn trăng đầy đặn, nét ngài nở nang.`,
    ],
  },
  {
    id: 2,
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    totalPages: 5,
    content: [
      `Chương 1: Xuân tóc đỏ ra đời

Một buổi trưa nắng nóng oi ả, trên một con đường ở Hà Nội, một người đàn ông trung niên đang đi bộ thì bỗng nhiên nghe thấy tiếng kêu cứu từ một ngôi nhà gần đó.`,
      `Ông ta vội vàng chạy đến và thấy một người phụ nữ đang hoảng loạn vì con chó cưng của bà ta bị ngã từ trên gác xuống. Không chút do dự, người đàn ông đã cứu con chó và được bà chủ nhà vô cùng biết ơn.`,
      `Người đàn ông đó chính là Xuân - một thanh niên với mái tóc đỏ nổi bật. Từ đây, cuộc đời của Xuân bắt đầu thay đổi khi anh được bà Phó Đoan - chủ nhà giàu có - mời vào làm việc trong gia đình.`,
      `Chương 2: Bước chân vào giới thượng lưu

Xuân Tóc Đỏ nhanh chóng thích nghi với cuộc sống mới trong gia đình bà Phó Đoan. Anh ta khéo léo lấy lòng mọi người bằng sự lanh lợi và những lời nịnh hót.`,
      `Gia đình bà Phó Đoan là đại diện cho tầng lớp tư sản thành thị đang chạy theo lối sống Âu hóa một cách mù quáng. Họ tổ chức những buổi tiệc tùng, những cuộc thi thể thao và những hoạt động văn hóa chỉ để phô trương.`,
    ],
  },
  {
    id: 3,
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    totalPages: 5,
    content: [
      `Chương 1: Cảnh nghèo

Trời tối đen như mực, gió thổi ào ào, mưa tuôn xối xả. Trong một căn nhà tranh tồi tàn ở làng Đông Xá, chị Dậu đang ngồi bên giường, lo lắng nhìn chồng đang nằm mê man vì cơn sốt.`,
      `Anh Dậu đã bị ốm hơn một tháng nay, không thể đi làm được. Gia đình họ vốn đã nghèo, nay lại càng khốn đốn hơn. Chị Dậu phải gánh vác mọi việc, từ chăm sóc chồng con đến lo toan sinh kế.`,
      `Điều làm chị Dậu lo lắng nhất lúc này là khoản tiền sưu thuế sắp phải nộp. Nếu không nộp đúng hạn, cả gia đình sẽ gặp rắc rối lớn với lý trưởng và cai lệ.`,
      `Chương 2: Bán con

Sau nhiều ngày suy nghĩ, chị Dậu quyết định bán đứa con gái là bé Tý cho bà Ba để lấy tiền nộp sưu thuế. Đây là quyết định vô cùng đau đớn đối với chị, nhưng chị không còn cách nào khác.`,
      `Cảnh chia ly giữa mẹ con thật xót xa. Bé Tý khóc nức nở, không muốn xa mẹ. Chị Dậu cũng không cầm được nước mắt, nhưng chị phải cứng rắn để làm điều cần thiết cho sự sống còn của cả gia đình.`,
    ],
  },
  {
    id: 4,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    totalPages: 5,
    content: [
      `Tôi là một chú dế mèn sống trong một cái hang đất ở bãi cỏ sau vườn nhà. Tôi rất hãnh diện về vẻ ngoài của mình: đôi càng mạnh mẽ, chiếc áo màu nâu bóng mượt, và đôi cánh dài có thể phát ra những âm thanh vang vọng.`,
      `Tôi sống một mình và rất tự hào về cái hang của mình. Mỗi ngày, tôi đều dọn dẹp hang sạch sẽ và canh gác cẩn thận. Tôi cũng thường ngồi trước cửa hang, nghênh ngang như một ông vua và chế giễu những con dế khác.`,
      `Một hôm, tôi gặp Dế Choắt, một chú dế nhỏ bé, gầy gò sống ở hang bên cạnh. Tôi đã chế nhạo Dế Choắt vì vẻ ngoài yếu ớt của nó. Tôi không biết rằng sự kiêu căng của mình sẽ sớm dẫn đến một bi kịch.`,
      `Một ngày nọ, tôi thách Dế Choắt ra khỏi hang và đi theo tôi. Chúng tôi đã đi quá xa và gặp phải một con Nhện độc. Vì quá sợ hãi, Dế Choắt đã bị con Nhện tấn công và chết. Tôi may mắn thoát được nhưng lòng đầy hối hận.`,
      `Cái chết của Dế Choắt đã làm tôi thay đổi hoàn toàn. Tôi nhận ra rằng sự kiêu căng và thiếu suy nghĩ của mình đã gây ra hậu quả nghiêm trọng. Từ đó, tôi quyết định rời bỏ hang của mình và bắt đầu cuộc hành trình khám phá thế giới, học hỏi và trưởng thành.`,
    ],
  },
  {
    id: 5,
    title: "Nhật Ký Trong Tù",
    author: "Hồ Chí Minh",
    totalPages: 5,
    content: [
      `CHÀO NGƯỜI ĐỒNG TỦ

Tôi bị giam trong ngục thất,
Người ở buồng bên là ai?
Nghe tiếng người thơ thẩn mãi,
Tiếng dép lê qua lại hoài.`,
      `Tôi muốn cùng người trò chuyện,
Nhưng biết làm sao để truyền?
Tôi gõ vào tường ba tiếng,
Mừng quá, người gõ đáp liền!`,
      `Từ đó chúng tôi làm bạn,
Tuy chưa hề thấy mặt nhau.
Tâm sự cùng nhau tất cả,
Quên hết mọi nỗi u sầu.`,
      `CẢNH MÙA THU

Trời thu xanh ngắt màu dương,
Nhả tơ trăng rọi như sương bạc đầu.
Gió thu hiu hắt làm rầu,
Lá thu khô rụng bên cầu điêu linh.`,
      `Sương thu lạnh buốt vai gầy,
Chân thu ướt đẫm đường dài bước đi.
Thu ơi! Mi có còn gì,
Để cho ta nhắn đôi khi nhớ nhà?`,
    ],
  },
]

export default function BookReaderPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)

  // Tìm sách theo ID
  const bookId = Number.parseInt(params.id)
  const book = booksData.find((b) => b.id === bookId) || booksData[0]
  const totalPages = book.totalPages || 1

  // Lấy nội dung trang hiện tại
  const currentContent = book.content[currentPage - 1] || ""

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    } else {
      // Nếu đã đến trang cuối, chuyển đến trang kiểm tra
      router.push(`/books/${bookId}/read/complete`)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 10)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 10)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-10">
        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => router.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span>{zoom}%</span>
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" onClick={() => router.push(`/books/${book.id}`)}>
            <BookOpen className="mr-2 h-4 w-4" /> Thông tin sách
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
              transition: "transform 0.2s ease",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <h1 className="text-2xl font-bold text-center mb-2">{book.title}</h1>
            <h2 className="text-xl text-center text-muted-foreground mb-6">{book.author}</h2>
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trang {currentPage} / {totalPages}
            </p>

            <div className="prose dark:prose-invert max-w-none mx-auto">
              {currentContent.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Progress value={(currentPage / totalPages) * 100} className="h-2" />

          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrevPage} disabled={currentPage === 1}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Trang trước
            </Button>

            <Button onClick={handleNextPage} className="bg-green-600 hover:bg-green-700">
              {currentPage === totalPages ? "Hoàn thành" : "Trang tiếp"} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
