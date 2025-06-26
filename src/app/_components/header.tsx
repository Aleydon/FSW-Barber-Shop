import { MenuIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
export function Header() {
  return (
    <Card>
      <CardContent className="flex w-full items-center justify-between p-5">
        <Image
          src={'/images/logo.png'}
          alt="FSW Barber Logo"
          width={120}
          height={18}
          priority
        />

        <Button asChild variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
