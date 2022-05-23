import type { CalcOpts } from '../types/calcOpts';
import type { CalcActions } from '../types/calcActions';

export default function calc (opts: CalcOpts): number {
	const actions: CalcActions = {
		'-': opts.x - opts.y,
		'+': opts.x + opts.y,
	};

	return actions[opts.action];
}