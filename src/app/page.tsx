import StripeCheckOutButton from "./Checkout";
export default function Home() {
  // const a = "avqvsg";
  // const stt = "";
  // if (!!stt) {
  //   console.log("Str value");
  // }
  // if (!a) {
  //   console.log("Null value");
  // }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Stripe Check Out</div>
      <StripeCheckOutButton />
    </main>
  );
}
