import {
  Button,
  buttonVariants,
  Calendar,
  Label,
  RadioGroup,
  RadioGroupItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@repo/ui";
import { cn } from "@repo/ui/lib/utils";

import { Section } from "../components";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <header className="h-16 flex items-center justify-center bg-slate-900 text-white w-full">
        <TypographyH1 className="text-xl font-normal">
          테니스를 얼른 예약해야만
        </TypographyH1>
      </header>
      <main className="py-8 flex flex-col items-center gap-8 w-full max-w-3xl">
        <Section>
          <TypographyP className="w-3/5 text-center text-pretty break-keep">
            서울시 공공서비스예약 홈페이지는 로그인해야만 이용할 수 있어요
          </TypographyP>
          <Button className="my-2" size="lg">
            로그인 먼저 하기
          </Button>
        </Section>
        <Section>
          <TypographyH2 className="text-xl font-normal w-full text-center">
            예약하기
          </TypographyH2>
          <Calendar
            mode="single"
            className="w-full max-w-2xl pb-0"
            classNames={{
              months:
                "flex flex-col w-full sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4 w-full",
              head_cell:
                "flex-1 text-muted-foreground rounded-md font-normal text-sm",
              cell: "flex-1 h-11 text-center text-base p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                buttonVariants({ variant: "ghost" }),
                "w-full h-full max-w-11 p-0 font-normal aria-selected:opacity-100"
              ),
            }}
          />
        </Section>
        <Section>
          <RadioGroup
            defaultValue="time"
            className="p-4 pt-0 flex gap-8 w-full justify-evenly"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="time" id="radio-time">
                시간별
              </RadioGroupItem>
              <Label htmlFor="radio-time">시간별</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="location" id="radio-location">
                지역구별
              </RadioGroupItem>
              <Label htmlFor="radio-location">지역구별</Label>
            </div>
          </RadioGroup>
          <Table>
            <TableHeader className="bg-slate-900 text-white">
              <TableRow className="hover:bg-slate-900">
                <TableHead className="text-inherit">이용 시간</TableHead>
                <TableHead className="text-inherit">지역구</TableHead>
                <TableHead className="text-inherit">시설명</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell>{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>
      </main>
    </div>
  );
}
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
