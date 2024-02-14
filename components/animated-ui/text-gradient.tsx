import { Fragment } from "react";

type TextGradientProps = {
    isHeading?: boolean;
    isParagraph?: boolean;
    children: React.ReactNode;
    fontSize?: string[];
    fontStyle?: string;
}

const style = " animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text text-transparent"

export const TextGradient = ({ isHeading, isParagraph, children, fontSize, fontStyle }: TextGradientProps) => {
    if (isHeading) {
        return (
            <h1 className={style + " " + fontSize + " " + fontStyle}>
                {children}
            </h1>
        )
    }
    if (isParagraph) {
        return (
            <p className={style + " " + fontSize + " " + fontStyle}>
                {children}
            </p>
        )
    }
    return (
        <span className={style + " " + fontSize + " " + fontStyle}>
            {children}
        </span>
    )
}