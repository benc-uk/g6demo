import { Graph } from "@antv/g6";

// Global G6 graph instance
export const graph = new Graph({
  container: "graphView",
  data: {},
  background: "#222222",

  node: {
    type: "image",
    style: {
      size: 100,
      labelFill: "#cccccc",
      labelFontSize: 20,
    },
  },

  edge: {
    type: "cubic-vertical",
    style: {
      endArrow: true,
      endArrowSize: 16,
      lineWidth: 4,
    },
  },

  layout: {
    type: "antv-dagre",
    rankdir: "TB",
    ranker: "network-simplex",
  },

  behaviors: ["drag-canvas", "drag-element", "zoom-canvas"],
});

// Add some nodes
graph.addNodeData([
  {
    id: "node1",
    style: {
      labelText: "Server 1",
      src: "img/srv.png",
    },
  },
  {
    id: "node2",
    style: {
      labelText: "Server 2",
      src: "img/srv.png",
    },
  },
  {
    id: "node3",
    style: {
      labelText: "Database",
      src: "img/db.png",
    },
  },
  {
    id: "node4",
    style: {
      labelText: "Something Else",
      src: "img/globe.png",
    },
  },
]);

// Link the nodes with edges
graph.addEdgeData([
  {
    source: "node1",
    target: "node3",
  },
  {
    source: "node2",
    target: "node3",
  },
  {
    source: "node3",
    target: "node4",
  },
]);

// Nothing happens until we render the graph
graph.render();
