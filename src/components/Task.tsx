import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTask } from "../hooks/useTask";
import { TaskData } from "../types/task.type";

const Tasks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [taskData, setTaskData] = useState<TaskData[]>([]);

  const { data, isLoading, isError } = useTask();

  useEffect(() => {
    if (data) {
      console.log("Data loaded:", data);
      setTaskData(data);
    }
  }, [data]);

  const handleNext = () => {
    console.log("Next button clicked");
    console.log("Current index:", currentIndex);
    console.log("Task data length:", taskData.length);

    if (currentIndex < taskData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    console.log("Previous button clicked");
    console.log("Current index:", currentIndex);

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading tasks</div>;

  return (
    <div className="w-full min-h-screen bg-violet-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main Card */}
        <div className="w-full bg-violet-100 rounded-3xl p-8 relative overflow-hidden">
          {/* Avatar */}
          <div className="absolute top-8 left-8">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={taskData[currentIndex]?.image || ""}
                alt="User"
              />
            </div>
          </div>

         
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 p-8">
              {Array.from({ length: 96 }).map((_, index) => (
                <div key={index} className="w-1 h-1 rounded-full bg-black" />
              ))}
            </div>
          </div>

        
          <div className="mt-20 mb-8">
            <svg className="w-full h-32" viewBox="0 0 400 100">
              <path
                d="M0,50 C100,40 150,80 200,30 S300,60 400,50"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="opacity-30"
              />
              <circle
                cx="200"
                cy="30"
                r="4"
                fill="white"
                className="opacity-70"
              />
              <circle
                cx="195"
                cy="25"
                r="2"
                fill="white"
                className="opacity-50"
              />
              <circle
                cx="205"
                cy="25"
                r="2"
                fill="white"
                className="opacity-50"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-sm text-gray-600 mb-2 flex items-center space-x-2">
              <span>{taskData[currentIndex]?.page || 1}</span>
              <span className="text-gray-400">—</span>
              <span>{taskData[currentIndex]?.title || "Let's start"}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              {taskData[currentIndex]?.content ||
                "Experience the power of\nseamless task management"}
            </h1>
          </div>

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between relative z-20">
            {/* Progress Indicators */}
            <div className="flex items-center space-x-4">
              {Array.from({ length: taskData.length || 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-16 h-0.5 rounded-full ${
                    index === currentIndex ? "bg-blue-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

           
            <div className="flex space-x-2 relative z-30">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 transition-colors"
                style={{ zIndex: 30 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full cursor-pointer bg-white/20 hover:bg-white/30 transition-colors"
                style={{ zIndex: 30 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
