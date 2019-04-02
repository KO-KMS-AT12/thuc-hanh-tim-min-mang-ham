function minArray(arr) {
    if (arr.length == 0)
        return -1;
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

document.write('<br>'+minArray([3, 5, 1, 8, -3, 7, 8]))

document.write('<br>'+minArray([7, 12, 6, 9, 20, 56, 89]))

document.write('<br>'+minArray([]))

document.write('<br>'+minArray([0, 0, 0, 0, 0, 0]))