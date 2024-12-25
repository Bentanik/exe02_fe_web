import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TProgressStep } from "@/utils/types/common";

interface IProgressStepProps {
  stepValue: TProgressStep[];
  currentStep: number;
  onPrevStep?: () => void;
}

export default function ProgressStep({
  stepValue,
  currentStep,
  onPrevStep,
}: IProgressStepProps) {
  const totalSteps = stepValue?.length;

  return (
    <div className="relative flex items-center justify-between w-full max-w-4xl">
      <motion.div
        className="absolute overflow-hidden top-1/2 left-0 h-1 bg-primary-admin -translate-y-1/2"
        initial={{ width: 0 }}
        animate={{
          width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
        }}
        transition={{ duration: 0.5 }}
      />
      {stepValue?.map((step, index) => (
        <div key={index} className="relative">
          <motion.div
            className={`flex items-center justify-center text-xl w-11 h-11 rounded-full border-2 cursor-pointer ${
              index < currentStep
                ? "bg-primary-admin text-white border-primary-admin"
                : "bg-white text-gray-500 border-gray-300"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: index < currentStep ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            onClick={onPrevStep}
          >
            {index < currentStep - 1 ? <Check /> : index + 1}
          </motion.div>
          <div className="absolute top-[120%] whitespace-nowrap left-1/2 -translate-x-1/2">
            <span
              className={`text-base font-semibold text-gray-500 ${
                index < currentStep && "!text-primary-admin"
              } `}
            >
              {step.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
