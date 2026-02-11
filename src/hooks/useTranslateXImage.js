import useScrollHandling from "@/hooks/useScrollHandling";
import { useEffect, useState } from "react";

const useTranslateXImage = () => {
    const { scrollPosition, scrollDriction } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTranslateX = () => {
        if (scrollDriction === "down" && scrollPosition >= 1900) {
            setTranslateXPosition(
                translateXPosition >= 0 ? 0 : translateXPosition - 1,
            );
        } else if (scrollDriction === "up") {
            setTranslateXPosition(
                translateXPosition >= 20 ? 20 : translateXPosition + 1,
            );
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition,
    };
};

export default useTranslateXImage;
