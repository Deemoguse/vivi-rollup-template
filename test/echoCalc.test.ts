import echoCalc from '../src';

test('Test "echoCalc"', () => {
	expect(echoCalc({ x: 1, action: '+', y: 1 })).toBe('1 + 1 = 2');
});