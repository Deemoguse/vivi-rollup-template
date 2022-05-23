import calc from './utils/function';
import type { CalcOpts } from './types/calcOpts';

export default function echoCalc (opts: CalcOpts): string {
	const { x, y, action } = opts;
	const result = calc(opts);

	return `${x} ${action} ${y} = ${result}`;
}