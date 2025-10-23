import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  colorClass: string;
  decimals?: number;
}

const AnimatedStat = ({ value, suffix = "", prefix = "", label, colorClass, decimals = 0 }: AnimatedStatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { count } = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return (num / Math.pow(10, decimals)).toFixed(1);
    }
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="transform transition-all duration-500 hover:scale-105">
      <div className={`text-3xl font-bold ${colorClass}`}>
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default AnimatedStat;
