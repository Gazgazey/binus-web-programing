function haversineDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (degree) => degree * (Math.PI / 180);

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
}
console.log("If you wanna check my distance from home to Binus Course, here's the Coordinates:\nHome Coordinates:\n  Latitude: [-6.315747]\n  Longtitude: [106.759305]\nBinus Course Coordinate:\n  Latitude:  [-6.270417]\n  Longtitude: [106.762013]");
console.log("------------------------------------------------------------------------------")
// Example usage:
let lat1 = parseFloat(prompt("Put Latitude 1 here: ")); // Latitude of point 1
let long1 = parseFloat(prompt("Put Longitude 1 here: ")); // Longitude of point 1
let lat2 = parseFloat(prompt("Put Latitude 2 here: ")); // Latitude of point 2
let long2 = parseFloat(prompt("Put Longitude 2 here: ")); // Longitude of point 2

console.log(`Distance: ${haversineDistance(lat1, long1, lat2, long2).toFixed(2)} km`);
