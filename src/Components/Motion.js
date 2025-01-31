import React , {useState , useEffect} from 'react'

 
function HTMLContent({ last }) {  

   
  const text = {
    fontSize: "40px",
    alignItems: "center",
    color: "white",
  };


  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  const [scrollPos, setScrollPos] = useState(0);

  // Function to track scroll position
  const handleScroll = () => {
    setScrollPos(window.scrollY); // Update scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trigger animation whenever the user scrolls
  useEffect(() => {
    const controls = animate(count, scrollPos, { duration: 0.5 }); // Animate count based on scroll
    return () => controls.stop();
  }, [scrollPos]); // Depend only on scrollPos

  return <motion.pre style={{ fontSize: "24px", fontWeight: "bold" }}>{rounded}</motion.pre>;
};


export default HTMLContent
