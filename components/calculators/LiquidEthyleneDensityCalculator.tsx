'use client';
import React, { useState } from 'react';

export default function LiquidEthyleneDensityCalculator() {
  const [temperature, setTemperature] = useState<string>('');
  const [pressure, setPressure] = useState<string>('1.013');
  const [density, setDensity] = useState<number | null>(null);
  const [specificGravity, setSpecificGravity] = useState<number | null>(null);
  const [molarVolume, setMolarVolume] = useState<number | null>(null);

  const calculateDensity = () => {
    const T = parseFloat(temperature);
    const P = parseFloat(pressure);

    if (isNaN(T) || isNaN(P)) {
      alert('Please enter valid numbers');
      return;
    }

    // Valid temperature range for liquid ethylene: -169°C to -103.7°C (boiling point)
    if (T < -169 || T > -100) {
      alert('Temperature must be between -169°C and -100°C for liquid ethylene');
      return;
    }

    if (P <= 0) {
      alert('Pressure must be positive');
      return;
    }

    // Density calculation using modified Rackett equation
    // ρ = ρ₀ × [1 + α(T - T₀)] where ρ₀ at -169°C ≈ 566 kg/m³
    // Temperature coefficient α ≈ 0.0045 K⁻¹
    
    const T0 = -169; // Reference temperature (°C)
    const rho0 = 566; // Reference density at -169°C (kg/m³)
    const alpha = -0.0045; // Temperature coefficient
    
    // Calculate density at given temperature
    let rho = rho0 * (1 + alpha * (T - T0));
    
    // Pressure correction (small for liquids, ~0.01%/bar)
    const P0 = 1.013; // Reference pressure (bar)
    const beta = 0.0001; // Pressure coefficient
    rho = rho * (1 + beta * (P - P0));
    
    setDensity(rho);
    
    // Calculate specific gravity (relative to water at 4°C = 1000 kg/m³)
    const sg = rho / 1000;
    setSpecificGravity(sg);
    
    // Calculate molar volume (cm³/mol)
    // Molar mass of C₂H₄ = 28.05 g/mol
    const molarMass = 28.05; // g/mol
    const molarVol = (molarMass / rho) * 1000; // cm³/mol
    setMolarVolume(molarVol);
  };

  const handleReset = () => {
    setTemperature('');
    setPressure('1.013');
    setDensity(null);
    setSpecificGravity(null);
    setMolarVolume(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Liquid Ethylene Density Calculator
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Density Formula:</strong> ρ = ρ₀ × [1 + α(T - T₀)] × [1 + β(P - P₀)]<br/>
            <strong>Valid Range:</strong> -169°C to -100°C (liquid phase)<br/>
            <strong>C₂H₄:</strong> Ethylene, MW = 28.05 g/mol
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Temperature (°C)
          </label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="e.g., -140"
            step="0.1"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Valid range: -169°C to -100°C (liquid ethylene)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Pressure (bar)
          </label>
          <input
            type="number"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
            placeholder="e.g., 1.013"
            step="0.01"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Standard pressure = 1.013 bar (1 atm)
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={calculateDensity}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate Density
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {density !== null && (
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 animate-fade-in">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">
            Results:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Density:</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {density.toFixed(2)} kg/m³
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Density (alt):</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {(density / 1000).toFixed(3)} g/cm³
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Specific Gravity:</span>
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {specificGravity!.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Molar Volume:</span>
              <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                {molarVolume!.toFixed(2)} cm³/mol
              </span>
            </div>
            
            <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Properties of Liquid Ethylene:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Boiling point: -103.7°C at 1 atm</li>
                <li>• Melting point: -169.2°C</li>
                <li>• Density at -169°C: ~566 kg/m³</li>
                <li>• Density at -104°C: ~430 kg/m³</li>
                <li>• Used in: Polymer production, refrigeration</li>
                <li>• Chemical formula: C₂H₄</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                At {temperature}°C and {pressure} bar
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
