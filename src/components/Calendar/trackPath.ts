import * as THREE from 'three';

// 12 Control Points creating an iconic Grand Prix circuit with natural undulation
const TRACK_POINTS: THREE.Vector3[] = [
  new THREE.Vector3(-18, 0.0, 14),   // Start/Finish straight
  new THREE.Vector3(-28, 0.15, 8),   // Turn 1 sweeping left
  new THREE.Vector3(-32, 0.35, -4),  // Turn 2 hairpin (Pit Stop 1 area)
  new THREE.Vector3(-24, 0.55, -14), // Turn 3 chicane
  new THREE.Vector3(-10, 0.75, -19), // Fast sweeper
  new THREE.Vector3(4, 0.85, -21),   // Turn 5 high curve (Pit Stop 2 area)
  new THREE.Vector3(18, 0.65, -17),  // Turn 6 right descent
  new THREE.Vector3(28, 0.45, -7),   // Turn 7 horseshoe (Pit Stop 3 area)
  new THREE.Vector3(25, 0.25, 6),    // Turn 8 carousel entry
  new THREE.Vector3(17, 0.15, 14),   // Turn 9 apex
  new THREE.Vector3(2, 0.08, 9),     // Turn 10 infield sweep (Pit Stop 4 area)
  new THREE.Vector3(-8, 0.02, 13),   // Final corner onto straight
];

export const trackSpline = new THREE.CatmullRomCurve3(TRACK_POINTS, true, 'centripetal', 0.5);

export const TRACK_WIDTH = 3.2;
export const CURB_WIDTH = 0.55;

export interface TrackGeometryData {
  trackGeometry: THREE.BufferGeometry;
  curbInnerGeometry: THREE.BufferGeometry;
  curbOuterGeometry: THREE.BufferGeometry;
  racingLineGeometry: THREE.BufferGeometry;
}

/**
 * Builds high-fidelity procedural geometries for the asphalt track,
 * alternating red-and-white curbs, and glowing red apex racing line.
 */
export function generateTrackGeometries(samples = 400): TrackGeometryData {
  const trackPositions: number[] = [];
  const trackNormals: number[] = [];
  const trackUvs: number[] = [];
  const trackIndices: number[] = [];

  const curbInPositions: number[] = [];
  const curbInColors: number[] = [];
  const curbInIndices: number[] = [];

  const curbOutPositions: number[] = [];
  const curbOutColors: number[] = [];
  const curbOutIndices: number[] = [];

  const racingLinePoints: THREE.Vector3[] = [];

  const up = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i <= samples; i++) {
    const t = (i % samples) / samples;
    const pt = trackSpline.getPointAt(t);
    const tangent = trackSpline.getTangentAt(t).normalize();
    const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

    const halfW = TRACK_WIDTH * 0.5;

    // Track surface vertices
    const leftPt = new THREE.Vector3().copy(pt).sub(normal.clone().multiplyScalar(halfW));
    const rightPt = new THREE.Vector3().copy(pt).add(normal.clone().multiplyScalar(halfW));

    // Outer and Inner Curbs
    const curbInEdge = new THREE.Vector3().copy(leftPt).sub(normal.clone().multiplyScalar(CURB_WIDTH));
    const curbOutEdge = new THREE.Vector3().copy(rightPt).add(normal.clone().multiplyScalar(CURB_WIDTH));

    // Curbs have slight bevel elevation
    curbInEdge.y += 0.04;
    curbOutEdge.y += 0.04;

    trackPositions.push(leftPt.x, leftPt.y, leftPt.z);
    trackPositions.push(rightPt.x, rightPt.y, rightPt.z);

    trackNormals.push(0, 1, 0, 0, 1, 0);

    const vCoord = i * 0.25;
    trackUvs.push(0, vCoord, 1, vCoord);

    // Curbs alternating red (#E10600) and white (#FFFFFF)
    const isRed = Math.floor(i / 3) % 2 === 0;
    const color = isRed ? [0.88, 0.02, 0.0] : [0.95, 0.95, 0.95];

    // Inner curb
    curbInPositions.push(curbInEdge.x, curbInEdge.y, curbInEdge.z);
    curbInPositions.push(leftPt.x, leftPt.y + 0.01, leftPt.z);
    curbInColors.push(...color, ...color);

    // Outer curb
    curbOutPositions.push(rightPt.x, rightPt.y + 0.01, rightPt.z);
    curbOutPositions.push(curbOutEdge.x, curbOutEdge.y, curbOutEdge.z);
    curbOutColors.push(...color, ...color);

    // Racing line: subtle apex drift
    // In corners, the racing line hugs the inner apex
    const curvature = Math.sin(t * Math.PI * 6);
    const apexOffset = normal.clone().multiplyScalar(curvature * 0.6);
    const raceLinePt = new THREE.Vector3().copy(pt).add(apexOffset);
    raceLinePt.y += 0.03; // Hover just above tarmac
    racingLinePoints.push(raceLinePt);

    if (i < samples) {
      const idx = i * 2;
      // Track quads (2 triangles)
      trackIndices.push(idx, idx + 1, idx + 2);
      trackIndices.push(idx + 1, idx + 3, idx + 2);

      // Curbs quads
      curbInIndices.push(idx, idx + 1, idx + 2);
      curbInIndices.push(idx + 1, idx + 3, idx + 2);

      curbOutIndices.push(idx, idx + 1, idx + 2);
      curbOutIndices.push(idx + 1, idx + 3, idx + 2);
    }
  }

  // Build Track Geometry
  const trackGeometry = new THREE.BufferGeometry();
  trackGeometry.setAttribute('position', new THREE.Float32BufferAttribute(trackPositions, 3));
  trackGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(trackNormals, 3));
  trackGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(trackUvs, 2));
  trackGeometry.setIndex(trackIndices);
  trackGeometry.computeVertexNormals();

  // Build Curbs Geometries
  const curbInnerGeometry = new THREE.BufferGeometry();
  curbInnerGeometry.setAttribute('position', new THREE.Float32BufferAttribute(curbInPositions, 3));
  curbInnerGeometry.setAttribute('color', new THREE.Float32BufferAttribute(curbInColors, 3));
  curbInnerGeometry.setIndex(curbInIndices);
  curbInnerGeometry.computeVertexNormals();

  const curbOuterGeometry = new THREE.BufferGeometry();
  curbOuterGeometry.setAttribute('position', new THREE.Float32BufferAttribute(curbOutPositions, 3));
  curbOuterGeometry.setAttribute('color', new THREE.Float32BufferAttribute(curbOutColors, 3));
  curbOuterGeometry.setIndex(curbOutIndices);
  curbOuterGeometry.computeVertexNormals();

  // Build Racing Line Geometry (Line ribbon or tube)
  const racingLineCurve = new THREE.CatmullRomCurve3(racingLinePoints, true);
  const racingLineGeometry = new THREE.TubeGeometry(racingLineCurve, 300, 0.06, 6, true);

  return {
    trackGeometry,
    curbInnerGeometry,
    curbOuterGeometry,
    racingLineGeometry,
  };
}
