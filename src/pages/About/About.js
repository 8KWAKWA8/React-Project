import React from 'react';
import './About.scss';

export function About() {
  return (
    <div className="About">
      <div className="about-container">
          <div className="about-title"> Here you will find some basic information about our site.</div>
          <div className="about-content">
              <div className="about-element">
                  <div className="about-element-title">Who are we?</div>
                  <div className="about-element-descripction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores corporis earum iusto necessitatibus quibusdam, quidem sed suscipit. Dolore quas quidem reiciendis rerum sequi sit. Incidunt necessitatibus odit quisquam reiciendis!</div>
              </div>
              <div className="about-element">
                  <div className="about-element-title">What is your goal?</div>
                  <div className="about-element-descripction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorem excepturi, in laboriosam placeat reprehenderit saepe tempore. Asperiores consequatur deleniti earum ex expedita illo ipsa iste laboriosam nisi nostrum officiis perspiciatis porro quasi quo, quod repellendus?</div>
              </div>
              <div className="about-element">
                  <div className="about-element-title">How can you contact us?</div>
                  <div className="about-element-descripction">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus consectetur debitis fuga itaque necessitatibus qui recusandae? Aliquid atque autem commodi ex inventore ipsam, nam officia reiciendis repellat sint. Accusantium adipisci, animi assumenda atque consequatur non obcaecati quibusdam voluptas.</div>
              </div>
          </div>
      </div>
    </div>
  );
}
