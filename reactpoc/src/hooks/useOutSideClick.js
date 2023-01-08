import { useEffect, useRef } from "react";

export const useOutSideClick = (ref, callback, when) => {
    const saveCallback = useRef(callback);

    useEffect(() => {
        saveCallback.current = callback;
    })
    useEffect(() => {
        const handler = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                saveCallback.current();
            }
        }

        if (when) {
            document.addEventListener("mousedown", handler)
        }
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [when, ref])
}