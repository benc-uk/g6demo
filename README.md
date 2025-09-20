# G6 Graph Visualization Demo

A simple demonstration of using [AntV G6](https://g6.antv.antgroup.com/) to create interactive network diagrams and graph visualizations.

## What is G6?

G6 is a powerful JavaScript library for graph visualization and analysis. It provides:

- Interactive graph rendering with nodes and edges
- Built-in layouts (hierarchical, force-directed, circular, etc.)
- Customizable node and edge styles
- Interactive behaviors (drag, zoom, pan)
- Support for large datasets

## Demo Overview

This demo creates a simple network diagram showing:

- **Server 1** and **Server 2** (represented by server icons)
- A **Database** (represented by database icon)
- **Something Else** (represented by globe icon)

The diagram shows the relationships between these components with directed edges, arranged in a top-to-bottom hierarchical layout.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Clone or download this repository**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   npm start
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Features Demonstrated

### Interactive Behaviors

- **Drag Canvas**: Click and drag the background to pan around
- **Drag Elements**: Click and drag individual nodes to reposition them
- **Zoom Canvas**: Use mouse wheel or pinch gestures to zoom in/out

### Visual Elements

- **Custom Node Images**: Nodes use custom PNG icons from the `public/img/` directory
- **Styled Edges**: Curved vertical edges with arrowheads
- **Labels**: Each node displays a descriptive label
- **Dark Theme**: Dark background with light-colored labels

### Layout

- **Hierarchical Layout**: Uses AntV Dagre algorithm for automatic positioning
- **Top-to-Bottom**: Flows from top to bottom (`rankdir: "TB"`)
- **Network Simplex**: Optimized edge routing for cleaner appearance

## Project Structure

```
g6demo/
├── index.html          # Main HTML file with G6 implementation
├── package.json        # Dependencies and scripts
├── public/
│   └── img/
│       ├── db.png      # Database icon
│       ├── globe.png   # Globe/network icon
│       └── srv.png     # Server icon
└── README.md          # This file
```

## Customizing the Demo

### Adding New Nodes

To add more nodes to the graph, modify the `graph.addNodeData()` call in `index.html`:

```javascript
graph.addNodeData([
  // existing nodes...
  {
    id: "newNode",
    style: {
      labelText: "My New Node",
      src: "/img/your-icon.png",
    },
  },
]);
```

### Adding New Connections

To connect nodes, add edges in the `graph.addEdgeData()` call:

```javascript
graph.addEdgeData([
  // existing edges...
  {
    source: "node1",
    target: "newNode",
  },
]);
```

### Changing the Layout

Modify the layout configuration in the Graph constructor:

```javascript
layout: {
  type: "force",        // Try: "force", "circular", "grid", etc.
  preventOverlap: true,
  nodeSize: 100,
}
```

### Styling Nodes and Edges

Customize the appearance by modifying the `node` and `edge` configurations:

```javascript
node: {
  style: {
    size: 120,              // Larger nodes
    labelFill: "#ffffff",   // White labels
    labelFontSize: 24,      // Bigger text
  },
},
edge: {
  style: {
    stroke: "#ff6b6b",      // Red edges
    lineWidth: 6,           // Thicker lines
  },
}
```

## Learn More

- [G6 Official Documentation](https://g6.antv.antgroup.com/)
- [G6 Examples Gallery](https://g6.antv.antgroup.com/examples)
- [G6 API Reference](https://g6.antv.antgroup.com/api)
- [Vite Documentation](https://vitejs.dev/)

## Built With

- **[AntV G6](https://g6.antv.antgroup.com/)** - Graph visualization library
- **[Vite](https://vitejs.dev/)** - Development server and build tool
- **HTML5 & JavaScript ES6** - Core web technologies

---

_This demo provides a starting point for building more complex graph visualizations with G6. Experiment with different layouts, styles, and data to create your own interactive diagrams!_
