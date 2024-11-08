"use client";

import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useEffect, useRef, useState } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  // Store scroll position before unmounting
  useEffect(() => {
    const key = pathname + searchParams.toString();
    const currentRef = containerRef.current; // Store ref value locally

    console.log("key", key);
    // Save scroll position before unmounting
    return () => {
      console.log(
        "saving scroll position",
        key,
        containerRef.current.scrollTop,
        currentRef.scrollTop
      );
      scrollPositions.current[key] = currentRef.scrollTop;
    };
  }, [pathname, searchParams]);

  // Restore scroll position after mounting
  useEffect(() => {
    const key = pathname + searchParams.toString();
    console.log("key", key);
    if (scrollPositions.current[key]) {
      console.log("scroll now to ", scrollPositions.current[key], key);
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        containerRef.current.scrollTo({
          top: scrollPositions.current[key],
          behavior: "instant", // Use instant to avoid smooth scrolling
        });
      });
    } else {
      console.log("no saved position");
      // If no saved position, scroll to top
      containerRef.current.scrollTo({
        top: 0,
        behavior: "instant", // Use instant to avoid smooth scrolling
      });
    }
  }, [pathname, searchParams]);
  console.log("scrollPositions", scrollPositions.current);
  // Clear scroll positions when component unmounts
  useEffect(() => {
    return () => {
      console.log("unmounting");
      scrollPositions.current = {};
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   const position = e.currentTarget.scrollTop;
  //   console.log("position", e.currentTarget.scrollTop);
  //   setScrollPosition(position);
  // };

  const [completed, setCompleted] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log("scrollY", scrollY.get());
  //   window.scrollTo({
  //     top: 1000,
  //     behavior: "instant",
  //   });
  // }, [window]); // Only run on mount by using empty dependency array
  // // Store scroll position before unmounting
  // useEffect(() => {
  //   const key = pathname + searchParams.toString();
  //   console.log("key", key);
  //   // Save scroll position before unmounting
  //   return () => {
  //     console.log("saving scroll position", scrollPosition);
  //     setScrollPosition(0);
  //     scrollPositions.current[key] = scrollPosition;
  //   };
  // }, [pathname, searchParams]);

  // // Restore scroll position after mounting
  // useEffect(() => {
  //   console.log("scrollPositions", scrollPositions.current);
  //   const key = pathname + searchParams.toString();
  //   console.log("key", key);
  //   if (scrollPositions.current[key]) {
  //     // Use requestAnimationFrame to ensure DOM is ready
  //     requestAnimationFrame(() => {
  //       console.log("scroll now to ", scrollPositions.current[key], key);
  //       containerRef.current?.scrollTo({
  //         top: 1000,
  //         behavior: "instant", // Use instant to avoid smooth scrolling
  //       });
  //     });
  //   } else {
  //     console.log("no saved position");
  //     // If no saved position, scroll to top
  //     containerRef.current?.scrollTo({
  //       top: 1000,
  //       behavior: "instant",
  //     });
  //   }
  // }, [pathname, searchParams]);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 480,
  //     behavior: "smooth",
  //   });
  // }, [pathname, searchParams]);

  // // Clear scroll positions when component unmounts
  // useEffect(() => {
  //   return () => {
  //     scrollPositions.current = {};
  //   };
  // }, []);

  const key = usePathname();
  // const initialCircleY = scrollPositions.current.hasOwnProperty(key)
  //   ? scrollPositions.current[key] + window.innerHeight / 2
  //   : 0 + window.innerHeight / 2;
  const initialCircleY = window.innerHeight / 2;
  const sbHeight =
    window.innerHeight * (window.innerHeight / document.body.offsetHeight);

  return (
    <AnimatePresence
      onExitComplete={() => console.log("exit")}
      mode="popLayout"
    >
      <motion.div
        id={`${key}-${scrollPositions.current[key]}`}
        key={key}
        onAnimationStart={() => {
          setCompleted(false);
        }}
        onAnimationComplete={() => {
          // console.log("animation complete, ref:", containerRef.current);
          setCompleted(true);
        }}
        initial={{
          clipPath: `circle(0% at 50% ${initialCircleY}px)`, // Start with a small circle at the center
        }}
        animate={{
          clipPath: `circle(100vh at 50% ${initialCircleY}px)`, // Start with a small circle at the center
          // clipPath: "circle(150% at 50% 50%)", // Expand the circle to cover the entire page
          // transition: { duration: 1, ease: [0.27, 0, 0.51, 1] }, // Control timing and easing
          transition: {
            type: "spring",
            damping: 40,
            mass: 1,
            stiffness: 250,
            duration: 0.2,
            delay: 0,
            ease: [0.27, 0, 0.51, 1],
          },
        }}
        className={` ${completed ? "removeClipPath" : ""}`}
        exit={{
          position: "fixed",
          inset: 0,
          // clipPath: "circle(0% at 50% 50%)", // Shrink the circle back to the center
          opacity: [1, 1, 1, 1, 0],
          transition: { opacity: { duration: 0.2 } },
        }}
        style={{
          // position: completed ? "relative" : "fixed",

          inset: 0,
        }}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // variants={variants}
      >
        <FrozenRouter>
          <div
            ref={containerRef}
            onClick={() => {
              console.log(
                "clicked",
                containerRef.current.scrollTop,
                scrollPositions.current
              );
            }}
            className=" w-full h-screen overflow-scroll "
          >
            {children}
          </div>
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
