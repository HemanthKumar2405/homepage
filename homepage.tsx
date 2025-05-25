"use client";
import styles from "./home.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tabs = ["HOME", "PROJECTS", "TASKS", "RESOURCES", "DISCUSSION FORUM", "TRAININGS", "DASHBOARD"];

type StatusCardProps = {
  label: string;
  value: number | string;
  valueColor: string;
  labelColor: string;
};

const StatusCard = ({ label, value, valueColor, labelColor }: StatusCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl shadow-md p-6 text-center w-64 border"
  >
    <p className={`text-xl font-bold ${labelColor}`}>{label}</p>
    <p className={`text-4xl font-extrabold ${valueColor}`}>{value}</p>
  </motion.div>
);

type NotificationCardProps = {
  title: string;
  time: string;
  task: string;
};

const NotificationCard = ({ title, time, task }: NotificationCardProps) => (
  <div className={styles.notificationCard}>
    <p className="font-semibold">Project: {title}</p>
    <p className="text-sm">{time}</p>
    <p className="mt-2 text-sm text-gray-700">Task: {task}</p>
  </div>
);

type ProjectCardProps = {
  title: string;
  deadline: string;
  location: string;
};

const ProjectCard = ({ title, deadline, location }: ProjectCardProps) => (
  <div className="border p-3 rounded mb-2 flex justify-between items-center shadow-sm">
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-600">Deadline: {deadline}</p>
      <p className="text-sm text-gray-600">📍 {location}</p>
    </div>
    <button className={styles.projectBtn}>View</button>
  </div>
);

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("HOME");

  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header className="relative flex items-center justify-between p-4 border-b shadow-md">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold">
          DEPARTMENT OF PUBLIC WORKS
        </h1>

        <div className="flex gap-4 items-center ml-auto">
          <button className="rounded-full bg-blue-100 p-2">
            <Image src="/assets/icons/user.svg" alt="User" width={24} height={24} />
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full">Logout</button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-200 flex justify-center space-x-6 p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 font-medium ${
              activeTab === tab ? "bg-gray-400 text-white rounded" : "hover:underline"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="w-full">
        <Image
          src="/p.png"
          alt="Construction"
          width={1000}
          height={400}
          className="w-full h-auto"
        />
      </section>

      {/* Status Cards */}
      <section className="flex justify-around py-8 px-4">
        <StatusCard label="ONGOING PROJECTS" value={5} valueColor="text-green-400" labelColor="text-green-700" />
        <StatusCard label="UPCOMING PROJECTS" value={4} valueColor="text-orange-500" labelColor="text-orange-700" />
        <StatusCard label="COMPLETED PROJECTS" value={20} valueColor="text-red-400" labelColor="text-red-700" />
      </section>

      {/* Notifications & Projects */}
      <section className="grid grid-cols-2 gap-4 px-6 py-6">
        <div className="shadow-lg rounded-xl bg-white p-4">
          <h2 className={styles.heading}>NOTIFICATIONS</h2>
          {[1, 2].map((_, i) => (
            <NotificationCard
              key={i}
              title="Widening of roads"
              time="19th August 2024 • 15:30 hrs"
              task="Finalizing the Excavation Plan for Road Widening Project"
            />
          ))}
        </div>

        <div className="shadow-lg rounded-xl bg-white p-4">
          <h2 className={styles.heading}>PROJECTS</h2>
          {[1, 2, 3].map((_, i) => (
            <ProjectCard
              key={i}
              title="Widening Of Roads"
              deadline="28th August 2024"
              location="Chennai Central"
            />
          ))}
        </div>
      </section>

      {/* Assigned Tasks & Trainings */}
      <section className="grid grid-cols-2 gap-4 px-6 py-4">
        <div className="shadow-lg rounded-xl bg-white p-4">
          <div className="flex justify-between items-center">
            <h2 className={styles.heading}>ASSIGNED TASKS</h2>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">ASSIGN TASK</button>
          </div>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className={styles.notificationCard}>
              <p className="font-semibold">Task: Finalize Excavation Depth for Road Widening</p>
              <p className="text-sm">Assigned to: Mr. Vijay (technical)</p>
              <p className="text-sm text-gray-600">Deadline: 24th August 2024</p>
              <button className={styles.projectBtn}>View</button>
            </div>
          ))}
        </div>

        <div className="shadow-lg rounded-xl bg-white p-4">
          <h2 className={styles.heading}>TRAININGS</h2>
          {[1, 2].map((_, i) => (
            <div key={i} className={styles.notificationCard}>
              <p>TRAINING NAME: <strong>Urban Planning and GIS Integration</strong></p>
              <p>ORGANISER: Indian Institute of Urban Affairs</p>
              <p>DATE: 12th September, 2024</p>
              <p>DURATION: 10:00 AM - 4:00 PM</p>
              <button className={styles.projectBtn}>View</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center py-4 border-t mt-4 bg-gray-100">
        <div className="flex justify-between px-6">
          <p>Feedback | Complaint</p>
          <p>Help</p>
        </div>
        <p className="mt-1">Copyrights 2024 UrbanNet All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
