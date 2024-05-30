import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Placeholder SVG icon
const Icon = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6621 1.52148H3.80211C2.28664 1.52148 1.05811 2.75001 1.05811 4.26548V11.1255C1.05811 12.641 2.28664 13.8695 3.80211 13.8695H10.6621C12.1776 13.8695 13.4061 12.641 13.4061 11.1255V4.26548C13.4061 2.75001 12.1776 1.52148 10.6621 1.52148Z" stroke="white" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.17383 7.69524L6.71733 9.06724L9.28983 6.32324" stroke="white" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

);

const Icon2 = () => (
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2.92773H7.81C4.17 2.92773 2 5.09773 2 8.73773V17.1077C2 20.7577 4.17 22.9277 7.81 22.9277H16.18C19.82 22.9277 21.99 20.7577 21.99 17.1177V8.73773C22 5.09773 19.83 2.92773 16.19 2.92773ZM10.95 18.4377C10.66 18.7277 10.11 19.0077 9.71 19.0677L7.25 19.4177C7.16 19.4277 7.07 19.4377 6.98 19.4377C6.57 19.4377 6.19 19.2977 5.92 19.0277C5.59 18.6977 5.45 18.2177 5.53 17.6877L5.88 15.2277C5.94 14.8177 6.21 14.2777 6.51 13.9877L10.97 9.52773C11.05 9.73773 11.13 9.94773 11.24 10.1877C11.34 10.3977 11.45 10.6177 11.57 10.8177C11.67 10.9877 11.78 11.1477 11.87 11.2677C11.98 11.4377 12.11 11.5977 12.19 11.6877C12.24 11.7577 12.28 11.8077 12.3 11.8277C12.55 12.1277 12.84 12.4077 13.09 12.6177C13.16 12.6877 13.2 12.7277 13.22 12.7377C13.37 12.8577 13.52 12.9777 13.65 13.0677C13.81 13.1877 13.97 13.2977 14.14 13.3877C14.34 13.5077 14.56 13.6177 14.78 13.7277C15.01 13.8277 15.22 13.9177 15.43 13.9877L10.95 18.4377ZM17.37 12.0177L16.45 12.9477C16.39 13.0077 16.31 13.0377 16.23 13.0377C16.2 13.0377 16.16 13.0377 16.14 13.0277C14.11 12.4477 12.49 10.8277 11.91 8.79773C11.88 8.68773 11.91 8.56773 11.99 8.49773L12.92 7.56773C14.44 6.04773 15.89 6.07773 17.38 7.56773C18.14 8.32773 18.51 9.05773 18.51 9.81773C18.5 10.5377 18.13 11.2577 17.37 12.0177Z" fill="white"/>
</svg>

);

export default function Page() {
  return (

    <div className ="gap-10 flex flex-row mt-64 ml-52">
      <div> 
 <Card className="w-[287px] h-[294px] flex flex-col gap-4 ">
      <CardHeader>
        <div className="flex flex-col gap-10">
          <CardTitle className="text-4xl">Vstup</CardTitle>
        <div className="flex items-center space-x-2">
        <Icon />
          <div clasName="text-white">Jednorázový vstup</div>
          </div>
        
        </div>
        <div className="flex items-center space-x-2">
          <Icon />
          <div>Platnosť po dobu 24h</div>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-[32px]">6$/h</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#0047FF] text-white flex items-center w-[129px] h-[40px] gap-4 rounded-full">
          
          Upraviť <Icon2 className="ml-2" />
        </Button> 
      </CardFooter>
    </Card>
 </div>

 <div>
 <Card className="w-[287px] h-[294px] flex flex-col gap-4 ">
      <CardHeader>
        <div className="flex flex-col gap-8">

           <CardTitle className="text-4xl">Vstup</CardTitle>
        <div className="flex items-center space-x-2">
        <Icon />
          <div clasName="text-white">Jednorázový vstup</div>
        </div>
        
        </div>
       <div className="flex items-center space-x-2">
          <Icon />
          <div>Platnosť po dobu 24h</div>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-[32px]">40$/d</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#0047FF] text-white flex items-center w-[129px] h-[40px] gap-4 rounded-full">
          
          Upraviť <Icon2 className="ml-2" />
        </Button> 
      </CardFooter>
    </Card>
 </div>

 <div>
 <svg width="287" height="294" viewBox="0 0 287 294" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_562_3237)">
<rect width="287" height="294" rx="24" fill="#0F0F0F"/>
<rect x="0.588" y="0.588" width="285.768" height="292.824" rx="23.0948" fill="white" stroke="#414141" stroke-width="1.176"/>
<rect x="134" y="82" width="18" height="130" rx="5" fill="#0047FF"/>
<rect x="78.1763" y="156.376" width="18" height="130" rx="5" transform="rotate(-90 78.1763 156.376)" fill="#0047FF"/>
</g>
<rect x="0.5" y="0.5" width="286" height="293" rx="23.5" stroke="#414141"/>
<defs>
<clipPath id="clip0_562_3237">
<rect width="287" height="294" rx="24" fill="white"/>
</clipPath>
</defs>
</svg>

 </div>
    
 <div className="absolute w-full flex mt-32 ml-56 ">
      <svg width="1102" height="989" viewBox="0 0 1102 989" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_951_624)">
      <g filter="url(#filter0_f_951_624)">
      <path d="M551 687C647.65 687 726 608.65 726 512C726 415.35 647.65 337 551 337C454.35 337 376 415.35 376 512C376 608.65 454.35 687 551 687Z" fill="url(#paint0_linear_951_624)"/>
      </g>
      </g>
      <defs>
      <filter id="filter0_f_951_624" x="0" y="-39" width="1102" height="1102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="188" result="effect1_foregroundBlur_951_624"/>
      </filter>
      <linearGradient id="paint0_linear_951_624" x1="485.358" y1="536.039" x2="645.151" y2="534.353" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE9800"/>
      <stop offset="0.0001" stop-color="#F6970A"/>
      <stop offset="0.625" stop-color="#8F5FCD"/>
      <stop offset="1" stop-color="#E916FB"/>
      </linearGradient>
      <clipPath id="clip0_951_624">
      <rect width="1102" height="989" fill="white"/>
      </clipPath>
      </defs>
</svg>


        </div>
</div>
    


  )
}
