var count = 0;

function increase() {
    count++;
}
function get_count() {
    return count;
}

module.exports.getCount = get_count;
module.exports.inCrease = increase;