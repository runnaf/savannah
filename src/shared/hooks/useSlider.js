import { useState } from "react";

export const useSlider = (maxItems) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const previos = () => {
        setActiveIndex(index => index - 1 < 0 ? maxItems - 1 : index - 1);
    }

    const next = () => {
        setActiveIndex(index => index + 1 > maxItems - 1 ? 0 : index + 1);
    }

    return { activeIndex, previos, next };
}