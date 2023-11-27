const getNeighborhoodsList = () => {
    const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const addNeighborhood = function add(newNeighborhood) {
        sanFranciscoNeighborhoods.push(newNeighborhood);
        return sanFranciscoNeighborhoods;
    };

    return addNeighborhood;
}