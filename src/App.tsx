import { Button } from "./components/shadcn/button";

export default function App() {
  return (
    <>
      <header className="w-full h-10 bg-foreground text-background flex items-center justify-end px-20 sticky">
        Header...
      </header>
      <section className="bg-card px-20 py-10 h-[30dvh] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold tracking-[5px] mb-10">
          T-Shirts
        </h1>
        <Button type="button" variant="secondary">
          Check out our products!
        </Button>
      </section>
      <section className="bg-[url('public/images/sewingmachine.jpeg')] bg-cover bg-center bg-no-repeat h-[50dvh] text-muted-foreground px-20 py-10">
        Slideshow--
      </section>
    </>
  );
}
