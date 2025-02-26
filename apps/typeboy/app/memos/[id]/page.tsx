const memoData = { isLiked: true, text: "대충 흑백 사진에 글 쓰면 명언 같다." };

export default function Page() {
  return <div>{memoData.text}</div>;
}
