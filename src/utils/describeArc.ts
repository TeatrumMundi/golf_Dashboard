/**
 * Generates an SVG path string that describes an arc.
 *
 * @param cx - The x-coordinate of the center of the arc.
 * @param cy - The y-coordinate of the center of the arc.
 * @param r - The radius of the arc.
 * @param startAngle - The starting angle of the arc in degrees.
 * @param endAngle - The ending angle of the arc in degrees.
 * @returns The SVG path data string for the arc.
 */
export function describeArc(
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number
) {
    const start = {
        x: cx + r * Math.cos((Math.PI / 180) * startAngle),
        y: cy + r * Math.sin((Math.PI / 180) * startAngle)
    };
    const end = {
        x: cx + r * Math.cos((Math.PI / 180) * endAngle),
        y: cy + r * Math.sin((Math.PI / 180) * endAngle)
    };
    let sweep = endAngle - startAngle;
    if (sweep < 0) sweep += 360;
    const largeArcFlag = sweep <= 180 ? "0" : "1";
    return [
        "M", start.x, start.y,
        "A", r, r, 0, largeArcFlag, 1, end.x, end.y
    ].join(" ");
}