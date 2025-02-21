export const fetchMemos = async () => {
  return (await fetch("/api/memos")).json();
};

export const fetchMemo = async (id: string) => {
  return (await fetch(`/api/memos/${id}`)).json();
};

export const submitMemo = async (inputText: string) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify({ inputText }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
