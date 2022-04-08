//TODO: move d3 calls to another file in helpers

import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./Admin.css";
import { employeeHierarchy } from "./EmployeeHierarchy";

/**
 *
 * @returns React Component to show company hierarchy
 * @dependency on D3.js
 */

function Admin() {
    const svgRef = useRef(null);
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Graph
    const insertGraph = () => {
        // Create Hierarchical Data
        const hierarchy = d3
            .stratify()
            .id((d: any) => d.id)
            .parentId((d: any) => d.parentId)(employeeHierarchy);

        // Create Tree Structure
        let treeStructure = d3
            .tree()
            .separation((a, b) => (a.parent === b.parent ? 1 : 1))
            .size([800, 600]);

        // pass data to tree structure
        let information = treeStructure(hierarchy);

        // Create Links between source & targets
        let connections = d3
            .select("svg")
            .append("g")
            .selectAll("path")
            .data(information.links());

        // Creating the paths now
        connections
            .enter()
            .append("path")
            // V, H are absolute vertical & horizontal components
            // v, h are relative vertical & horizontal components
            // M is the midpoint of the first node
            .attr(
                "d",
                (d) =>
                    "M" +
                    d.source.x +
                    "," +
                    d.source.y +
                    " v 100" +
                    " H" +
                    d.target.x +
                    " V" +
                    d.target.y
            );

        // Create Rectangles
        let rectangles = d3
            .select("svg")
            .append("g")
            .selectAll("rect")
            .data(information.descendants());
        rectangles
            .enter()
            .append("rect")
            // Add rounded corners to rectangle
            .attr("rx", 10)
            .attr("x", (d) => d.x - 75)
            .attr("y", (d) => d.y - 30);

        // Add image
        let pictures = d3
            .select("svg")
            .append("g")
            .selectAll("image")
            .data(information.descendants());
        pictures
            .enter()
            .append("image")
            .attr("href", (d: any) => d.data.icon)
            .attr("x", (d) => d.x - 29)
            .attr("y", (d) => d.y - 10);

        // Append text in rectangles - need to write the text
        let names = d3
            .select("svg")
            .append("g")
            .selectAll("text")
            .data(information.descendants());

        names
            .enter()
            .append("text")
            .text((d: any) => d.data.child)
            .attr("x", (d) => d.x)
            .attr("y", (d) => d.y + 55)
            .classed("bigger", true);
    };

    const handleZoom = (e: any, d: any) => {
        var x = e.transform.x;
        var y = e.transform.y;
        var s = e.transform.k;

        d3.selectAll("svg g").attr("transform", e.transform.toString());
    };

    let zoom = d3.zoom().scaleExtent([0.5, 2]).on("zoom", handleZoom);

    useEffect(() => {
        insertGraph();
        d3.select("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .call(zoom as any);
    });

    return (
        <div className="svg-container">
            <svg className="svg-content-responsive" ref={svgRef}></svg>
            <button className="text-button">ADD NEW TEAM MEMBER</button>
        </div>
    );
}

export default Admin;
