import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const MainPage = () => {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen text-white">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <motion.h1
                        className="text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Track Your Fitness Journey
                        <br /> with <span className="text-blue-300">WorkoutWithMe</span>
                    </motion.h1>
                    <p className="text-lg mb-8">
                        Your all-in-one solution for tracking workouts, setting goals, and staying motivated.
                    </p>
                    <Button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-100">
                        Get Started Today
                    </Button>
                </div>

                {/* Right Content */}
                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="w-80 bg-white text-black rounded-2xl shadow-lg">
                        <CardContent>
                            <div className="text-center">
                                <h2 className="text-xl font-semibold mb-4">Today's Progress</h2>
                                <div className="flex justify-around mb-6">
                                    <div>
                                        <p className="text-sm">Steps</p>
                                        <p className="font-bold text-lg">6,000</p>
                                    </div>
                                    <div>
                                        <p className="text-sm">Calories Burned</p>
                                        <p className="font-bold text-lg">300 cal</p>
                                    </div>
                                </div>
                                <div className="text-blue-500 font-medium">
                                    Keep up the great work!
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default MainPage;
