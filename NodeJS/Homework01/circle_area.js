const radiusOfCircle = Number(process.argv[2]);

if (radiusOfCircle) {
  const areaOfCircle = Math.PI * radiusOfCircle ** 2;
  console.log(`The area of the circle with radius ${radiusOfCircle} is ${areaOfCircle}`);
} else {
  console.log("Usage: node circle_area.js <number>");
}
