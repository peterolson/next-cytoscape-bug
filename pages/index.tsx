import { useEffect, useRef } from "react";
import cytoscape from 'cytoscape';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const graphNode = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!graphNode.current) return;
    cytoscape({
      container: graphNode.current,
      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        {
          data: {
            id: "ab",
            source: "a",
            target: "b",
          },
        },
      ]
    });
  }, [graphNode]);

  return <div ref={graphNode} style={{ width: 100, height: 100 }} />
}
