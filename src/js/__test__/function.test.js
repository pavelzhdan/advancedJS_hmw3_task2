/* eslint-disable linebreak-style */
import healthStatus from '../function';

test('health status', () => {
  const testData = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 51 },
    { name: 'лучник', health: 49 },
  ];

  const result = healthStatus(testData);

  expect(result).toEqual([
    { name: 'маг', health: 51 },
    { name: 'мечник', health: 50 },
    { name: 'лучник', health: 49 },
  ]);
});

test('health status', () => {
  const testData = [
    { name: 'мечник', health: 51 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  const result = healthStatus(testData);

  expect(result).toEqual([
    { name: 'мечник', health: 51 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ]);
});
