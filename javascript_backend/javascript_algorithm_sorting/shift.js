function shift(list, analysis) {
    let analysisItem = list[analysis];
    let previousItem = list[analysis - 1];

    // changing positions
    list[analysis] = previousItem;
    list[analysis - 1] = analysisItem;
}

// exporting shift function
module.exports = shift;
