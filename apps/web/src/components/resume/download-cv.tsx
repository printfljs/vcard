import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function DownloadCV() {
  return (
    <div className="z-10 flex items-center justify-center mt-5 mb-5">
      <Link
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <AnimatedGradientText> */}
        <span
  className={cn(
    `rounded-full px-6 py-2 text-[hsl(45,10%,60%)] bg-[hsl(45,100%,72%)] transition-all duration-300 text-gray-600
     hover:bg-gradient-to-r hover:from-[hsl(45,100%,80%)] hover:to-[hsl(45,100%,65%)] 
     hover:shadow-lg`
  )}
>
  Download Shu's full CV 📥
</span>







        {/* </AnimatedGradientText> */}
      </Link>
    </div>
  );
}

export default DownloadCV;
