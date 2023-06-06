import React, { useState } from "react";
import "./HorizontalStepper.scss";

const steps = [
  {
    label: "Pending",
    description: "Waiting for processing",
    icon: "bx bx-time-five",
  },
  { label: "Canceled", description: "Order canceled", icon: "bx bx-x-circle" },
  {
    label: "On Hold",
    description: "Order on hold",
    icon: "bx bx-pause-circle",
  },
  { label: "Shipped", description: "Order shipped", icon: "bx bx-package" },
  {
    label: "Delivered",
    description: "Order delivered",
    icon: "bx bx-check-circle",
  },
  { label: "Refunded", description: "Order refunded", icon: "bx bx-undo" },
];

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="horizontal-stepper">
      {steps.map((step, index) => (
        <div
          className={`step ${index === activeStep ? "active" : ""}`}
          key={index}
          onClick={() => handleStepClick(index)}
        >
          <div className="step-icon">
            <i className={step.icon}></i>
          </div>
          <div className="step-label">{step.label}</div>
          <div className="step-description">{step.description}</div>
          {index !== steps.length - 1 && (
            <div className="connecting-line"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;

// // import React, { useState } from 'react';
// import './HorizontalStepper.scss';

// const steps = [
//   { label: 'Pending', description: 'Waiting for processing', icon: 'bx bx-time-five' },
//   { label: 'Canceled', description: 'Order canceled', icon: 'bx bx-x-circle' },
//   { label: 'On Hold', description: 'Order on hold', icon: 'bx bx-pause-circle' },
//   { label: 'Shipped', description: 'Order shipped', icon: 'bx bx-package' },
//   { label: 'Delivered', description: 'Order delivered', icon: 'bx bx-check-circle' },
//   { label: 'Refunded', description: 'Order refunded', icon: 'bx bx-undo' },
// ];

// const HorizontalStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleStepClick = (index) => {
//     setActiveStep(index);
//   };

//   return (
//     <div className="horizontal-stepper">
//       {steps.map((step, index) => (
//         <div
//           className={`step ${index === activeStep ? 'active' : ''}`}
//           key={index}
//           onClick={() => handleStepClick(index)}
//         >
//           <div className="step-icon">
//             <i className={step.icon}></i>
//           </div>
//           <div className="step-label">{step.label}</div>
//           {index === activeStep && (
//             <div className="step-description">{step.description}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HorizontalStepper;
