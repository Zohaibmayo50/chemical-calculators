'use client';

import React, { useState } from 'react';

export default function CalibrationCurveCalculator() {
  const [xValues, setXValues] = useState<string>('');
  const [yValues, setYValues] = useState<string>('');
  const [unknownY, setUnknownY] = useState<string>('');
  const [slope, setSlope] = useState<number | null>(null);
  const [intercept, setIntercept] = useState<number | null>(null);
  const [rSquared, setRSquared] = useState<number | null>(null);
  const [unknownX, setUnknownX] = useState<number | null>(null);

  const calculateCalibrationCurve = () => {
    const xArray = xValues.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    const yArray = yValues.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

    if (xArray.length < 2 || yArray.length < 2) {
      alert('Please enter at least 2 data points.');
      return;
    }

    if (xArray.length !== yArray.length) {
      alert('Number of X and Y values must match.');
      return;
    }

    const n = xArray.length;
    const sumX = xArray.reduce((a, b) => a + b, 0);
    const sumY = yArray.reduce((a, b) => a + b, 0);
    const sumXY = xArray.reduce((sum, x, i) => sum + x * yArray[i], 0);
    const sumX2 = xArray.reduce((sum, x) => sum + x * x, 0);
    const sumY2 = yArray.reduce((sum, y) => sum + y * y, 0);

    // Linear regression: y = mx + b
    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / n;

    // R² calculation
    const meanY = sumY / n;
    const ssTotal = yArray.reduce((sum, y) => sum + Math.pow(y - meanY, 2), 0);
    const ssResidual = xArray.reduce((sum, x, i) => {
      const predicted = m * x + b;
      return sum + Math.pow(yArray[i] - predicted, 2);
    }, 0);
    const r2 = 1 - (ssResidual / ssTotal);

    setSlope(m);
    setIntercept(b);
    setRSquared(r2);

    // Calculate unknown X if Y is provided
    if (unknownY) {
      const y = parseFloat(unknownY);
      if (!isNaN(y)) {
        const x = (y - b) / m;
        setUnknownX(x);
      }
    }
  };

  const clearFields = () => {
    setXValues('');
    setYValues('');
    setUnknownY('');
    setSlope(null);
    setIntercept(null);
    setRSquared(null);
    setUnknownX(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Standard Concentrations (X values, comma-separated)
          </label>
          <input
            type="text"
            value={xValues}
            onChange={(e) => setXValues(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0, 10, 20, 30, 40, 50"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter known concentrations (mg/L, µM, etc.)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Measured Responses (Y values, comma-separated)
          </label>
          <input
            type="text"
            value={yValues}
            onChange={(e) => setYValues(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.05, 0.15, 0.25, 0.35, 0.45, 0.55"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter measured responses (absorbance, peak area, etc.)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Unknown Sample Response (Y) - Optional
          </label>
          <input
            type="number"
            step="any"
            value={unknownY}
            onChange={(e) => setUnknownY(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.42"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter response to calculate unknown concentration
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateCalibrationCurve}
            className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </div>

        {slope !== null && intercept !== null && rSquared !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Equation:</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-mono">
                  y = {slope.toFixed(4)}x + {intercept.toFixed(4)}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Slope (m):</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                  {slope.toFixed(6)}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Y-Intercept (b):</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                  {intercept.toFixed(6)}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">R² (Correlation):</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                  {rSquared.toFixed(6)}
                </span>
                {rSquared > 0.995 && <span className="text-green-600 ml-2">✓ Excellent fit</span>}
                {rSquared > 0.98 && rSquared <= 0.995 && <span className="text-blue-600 ml-2">Good fit</span>}
                {rSquared <= 0.98 && <span className="text-orange-600 ml-2">⚠ Check linearity</span>}
              </p>
              
              {unknownX !== null && (
                <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Unknown Concentration:</span>{' '}
                    <span className="text-tertiary-600 dark:text-tertiary-400 font-bold text-xl">
                      {unknownX.toFixed(4)}
                    </span>
                  </p>
                </div>
              )}
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: y = mx + b (Linear regression)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
