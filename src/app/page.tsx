import { Search } from 'lucide-react';

import { Header } from './_components/header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
export default function Page() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Miguel.</h2>
        <p>Sexta, 2 de Fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input className="rounded-xs" placeholder="Search" />
          <Button
            className="rounded-xl bg-[#8162FF] hover:bg-[#221C3D]"
            variant="secondary"
            size="icon"
          >
            <Search />
          </Button>
        </div>
      </div>
    </>
  );
}
