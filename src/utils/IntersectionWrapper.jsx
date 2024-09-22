import { useEffect, useRef } from "react";

const IntersectionWrapper = ({ children, intersectionFunction, rootId }) => {
    const containerRef = useRef(null);

    const callbackFunction = (entries) => {
        const [entry] = entries
        // setIsVisible(entry.isIntersecting)
        if(entry.isIntersecting) intersectionFunction();
        else intersectionFunction(true);
    }

    const options = {
        root: rootId.current || null,
        rootMargin: "0px",
        threshold: 0.1
    }

    // console.log(options);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    // useEffect(()=>{console.log(containerRef,"hey")},[])
    return <div ref={containerRef}>{children}</div>;
}

export default IntersectionWrapper