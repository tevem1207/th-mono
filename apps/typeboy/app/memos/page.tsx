import { MemoItem, MemoList } from "@/components";

export default function Page() {
  return (
    <main>
      <MemoList>
        <MemoItem isLiked={true}>대충 흑백 사진에 글 쓰면 명언 같다.</MemoItem>
        <MemoItem isLiked={false}>
          모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.
        </MemoItem>
        <MemoItem isLiked={false}>
          모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.
        </MemoItem>
      </MemoList>
    </main>
  );
}
