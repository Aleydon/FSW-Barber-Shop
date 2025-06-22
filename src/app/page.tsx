import { Button } from './_components/ui/button';
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h2 className="bg-amber-300 text-3xl font-bold text-red-500">
        Hello World
      </h2>
      <Button>Button</Button>
    </div>
  );
}
