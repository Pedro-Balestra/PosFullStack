function grafico(parametros) {
    let svg = d3.select(parametros.seletor)
        .attr("width", parametros.largura + "px")
        .attr("height", parametros.altura + "px");

    let larguraPlotagem = parametros.largura - 40;
    let alturaPlotagem = parametros.altura - 40;

    let plotagem = svg
        .append("g")
        .attr("width", larguraPlotagem)
        .attr("height", alturaPlotagem)
        .attr("transform", "translate(20, 20)");

    let fnX = d3.scaleBand()
        .domain(parametros.dados.map(d => d.chave))
        .range([0, larguraPlotagem])
        .padding(0.1);

    let fnY = d3.scaleLinear()
        .domain([0, d3.max(parametros.dados.map(d => d.valor))])
        .range([alturaPlotagem, 0]);

    let fnCores = d3.scaleOrdinal()
        .domain([0, parametros.dados.length])
        .range(d3.schemeSet3);

    plotagem.selectAll(".barras")
        .data(parametros.dados)
        .enter()
        .append("rect")
        .classed("barras", true)
        .attr("x", (d) => fnX(d.chave))
        .attr("y", (d) => fnY(d.valor))
        .attr("width", fnX.bandwidth())
        .attr("height", d => alturaPlotagem - fnY(d.valor))
        .attr("fill", (d, i) => fnCores(i));

    plotagem.selectAll(".rotulo")
        .data(parametros.dados)
        .enter()
        .append("text")
        .classed("rotulo", true)
        .text(d => d.valor)
        .attr("x", (d, i) => fnX(d.chave))
        .attr("dx", d => fnX.bandwidth() * 0.5)
        .attr("y", (d) => fnY(d.valor))
        .attr("dy", -5);
}