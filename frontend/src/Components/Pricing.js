import React from 'react'
import '../CSS/Pricing.css'
export default function Pricing() {
  return (
    <section className="membership container" id="pricing">
        <h3 className="section-title">MEMBERSHIP PLANS</h3>
        <div className="row membership">
          <div className="col membership-card">
            <div>
              <span className="membership-plan">Basic Plan</span>
              <h4 className="card-title membership-title">$50</h4>
              <p className="card-description membership-description">per month</p>
            </div>
            <ul className="membership-feature">
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Unlimited gym access
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                1 Training program
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free fitness consultation
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free wifi
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                50% off drinks
              </li>
            </ul>
            <a href="#get-started" className="membership-btn">GET STARTED</a>
          </div>
          <div className="col membership-card">
            <div>
              <span className="membership-plan">Medium Plan</span>
              <h4 className="card-title membership-title">$100</h4>
              <p className="card-description membership-description">per month</p>
            </div>
            <ul className="membership-feature">
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Unlimited gym access
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                2 Training program
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free fitness consultation
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Personal Trainer
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free wifi
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                50% off drinks
              </li>
            </ul>
            <a href="#get-started" className="membership-btn">GET STARTED</a>
          </div>
          <div className="col membership-card">
            <div>
              <span className="membership-plan">Premium Plan</span>
              <h4 className="card-title membership-title">$150</h4>
              <p className="card-description membership-description">per month</p>
            </div>
            <ul className="membership-feature">
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Unlimited gym access
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                All Training program
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free fitness consultation
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Personal Trainers
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free clothes & equipments
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                Free wifi
              </li>
              <li className="membership-list">
                <i className="ri-checkbox-circle-fill membership-checklist"></i>
                50% off drinks
              </li>
            </ul>
            <a href="#get-started" className="membership-btn">GET STARTED</a>
          </div>
        </div>
      </section>
  )
}
