import React from "react";
import AuditIcon from "../assets/Audit & Account.png";
import BudgetIcon from "../assets/Budget & Projections.png";
import PayrollIcon from "../assets/Payroll & Bookkeeping.png";
import SoftwareTrainigIcon from "../assets/Software Training & IT.png";
import TaxIcon from "../assets/Tax planning & Returns.png";
import ManagementIcon from "../assets/Management Information.png";

const services = [
  {
    icon: AuditIcon,
    title: "Audit & Account",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: BudgetIcon,
    title: "Budget & Projections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: PayrollIcon,
    title: "Payroll & Bookkeeping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: SoftwareTrainigIcon,
    title: "Software Training & IT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
  },
  {
    icon: TaxIcon,
    title: "Tax planning & Returns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: ManagementIcon,
    title: "Management Information",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Ut enim ad minim veniam",
  },
];

const Services = () => {
  return (
    <div className="container">
      <div className="services-container">
        <h2 className="text-start fw-bold">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <img src={service.icon} height={80} width={80} loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
