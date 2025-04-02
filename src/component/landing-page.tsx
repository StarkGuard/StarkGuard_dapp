"use client";

import { Shield, Link2, AlertTriangle, CheckCircle } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              StarkGuard
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
            Your trusted guardian in the Starknet ecosystem, protecting you from
            malicious links and ensuring a safer blockchain experience.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
              Start Scanning
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-medium transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/20">
            <Link2 className="h-12 w-12 text-blue-500 mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-3">Link Analysis</h3>
            <p className="text-gray-400">
              Advanced scanning technology to detect and flag suspicious links
              in real-time.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-yellow-500/20">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-3">Threat Detection</h3>
            <p className="text-gray-400">
              Proactive identification of potential security threats and scams.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-green-500/20">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-3">Safe Browsing</h3>
            <p className="text-gray-400">
              Ensure your Starknet journey remains secure with our trusted
              verification system.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">100K+</div>
            <div className="text-gray-400">Links Scanned</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-gray-400">Threats Detected</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-gray-400">Users Protected</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Starknet Experience?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust StarkGuard to keep them safe from
            malicious activities in the Starknet ecosystem.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
