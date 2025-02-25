import { EffectNode } from '@audio/node.interface';

/**
 * Clamps value to provided min and max - min <= value <= max.
 */
export function clamp(min: number, max: number, value: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Connects effect nodes in order.
 */
export function connectNodes(nodes: EffectNode[]) {
  for (let i = nodes.length - 1; i > 0; --i) {
    nodes[i - 1].connect(nodes[i]);
  }
}

/**
 * Maps value to min max range.
 */
export function mapToMinMax(value, min, max): number {
  return value * (max - min) + min;
}

/**
 * Gets value percentage from min max range.
 */
export function percentFromMinMax(value, min, max): number {
  return ((value - min)) / (max - min);
}

/**
 * Rescales value exponentially.
 */
export function expScale(value): number {
  return Math.pow(Math.abs(value), 2);
}

/**
 * Converts seconds to milliseconds.
 */
export function toMs(value: number): number {
  return value > 0 ? value / 1000 : 0;
}

/**
 * Fast deep copy of a simple object.
 */
export function deepCopy(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Equal power cross-fade.
 */
export function equalCrossFade(value: number): [number, number] {
  const first = value === 1 ? 0 : Math.cos(value * 0.5 * Math.PI);
  const last = value === 0 ? 0 : Math.cos((1 - value) * 0.5 * Math.PI);

  return [first, last];
}

/**
 * Calculates biquad filter center frequency for a given frequencies range.
 */
export function calculateCenterFrequency(range: [number, number]): number {
  return Math.sqrt(range[0] *  range[1]);
}

/**
 * Calculates center frequency and Q (quality) parameter for bandpass filter.
 */
export function calculateBandpass(range: [number, number]): {fc: number; q: number; } {
  const fc = calculateCenterFrequency(range);
  const q = fc / (range[1] - range[0]);

  return {fc, q};
}

/**
 * Computation fast Math.tanh approximation.
 */
export function fastTanh(x: number): number {
  // Limit out of range data.
  if (x < -3) {
    x = -1;
  } else if (x > 3) {
    x = 1;
  } else {
    x = x * (27 + x * x) / (27 + 9 * x * x);
  }

  return x;
}

/**
 * Converts gain value to dB.
 */
export function gainToDB(value: number): number {
  return 20 * Math.log10(value);
}

/**
 * Converts dB value to gain.
 */
export function dBToGain(value: number): number {
  return Math.pow(10, (value / 20));
}
