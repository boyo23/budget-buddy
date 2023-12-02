import React, { useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { SavingsContext } from '@/context/savings-context';

export function DarkModeToggle(){
  const ctx = useContext(SavingsContext)

  return (
    <div>
      <Button size='md' variant='outlined' onClick={ctx.handleThemeSwitch} className='right-6 dark:text-contrast p-2 border-none'>
        <h1 className='text-3xl lowercase font-normal'>Dark mode</h1>
      </Button>
    </div>
  );
};

