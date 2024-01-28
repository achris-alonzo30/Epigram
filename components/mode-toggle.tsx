import Image from "next/image";

import {HoverContent} from "./hover-content"

export const ModeToggle = () => {
    const mode = "Fun Mode";
    return (
        <div className="fixed right-0 bottom-0 mb-10 mr-6">
            
                <div role="button" className="bg-white rounded-full">
                    <HoverContent title={mode === "Fun Mode" ? "Fun Mode" : "Work Mode"}>
                    {mode === "Fun Mode" ? (
                        <Image src="fun-mode.svg" alt="fun mode" width={50} height={50} />
                    ) : (
                        <Image src="work-mode.svg" alt="work mode" width={50} height={50} />
                    )}
                    </HoverContent>
                    
                </div>
            
        </div>
    )
}