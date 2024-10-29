import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function PredictVisualisation({ historicalData, predictedPrice }) {
    const svgRef = useRef();

    useEffect(() => {
        // Log historical data for debugging
        console.log("Historical Data:", historicalData);
        console.log("Predicted Price:", predictedPrice);

        // Check if historicalData is empty
        if (!historicalData || historicalData.length === 0) {
            console.warn("No historical data available.");
            return; // Prevent rendering if there's no data
        }

        const width = 600;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 30, left: 50 };

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("*").remove(); // Clear previous content

        // Create xScale and yScale
        const xScale = d3.scaleLinear()
            .domain(d3.extent(historicalData, d => d.year + d.quarter / 4))
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(historicalData, d => d.price)]).nice()
            .range([height - margin.bottom, margin.top]);

        // Create axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.format(".0f")));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale));

        // Define the line generator
        const lineGenerator = d3.line()
            .x(d => xScale(d.year + d.quarter / 4))
            .y(d => yScale(d.price));

        // Draw the line for historical data
        svg.append("path")
            .datum(historicalData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", lineGenerator);

        // If there is a predicted price, create a new dataset for the prediction
        if (predictedPrice && predictedPrice.year && predictedPrice.quarter && predictedPrice.price !== undefined) {
            const extendedData = [...historicalData, predictedPrice];

            // Draw the line including the predicted point
            svg.append("path")
                .datum(extendedData)
                .attr("fill", "none")
                .attr("stroke", "orange")
                .attr("stroke-width", 1.5)
                .attr("d", lineGenerator);

            // Add a point for the predicted price
            svg.append("circle")
                .attr("cx", xScale(predictedPrice.year + predictedPrice.quarter / 4))
                .attr("cy", yScale(predictedPrice.price))
                .attr("r", 5)
                .attr("fill", "red");

            svg.append("text")
                .attr("x", xScale(predictedPrice.year + predictedPrice.quarter / 4))
                .attr("y", yScale(predictedPrice.price) - 10)
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .text(`Predicted: $${predictedPrice.price.toFixed(2)}`);
        }
    }, [historicalData, predictedPrice]); // Update chart when data changes


    return (
        <div id="visualisation" style={{ marginTop: '20px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default PredictVisualisation
