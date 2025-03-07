import { prisma } from "@/lib";

async function seedLanguage() {
  const languageCount = await prisma.language.count();

  if (languageCount > 0) {
    console.log("Language data already exists. Skipping seeding...");
    return;
  }
  await prisma.language.createMany({
    data: [{ languageCode: "ko" }, { languageCode: "en" }],
  });
  console.log("✅ Language data inserted successfully!");
}

async function seedSource(userId: string) {
  const sourceCount = await prisma.source.count();

  if (sourceCount > 0) {
    console.log("Source data already exists. Skipping seeding...");
    return;
  }

  await prisma.source.createMany({
    data: [
      { name: "인터넷 밈", id: 1, userId },
      { name: "허먼 멜빌", id: 2, userId },
      { name: "침착맨", id: 3, userId },
      {
        name: "2013학년도 6월 전국연합학력평가",
        id: 4,
        userId,
      },
    ],
  });
}

async function seedMemo(userId: string) {
  const memoCount = await prisma.memo.count();

  if (memoCount > 0) {
    console.log("Memo data already exists. Skipping seeding...");
    return;
  }

  await prisma.memo.createMany({
    data: [
      {
        text: "대충 흑백 사진에 글 쓰면 명언 같다.",
        sourceId: 1,
        userId,
        languageCode: "ko",
      },
      {
        text: "모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.",
        sourceId: 2,
        userId,
        languageCode: "ko",
      },
      {
        text: "햄부기햄북 햄북어 햄북스딱스 함부르크햄부가우가 햄비기햄부거 햄부가티햄부기온앤온을 차려오거라. 햄부기햄북 햄북어 햄북스딱스 함부르크햄부가우가 햄비기햄부거 햄부가티햄부기온앤온을 차려오라고 하지않앗느냐.",
        sourceId: 1,
        userId,
        languageCode: "ko",
      },
      {
        text: "많이 울어. 어른이 되면 속으로 울어야 돼.",
        sourceId: 3,
        userId,
        languageCode: "ko",
      },
      {
        text: "햇빛이 선명하게 나뭇잎을 핥고 있었다.",
        sourceId: 4,
        userId,
        languageCode: "ko",
      },
    ],
  });

  console.log("✅ Memo test data inserted successfully!");
}

async function main() {
  if (!process.env.TEST_USER_ID) {
    throw new Error("TEST_USER_ID is not provided.");
  }
  await seedLanguage();
  await seedSource(process.env.TEST_USER_ID);
  await seedMemo(process.env.TEST_USER_ID);
}

main()
  .catch((e) => {
    console.error("Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
