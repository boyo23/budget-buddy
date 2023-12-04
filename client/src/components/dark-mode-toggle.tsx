import { useContext } from 'react';
import { SavingsContext } from '@/context/savings-context';

export function DarkModeToggle() {
  const ctx = useContext(SavingsContext)

  const moon = <div onClick={ctx.handleThemeSwitch} className='h-12 w-12 cursor-pointer mr-6'>
    <svg viewBox="-22.5 0 301 301" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="2.17771739%" y1="34.7938955%" x2="92.7221942%" y2="91.3419405%" id="linearGradient-1"> <stop stop-color="#ffed94" offset="0%"> </stop> <stop stop-color="#faffb8" offset="54.2186236%"> </stop> <stop stop-color="#ffee80" offset="74.4988788%"> </stop> <stop stop-color="#d1dfff" offset="100%"> </stop> </linearGradient> </defs> <g> <path d="M124.183681,101.699 C124.183681,66.515 136.256681,34.152 156.486681,8.525 C159.197681,5.092 156.787681,0.069 152.412681,0.012 C151.775681,0.004 151.136681,0 150.497681,0 C67.6206813,0 0.390681343,66.99 0.00168134279,149.775 C-0.386318657,232.369 66.4286813,300.195 149.019681,300.988 C189.884681,301.381 227.036681,285.484 254.376681,259.395 C257.519681,256.396 255.841681,251.082 251.548681,250.42 C179.413681,239.291 124.183681,176.949 124.183681,101.699" fill="url(#linearGradient-1)"> </path> </g> </g></svg>
  </div>

  // @ts-ignore
  const sun =
    <div onClick={ctx.handleThemeSwitch} 
    className='h-12 w-12 cursor-pointer mr-6'>
      <svg className='h-20 w-20' viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffed7a" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"></path><circle fill="#ffed7a" cx="18" cy="18" r="10"></circle></g></svg>
    </div>

  return (
    // <div>
    //   <Button size='md' variant='outlined' onClick={ctx.handleThemeSwitch} className='bg-transparent dark:text-contrast p-2 border-none mr-4 flex w-fit'>
    //     <h1 className='text-3xl lowercase font-normal'>{ctx.theme === "light" ? "Dark mode" : "Light mode"}</h1>
    <div>
      {ctx.theme === "light" ? sun : moon}
      {/* <h1 className='text-xl'>{sun}</h1> */}
      {/* {sun} */}
    </div>

    //   </Button>
    // </div>
  );
};

