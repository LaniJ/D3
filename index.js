// cons 

// const svg = d3.select('svg');

// join data to rects
// const rects = svg.selectAll('rect')
//   .data(data)
 
// console.log('rect', rects);

// add attributes to rects already in the dom
// rects.attr('width', (d) =>  d.width)
//   .attr('height', (d) =>  d.height)
//   .attr('fill', (d) =>  d.fill)


// append the enter selection to the dom
// rects.enter()
//   .append('rect')
//   .attr('width', (d) =>  d.width)
//   .attr('height', (d) =>  d.height)
//   .attr('fill', (d) =>  d.fill)


// const svg = canvas.append('svg')
//   .attr('height', 600)
//   .attr('width', 600)

// const group = svg.append('g')
//   .attr('transform', 'translate(50, 100)')

const newSVG = d3.select('.svg');

// console.log('newSVG', newSVG);

d3.json('planets.json')
  .then((data) => {
    const circs = newSVG.selectAll('circle')
    .data(data) 

    // add sttributes to circles already in the dom
    circs.attr('cy', 200)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill)

    // append enter selection to the dom
    circs.enter()
      .append('circle')
      .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)
  })



 
